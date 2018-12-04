const Web3 = require('web3');
const contract = require("../../webextension/extension/web3/ABI.js");

window.addEventListener('load', function() {

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3 = new Web3(web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!')
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

let WaifuChain = new web3.eth.Contract(contract.ABI, contract.contractAddress);

WaifuChain.methods.creationTime().call()
.then((creationTimeString)=>{
	creationTime=Number(creationTimeString);
	// Set the date we're counting down to
	let countDownDate=new Date().getTime() + (1000*24*60*60 - ((new Date().getTime() - creationTime*1000)%(1000 * 60 * 60 * 24)));

	// Update the count down every 1 second
	var x = setInterval(() => {

	    // Get todays date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now and the count down date
	    var distance = countDownDate - now;
	    
	    // Time calculations for days, hours, minutes and seconds
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    document.getElementById("waifu-countdown").innerHTML = days + "d " + hours + "h "
	    + minutes + "m " + seconds + "s ";
	    
	    if (distance < 0) {
		clearInterval(x);
		document.getElementById("waifu-countdown").innerHTML = "AWARDED!";
	    }
	}, 1000);

	displayWaifusOnAuction(getWaifusOnAuction(creationTime));
});

function getWaifusOnAuction(creationTime){
	let day=Math.floor((new Date()-creationTime*1000)/(1000*24*60*60));
	let month=Math.floor(day/30);
	if(month>3)
		return []
	let numWaifus=2**(3-month);
	let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
	return [...Array(numWaifus).keys()].map((x)=>x+first);
}

web3.eth.getAccounts().
then((accounts)=>{
	window.bid=(waifuId, ether) => { //ether is the amount to bid in ether
		WaifuChain.methods.bid(waifuId).send({
			from:accounts[0],
			value:web3.utils.toWei(ether)
		});
	}
});

window.getBid=(waifuId)=>{ //Returns promise
	return WaifuChain.methods.getMaxBid(waifuId).call();
}

window.displayWaifusOnAuction=(waifus)=>{
	// Build structure
	waifus.forEach((waifuId, waifuIndex)=>{
		WaifuChain.methods.tokenURI(waifuId).call()
		.then((waifuURL)=>
			fetch(waifuURL)
		)
		.then((res)=>
			res.json()
		)
		.then((waifu)=>{
			insertCard(waifuId, waifu)
			//document.querySelector("#waifu-"+waifuIndex+" > img").src=waifu["image"];
			//document.querySelector("#waifu-"+waifuIndex+" > p").innerText=waifu["name"].split(' ').slice(0,3).join(' ');
		});
		/*waifuList.innerHTML+=
			"<div id='waifu-"+waifuIndex+"' class='waifuCard'>"+
				"<img width='85' height='90'>"+
				"<p></p>"+
			"</div>";*/
	});
}

})
