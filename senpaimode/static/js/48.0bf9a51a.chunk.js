(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{254:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return y}),n.d(e,"f",function(){return m}),n.d(e,"e",function(){return d}),n.d(e,"d",function(){return f}),n.d(e,"a",function(){return b});var a,i=n(293),o=n(304),s=n.n(o),u=n(269),p=n.n(u),l=new((a="undefined"!==typeof window.web3?new s.a(window.web3.currentProvider):new s.a(new s.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(p.a.ABI,p.a.contractAddress);function r(t){var e=Number(c),n=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*e)%864e5),a=Math.floor((new Date-1e3*e)/864e5),i=Math.floor(a/30);if(i>3)return[];var o=Math.pow(2,3-i);return[n,t>=450-(1-Math.pow(2,4-i))/-1*30+o*(a%30)]}var c="1543902712";function y(){var t=Math.floor((new Date-1e3*Number(c))/864e5),e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),a=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30);return Object(i.a)(Array(n).keys()).map(function(t){return t+a})}function m(t,e,n,i){a.eth.getAccounts().then(function(o){i(!o.length),o.length&&(console.log(o[0],t,e,n),function(t,e,n,i){var o=a.utils.randomHex(32);l.methods.bid(e,a.utils.soliditySha3({type:"uint256",value:a.utils.toWei(n)},{type:"bool",value:!1},{type:"bytes32",value:o})).send({from:t,value:a.utils.toWei(i)}).then(function(){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]};null==localStorage.getItem("waifuchain")&&localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var s=JSON.parse(localStorage.getItem("waifuchain"));s.logbids.hasOwnProperty(t)||(s.logbids[t]={});s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o;localStorage.setItem("waifuchain",JSON.stringify(s))}(t,e,n,i,o),console.log("puja realizada con exito")})}(o[0],t,e,n))})}function d(){var t=Math.floor((new Date-1e3*Number(c))/864e5)-1,e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),o=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30),s=Object(i.a)(Array(n).keys()).map(function(t){return t+o}),u=JSON.parse(localStorage.getItem("waifuchain")).logbids;console.log(u),Object.keys(u).map(function(t){Object.keys(u[t]).map(function(e){if(console.log(s),s.indexOf(parseInt(e))<0)return-1;console.log(e);var n=[];u[t][e].real.forEach(function(t){return n.push(a.utils.toWei(t))});var i=[];u[t][e].fake.forEach(function(t){return i.push(!1)});var o=[];u[t][e].secret.forEach(function(t){return o.push(t)}),console.log(e,n,i,o),l.methods.reveal(e,n,i,o).send({from:t}).then(function(){console.log("OK",e)})})})}function f(t){var e;e=function(e){var n=JSON.parse(localStorage.getItem("waifuchain")).logbids;console.log(n),Object.keys(n).map(function(a){Object.keys(n[a]).map(function(n){l.methods.highestBidder(parseInt(n)).call().then(function(a){t(n,a,e)})})})},a.eth.getAccounts().then(function(t){e(t[0])})}function b(t){l.methods.claimWaifu(t).call().then(function(){console.log("Claimed ",t)})}},269:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},280:function(t,e,n){"use strict";var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),c=n(241),y=(n(281),n(254)),m=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).handleButtonClick=function(){var t="#/waifus/".concat(n.props.id);window.location=t},n.handleButtonClick=n.handleButtonClick.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.claim=n.claim.bind(Object(p.a)(Object(p.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:"",buttonColor:"purple"},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})}},{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description,waifuShortBio:d(e.description,50)})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)}),"claim"===this.props.typeT?this.setState({buttonColor:"success"}):"lost"===this.props.typeT&&this.setState({buttonColor:"warning"})}},{key:"claim",value:function(){"claim"===this.props.typeT&&y.a(this.props.id)}},{key:"render",value:function(){var t=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.e,{color:this.state.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText))));return"drop"===this.props.type&&(t=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement(c.e,{color:this.state.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.handleButtonClick},this.props.mainButtonText),r.a.createElement(c.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(c.C,{color:this.state.buttonColor,caret:!0}),r.a.createElement(c.B,null,r.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.A,{className:"pointa"},"See on the wiki"))))))),r.a.createElement("div",null,r.a.createElement(c.i,null,r.a.createElement(c.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),t))}}]),e}(l.Component);function d(t,e){return t.slice(0,e)+(t.length>e?"...":"")}e.a=m},281:function(t,e,n){},305:function(t,e){},306:function(t,e){},310:function(t,e){},313:function(t,e){},314:function(t,e){},317:function(t,e){},784:function(t,e,n){},853:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),c=n(280),y=n(241),m=(n(784),n(254)),d=function(t){var e=t.waifusid;return r.a.createElement(r.a.Fragment,null,e.map(function(t){return r.a.createElement(y.w,{lg:"3",md:"4",sm:"6",key:t},r.a.createElement(c.a,{id:t,mainButtonText:"BID",type:"drop"}))}))},f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.toggleFade=n.toggleFade.bind(Object(p.a)(Object(p.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,idswaifus:m.c()},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(y.D,{timeout:this.state.timeout,in:this.state.fadeIn},r.a.createElement(y.y,null,r.a.createElement("h1",null,"Waifus in auction"),r.a.createElement(y.jb,{id:"waifusOnAuciton",className:"main-table"},r.a.createElement(d,{waifusid:this.state.idswaifus})))))}}]),e}(l.Component);e.default=f}}]);
//# sourceMappingURL=48.0bf9a51a.chunk.js.map