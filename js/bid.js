const {WaifuChain, web3} = require("../../webextension/extension/web3/WaifuChain.js");

WaifuChain.methods.creationTime().call()
.then((creationTime)=>{
	// Set the date we're counting down to
	let countDownDate=new Date().getTime()+(new Date().getTime()-creationTime*1000)%(1000 * 60 * 60 * 24);

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
	    
	    document.getElementById("cuenta").innerHTML = days + "d " + hours + "h "
	    + minutes + "m " + seconds + "s ";
	    
	    if (distance < 0) {
		clearInterval(x);
		document.getElementById("cuenta").innerHTML = "AWARDED!";
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

function getBid(waifuId){ //Returns promise
	return WaifuChain.methods.getMaxBid(waifuId).call();
}

function displayWaifusOnAuction(waifus){
	// Build structure
	waifus.forEach((waifu)=>{
		//Fill structure
	})
}