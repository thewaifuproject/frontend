import Web3 from 'web3';
import contract from './ABI'
import {getLocalStorage} from './tools'

const creationTimeString = "1543902712";

let web3
let myContract

if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
    myContract = new web3.eth.Contract(contract.ABI, contract.contractAddress)
}


function getCreationTime() {
    return Number(creationTimeString);
}

function getAccount(cback) {
	if(web3){
    web3.eth.getAccounts()
        .then((accounts)=>{
            cback(accounts[0])
        })
	} else {
		cback(undefined)
	}
}

/**    Api.getAccount((account)=>{
      this.setState({
          userAddr: account,
      });
  }) */

function getCountDown(wid) {
            var creationTime=Number(creationTimeString);
            // Set the date we're counting down to
            let countDownDate=new Date().getTime() + (1000*24*60*60 - ((new Date().getTime() - creationTime*1000)%(1000 * 60 * 60 * 24)));

            let day=Math.floor((new Date()-creationTime*1000)/(1000*24*60*60));
            let month=Math.floor(day/30);
            if(month>3)
                return []
            let numWaifus=2**(3-month);
            let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);

            return [countDownDate, (wid>=first)]
}

function getWaifus() {
    let day=Math.floor((new Date()-Number(creationTimeString)*1000)/(1000*24*60*60));
    let month=Math.floor(day/30);
    if(month>3)
        return []
    let numWaifus=2**(3-month);
    let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
    return [...Array(numWaifus).keys()].map((x)=>x+first)
}

function startBid(waifuId, etherReal, etherFake, logged, disableBid){
    web3.eth.getAccounts()
        .then((accounts)=>{
            logged(!accounts.length)
            if (accounts.length){
                console.log(accounts[0], waifuId, etherReal, etherFake)
                disableBid()
                bid(accounts[0], waifuId, etherReal, etherFake)
            }
        })
}

function getFunds(){
    return web3.eth.getAccounts()
        .then((accounts)=>{
            if (accounts.length){
		return web3.eth.getBalance(accounts[0])
	    }
	})
}

function bid(account, waifuId, etherReal, etherFake){
    var secreto = web3.utils.randomHex(32);
    myContract
        .methods
        .bid(parseInt(waifuId), web3.utils.soliditySha3(
                {type: 'uint256', value: web3.utils.toWei(etherReal)},
                {type: 'bool', value: false},
                {type: 'bytes32', value: secreto}
	)).send({
        from:account,
        value:web3.utils.toWei(etherFake)
    }).on('transactionHash', (hash)=>{
        saveBidData(account, waifuId, etherReal, etherFake, secreto)
    });
}

function saveBidData(account, nid, nreal, nfake, nsecret){
    let newbid = {
        'real': [nreal],
        'fake': [nfake],
        'secret': [nsecret]
    }

    let wchainStorage = getLocalStorage(account)

    if (wchainStorage) {
        if (wchainStorage['logbids'][account].hasOwnProperty(nid)){
            wchainStorage['logbids'][account][nid]['real'].push(newbid['real'][0])
            wchainStorage['logbids'][account][nid]['fake'].push(newbid['fake'][0])
            wchainStorage['logbids'][account][nid]['secret'].push(newbid['secret'][0])
        } else {
            wchainStorage['logbids'][account][nid]=newbid;
        }
        window.localStorage.setItem('waifuchain', JSON.stringify(wchainStorage));
    } else {
        //TODO: CHECK before bid if window.localStorage is accesible
    }
}

