(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{262:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return y}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return m});var a,i=n(289),o=n(300),s=n.n(o),u=n(269),p=n.n(u),l=new((a="undefined"!==typeof window.web3?new s.a(window.web3.currentProvider):new s.a(new s.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(p.a.ABI,p.a.contractAddress);function r(t,e){l.methods.creationTime().call().then(function(n){var a=Number(n),i=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*a)%864e5),o=Math.floor((new Date-1e3*a)/864e5),s=Math.floor(o/30);if(s>3)return[];var u=Math.pow(2,3-s),p=450-(1-Math.pow(2,4-s))/-1*30+u*(o%30);t(i,e>=p)})}function y(t){l.methods.creationTime().call().then(function(e){var n=Math.floor((new Date-1e3*Number(e))/864e5),a=Math.floor(n/30);if(a>3)return[];var o=Math.pow(2,3-a),s=450-(1-Math.pow(2,4-a))/-1*30+o*(n%30);t(Object(i.a)(Array(o).keys()).map(function(t){return t+s}))})}function c(t,e,n){a.eth.getAccounts().then(function(i){console.log(i[0],t,e,n),function(t,e,n,i){var o=(s=0,u=999999999999999,Math.floor(Math.random()*(u-s))+s);var s,u;l.methods.bid(e,a.utils.soliditySha3(a.utils.toWei(n),a.utils.toWei(i),o)).send({from:t,value:a.utils.toWei(n)}).then(function(){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]};null==localStorage.getItem("waifuchain")&&localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var s=JSON.parse(localStorage.getItem("waifuchain"));s.logbids.hasOwnProperty(t)||(s.logbids[t]={});s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o;localStorage.setItem("waifuchain",JSON.stringify(s))}(t,e,n,i,o),console.log("puja realizada con exito")})}(i[0],t,e,n)})}function m(){var t=JSON.parse(localStorage.getItem("waifuchain")).logbids;console.log(t),Object.keys(t).map(function(e){Object.keys(t[e]).map(function(n){n=n.toString();var i=[];t[e][n].real.map(function(t){return i.unshift(a.utils.toWei(t))});t[e][n].fake.map(function(t){return i.unshift(a.utils.toWei(t))});t[e][n].secret.map(function(t){return i.unshift(t)}),l.methods.reveal(n,i,[],[]).call().then(function(){console.log("OK",n)})})})}},269:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},301:function(t,e){},302:function(t,e){},306:function(t,e){},309:function(t,e){},310:function(t,e){},313:function(t,e){},798:function(t,e,n){},843:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),y=n(241),c=(n(798),n(262));var m=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.toggleFade=n.toggleFade.bind(Object(p.a)(Object(p.a)(n))),n.getWaifus=n.getWaifus.bind(Object(p.a)(Object(p.a)(n))),n.revealAll=n.revealAll.bind(Object(p.a)(Object(p.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,waifus:JSON.parse(localStorage.getItem("waifuchain")).logbids},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"getWaifus",value:function(){var t=this,e=[];return Object.keys(this.state.waifus).map(function(n){Object.keys(t.state.waifus[n]).map(function(a){return e.unshift(r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},a),r.a.createElement("td",null,"Waifu"),r.a.createElement("td",null,t.state.waifus[n][a].real),r.a.createElement("td",null,t.state.waifus[n][a].fake),r.a.createElement("td",null,t.state.waifus[n][a].secret),r.a.createElement("td",null,n)))})}),e}},{key:"revealAll",value:function(){c.b()}},{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(y.D,{timeout:this.state.timeout,in:this.state.fadeIn},r.a.createElement(y.y,{className:"_main-container"},r.a.createElement("h1",null,"History bid"),console.log(this.state.waifus),r.a.createElement(y.mb,{hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Waifu ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Real bid"),r.a.createElement("th",null,"Fake bid"),r.a.createElement("th",null,"Secret"),r.a.createElement("th",null,"Account"))),r.a.createElement("tbody",null,this.getWaifus().map(function(t){return t}))),r.a.createElement(y.e,{color:"success",onClick:this.revealAll},"REVEAL ALL"))))}}]),e}(l.Component);e.default=m}}]);
//# sourceMappingURL=52.921ba6d2.chunk.js.map