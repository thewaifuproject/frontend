import Web3 from 'web3';
import contract from './ABI'

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

function setCountDown(setupCoundownUI, wid) {
    myContract
        .methods
        .creationTime()
        .call()
        .then( creationTimeString => {
            var creationTime=Number(creationTimeString);
            // Set the date we're counting down to
            let countDownDate=new Date().getTime() + (1000*24*60*60 - ((new Date().getTime() - creationTime*1000)%(1000 * 60 * 60 * 24)));

            let day=Math.floor((new Date()-creationTime*1000)/(1000*24*60*60));
            let month=Math.floor(day/30);
            if(month>3)
                return []
            let numWaifus=2**(3-month);
            let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);

            setupCoundownUI(countDownDate, (wid>=first))
        })
}

function getWaifus(cback) {
    myContract
        .methods
        .creationTime()
        .call()
        .then( creationTimeString => {
            let day=Math.floor((new Date()-Number(creationTimeString)*1000)/(1000*24*60*60));
            let month=Math.floor(day/30);
            if(month>3)
                return []
            let numWaifus=2**(3-month);
            let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
            cback([...Array(numWaifus).keys()].map((x)=>x+first))
        })
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
    var secreto = getRandomInt(0,999999999999999)
    myContract
        .methods
        .bid(waifuId, web3.utils.soliditySha3(
                {type: 'uint256', value: web3.utils.toWei(etherReal)},
                {type: 'bool', value: false},
                {type: 'bytes32', value: web3.utils.numberToHex(secreto)}
	)).send({
        from:account,
        value:web3.utils.toWei(etherFake)
    }).then(()=>{
        saveBidData(account, waifuId, etherReal, etherFake, secreto)
        console.log("puja realizada con exito")
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function saveBidData(account, nid, nreal, nfake, nsecret){
    let newbid = {
        'real': [nreal],
        'fake': [nfake],
        'secret': [nsecret]
    }
    if (localStorage.getItem("waifuchain")==null){
        localStorage.setItem("waifuchain", JSON.stringify({ 'logbids' : { } }))
    }
    let wchainStorage = JSON.parse(localStorage.getItem("waifuchain"))
    if (!wchainStorage['logbids'].hasOwnProperty(account)){
        wchainStorage['logbids'][account] = {}
    }

    if (wchainStorage['logbids'][account].hasOwnProperty(nid)){
        wchainStorage['logbids'][account][nid]['real'].push(newbid['real'][0])
        wchainStorage['logbids'][account][nid]['fake'].push(newbid['fake'][0])
        wchainStorage['logbids'][account][nid]['secret'].push(newbid['secret'][0])
    } else {
        wchainStorage['logbids'][account][nid]=newbid;
    }
    localStorage.setItem('waifuchain', JSON.stringify(wchainStorage));
}
var toType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
function revealAll(){
    let waifus2reveal = JSON.parse(localStorage.getItem("waifuchain"))['logbids']
    console.log(waifus2reveal)
    Object.keys(waifus2reveal).map(addr => {
        Object.keys(waifus2reveal[addr]).map(id => {
            let _values = []
            waifus2reveal[addr][id]['real'].forEach( _v => _values.push(web3.utils.toWei(_v)))
            let _fake = []
            waifus2reveal[addr][id]['fake'].forEach( _f => _fake.push(false))
            let _secret = []
            waifus2reveal[addr][id]['secret'].forEach( _s => _secret.push(web3.utils.numberToHex(_s)))
            console.log([parseInt(id)])
            console.log(_values)
            console.log(_fake)
            console.log(_secret)
            myContract
                .methods
                .reveal(parseInt(id), _values, _fake, _secret)
                .call()
                .then( () => {
                    console.log('OK', id)
                })
        })
    })
}

function highestBidderByIDs(setupWinners){

    getAccount((account)=>{
        let waifus2check = JSON.parse(localStorage.getItem("waifuchain"))['logbids']
        console.log(waifus2check)
        Object.keys(waifus2check).map(addr => {
            Object.keys(waifus2check[addr]).map(id => {
                myContract
                    .methods
                    .highestBidder(id)
                    .call()
                    .then( (address) => {
                        console.log('Highest bidder: ', address)
                        setupWinners(id, address, account)
                    })
            })
        })
    })
    
}

export {
    setCountDown,
    getWaifus,
    getAccount,
    startBid,
    revealAll,
    highestBidderByIDs
 };