function revealAll(startTutorialDone){
    let day=Math.floor((new Date()-Number(creationTimeString)*1000)/(1000*24*60*60))-1;
    let month=Math.floor(day/30);
    if(month>3)
        return []
    let numWaifus=2**(3-month);
    let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
    let waifusAvailable=[...Array(numWaifus).keys()].map((x)=>x+first)
 
    let waifus2reveal = JSON.parse(window.localStorage.getItem("waifuchain"))['logbids']

    let numReveals = 0

    Object.keys(waifus2reveal).map(addr => {
        Object.keys(waifus2reveal[addr]).map(id => {
            if(waifusAvailable.indexOf(parseInt(id))<0){
                return -1
            }
            numReveals++
        })
    })
    let control=0
    Object.keys(waifus2reveal).map(addr => {
        Object.keys(waifus2reveal[addr]).map(id => {
            console.log(waifusAvailable)
            if(waifusAvailable.indexOf(parseInt(id))<0){
                return -1
            }

            let _values = []
            waifus2reveal[addr][id]['real'].forEach( _v => _values.push(web3.utils.toWei(_v)))
            let _fake = []
            waifus2reveal[addr][id]['fake'].forEach( _f => _fake.push(false))
            let _secret = []
            waifus2reveal[addr][id]['secret'].forEach( _s => _secret.push(_s))
            console.log('Reveal params: ', parseInt(id), _values, _fake, _secret)


            myContract
                .methods
                .reveal(parseInt(id), _values, _fake, _secret)
                .send({from: addr})
                .then( () => {
                    console.log(parseInt(id), _values, _fake, _secret)
                }).on('transactionHash', (hash)=>{
                    control++
                    if(control>=numReveals)
                        startTutorialDone()
                });
            })
    })
}

function setWaifuProfile(waifuId, network, username){
    let profile;
    let normalizedUsername=username.trim().replace(/^@+/gm,'');
    getAccount((account)=>{
        switch(network){
	    case "Discord":
		profile="discordapp.com"+"/"+normalizedUsername;
		break;
	    case "Twitter":
		profile="twitter.com"+"/"+normalizedUsername;
		break;
	}
        myContract
            .methods
            .setWaifuProfile(parseInt(waifuId), profile)
            .send({from: account});
    });
}

function highestBidderByIDs(setupWinners, checkFinish){

    getAccount((account)=>{
        let totalWaifus = 0
        let count = 0;
        let waifus2check = getLocalStorage(account)['logbids']
        Object.keys(waifus2check).map(addr => {
            Object.keys(waifus2check[addr]).map(id => {
                totalWaifus++;
            })
        })
        if (waifus2check != null){
            console.log(waifus2check)
            Object.keys(waifus2check).map(addr => {
                Object.keys(waifus2check[addr]).map(id => {
                    myContract
                        .methods
                        .highestBidder(parseInt(id))
                        .call()
                        .then( (address) => {
                            count++
                            setupWinners(id, address, account)
                            checkFinish(totalWaifus<=count)
                        })
                })
            })
        } else {
            console.log("no storage")
            //add code to indicate that it could not load correctly
        }
    })
    
}

function claimWaifu(id){
    getAccount((account)=>{
        myContract
            .methods
            .claimWaifu(parseInt(id))
            .send({from: account})
            .then(() => {
                console.log("Claimed ", id)
                //register claim
            })
    })
}

function getWaifusByAddr(setWaifu){
    getAccount((account)=>{
        if (account)
	    {
        myContract
        .methods
        .balanceOf(account)
        .call()
        .then((numWaifus) => {
            console.log('balanceOf(account): ', numWaifus, [account])
            for (let i = 0; i < numWaifus; i++) {
                myContract
                    .methods
                    .tokenOfOwnerByIndex(account, i)
                    .call()
                    .then((waifuIndex) => {
                        setWaifu(false, waifuIndex)
                    })
            }
        })
	    } else {
		    setWaifu(true)
	    }

    })
    
}

function sendWaifu(dest, id){
    getAccount((account)=>{
    console.log(account, id)
       myContract
        .methods
        .safeTransferFrom(account, dest, id)
        .send({from: account})
        .then(()=>console.log('safeTransferFrom', account, dest, id, 'sent'))
    })
}

function checkWeb3(){
	return (typeof web3 !== 'undefined');
}

function checkNetwork(netOK){
    web3.eth.net.getId().then((networkId)=>{netOK(networkId==4)
    console.log(networkId)});
}

function withdraw(){
    getAccount((account)=>{
        myContract
            .methods
            .withdraw()
            .send({from: account})
    })
}

export {
    getCreationTime,
    getCountDown,
    getWaifus,
    getAccount,
    startBid,
    getFunds,
    revealAll,
    highestBidderByIDs,
    claimWaifu,
    getWaifusByAddr,
    checkWeb3,
    checkNetwork,
    sendWaifu,
    withdraw,
    setWaifuProfile
 };
