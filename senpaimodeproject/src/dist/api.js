import Web3 from 'web3';
import contract from './ABI'
import {getLocalStorage} from './tools'

const creationTimeString = "1543902712";

let web3

if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
// set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const myContract = new web3.eth.Contract(contract.ABI, contract.contractAddress)

function getAccount(cback) {
    web3.eth.getAccounts()
        .then((accounts)=>{
            cback(accounts[0])
        })
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

function startBid(waifuId, etherReal, etherFake, logged){
    web3.eth.getAccounts()
        .then((accounts)=>{
            logged(!accounts.length)
            if (accounts.length){
                console.log(accounts[0], waifuId, etherReal, etherFake)
                bid(accounts[0], waifuId, etherReal, etherFake)
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

function revealAll(){
    let day=Math.floor((new Date()-Number(creationTimeString)*1000)/(1000*24*60*60))-1;
    let month=Math.floor(day/30);
    if(month>3)
        return []
    let numWaifus=2**(3-month);
    let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
    let waifusAvailable=[...Array(numWaifus).keys()].map((x)=>x+first)
 
    let waifus2reveal = JSON.parse(window.localStorage.getItem("waifuchain"))['logbids']
    console.log(waifus2reveal)
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
                    console.log('OK', id)
                })
        })
    })
}

function highestBidderByIDs(setupWinners){

    getAccount((account)=>{
        let waifus2check = getLocalStorage(account)['logbids']
        if (waifus2check != null){
            console.log(waifus2check)
            Object.keys(waifus2check).map(addr => {
                Object.keys(waifus2check[addr]).map(id => {
                    myContract
                        .methods
                        .highestBidder(parseInt(id))
                        .call()
                        .then( (address) => {
                            setupWinners(id, address, account)
                            console.log(id, address)
                        })
                })
            })
        } else {
            //add code to indicate that it could not load correctly
        }
    })
    
}

function claimWaifu(id){
    myContract
        .methods
        .claimWaifu(parseInt(id))
        .call()
        .then(() => {
            console.log("Claimed ", id)
            //save
        })
}

function getWaifusByAddr(setWaifu){

    getAccount((account)=>{
        myContract
        .methods
        .balanceOf(account)
        .call()
        .then((numWaifus) => {
            console.log(numWaifus)
            for (let i = 0; i < numWaifus; i++) {
                myContract
                    .methods
                    .tokenOfOwnerByIndex(account, i)
                    .call()
                    .then((waifuIndex) => {
                        console.log(waifuIndex)
                        setWaifu(waifuIndex)
                    })
            }
        })
    })
    
}

function checkWeb3(){
	return !(typeof web3 !== 'undefined');
}

function checkNetwork(netOK){
    /*web3.version.getNetwork(function(err, networkId){
        netOK(networkId==="4")
    });*/

    //temporal
    netOK(true)
}

export {
    getCountDown,
    getWaifus,
    getAccount,
    startBid,
    revealAll,
    highestBidderByIDs,
    claimWaifu,
    getWaifusByAddr,
    checkWeb3,
    checkNetwork
 };
