(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{250:function(t,e,n){"use strict";n.d(e,"d",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"i",function(){return y}),n.d(e,"h",function(){return b}),n.d(e,"g",function(){return h}),n.d(e,"c",function(){return w}),n.d(e,"f",function(){return g}),n.d(e,"b",function(){return v}),n.d(e,"a",function(){return k});var a,i=n(279),o=n(285),s=n.n(o),u=n(261),l=n.n(u),r=new((a="undefined"!==typeof window.web3?new s.a(window.web3.currentProvider):new s.a(new s.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(l.a.ABI,l.a.contractAddress);function c(t){a.eth.getAccounts().then(function(e){t(e[0])})}function p(t){var e=Number(m),n=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*e)%864e5),a=Math.floor((new Date-1e3*e)/864e5),i=Math.floor(a/30);if(i>3)return[];var o=Math.pow(2,3-i);return[n,t>=450-(1-Math.pow(2,4-i))/-1*30+o*(a%30)]}var m="1543902712";function f(){var t=Math.floor((new Date-1e3*Number(m))/864e5),e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),a=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30);return Object(i.a)(Array(n).keys()).map(function(t){return t+a})}function y(t,e,n,i){a.eth.getAccounts().then(function(o){i(!o.length),o.length&&(console.log(o[0],t,e,n),function(t,e,n,i){var o=a.utils.randomHex(32);r.methods.bid(e,a.utils.soliditySha3({type:"uint256",value:a.utils.toWei(n)},{type:"bool",value:!1},{type:"bytes32",value:o})).send({from:t,value:a.utils.toWei(i)}).on("transactionHash",function(a){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]},s=d(t);s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o;localStorage.setItem("waifuchain",JSON.stringify(s))}(t,e,n,i,o)})}(o[0],t,e,n))})}function d(t){null==localStorage.getItem("waifuchain")&&localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var e=JSON.parse(localStorage.getItem("waifuchain"));return e.logbids.hasOwnProperty(t)||(e.logbids[t]={}),e}function b(){var t=Math.floor((new Date-1e3*Number(m))/864e5)-1,e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),o=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30),s=Object(i.a)(Array(n).keys()).map(function(t){return t+o}),u=JSON.parse(localStorage.getItem("waifuchain")).logbids;console.log(u),Object.keys(u).map(function(t){Object.keys(u[t]).map(function(e){if(console.log(s),s.indexOf(parseInt(e))<0)return-1;console.log(e);var n=[];u[t][e].real.forEach(function(t){return n.push(a.utils.toWei(t))});var i=[];u[t][e].fake.forEach(function(t){return i.push(!1)});var o=[];u[t][e].secret.forEach(function(t){return o.push(t)}),console.log(e,n,i,o),r.methods.reveal(e,n,i,o).send({from:t}).then(function(){console.log("OK",e)})})})}function h(t){c(function(e){var n=d(e).logbids;console.log(n),Object.keys(n).map(function(a){Object.keys(n[a]).map(function(n){r.methods.highestBidder(parseInt(n)).call().then(function(a){t(n,a,e)})})})})}function w(t){r.methods.claimWaifu(t).call().then(function(){console.log("Claimed ",t)})}function g(t){c(function(e){r.methods.balanceOf(e).call().then(function(n){for(var a=0;a<n;a++)r.methods.tokenOfOwnerByIndex(e,a).call().then(function(e){t(e)})})})}function v(){return console.log(!("undefined"!==typeof a)),!("undefined"!==typeof a)}function k(t){t(!0)}},261:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},267:function(t,e,n){"use strict";var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),l=n(90),r=n(1),c=n.n(r),p=n(241),m=(n(268),n(250)),f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).handleButtonClick=function(){var t="#/waifus/".concat(n.props.id);window.location=t},n.handleButtonClick=n.handleButtonClick.bind(Object(l.a)(Object(l.a)(n))),n.toggle=n.toggle.bind(Object(l.a)(Object(l.a)(n))),n.claim=n.claim.bind(Object(l.a)(Object(l.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:"",buttonColor:"purple"},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})}},{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description,waifuShortBio:y(e.description,50)})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)}),"claim"===this.props.typeT?this.setState({buttonColor:"success"}):"lost"===this.props.typeT&&this.setState({buttonColor:"warning"})}},{key:"claim",value:function(){"claim"===this.props.typeT&&m.c(this.props.id)}},{key:"render",value:function(){var t=c.a.createElement(p.j,null,c.a.createElement(p.q,null,this.state.waifuName),c.a.createElement(p.p,null,y(this.state.waifuShortBio,50)),c.a.createElement(p.g,{className:"d-flex bd-highlight"},c.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},c.a.createElement(p.e,{color:this.state.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText))));return"drop"===this.props.type&&(t=c.a.createElement(p.j,null,c.a.createElement(p.q,null,this.state.waifuName),c.a.createElement(p.p,null,y(this.state.waifuShortBio,50)),c.a.createElement(p.g,{className:"d-flex bd-highlight"},c.a.createElement(p.e,{color:this.state.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.handleButtonClick},this.props.mainButtonText),c.a.createElement(p.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},c.a.createElement(p.C,{color:this.state.buttonColor,caret:!0}),c.a.createElement(p.B,null,c.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},c.a.createElement(p.A,{className:"pointa"},"See on the wiki"))))))),c.a.createElement("div",null,c.a.createElement(p.i,null,c.a.createElement(p.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),t))}}]),e}(r.Component);function y(t,e){return t.slice(0,e)+(t.length>e?"...":"")}e.a=f},268:function(t,e,n){},288:function(t,e){},289:function(t,e){},291:function(t,e){},293:function(t,e){},294:function(t,e){},296:function(t,e){},801:function(t,e,n){},861:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),l=n(90),r=n(1),c=n.n(r),p=n(241),m=n(267),f=(n(801),n(250));function y(){var t=JSON.parse(localStorage.getItem("waifuchain"));return null==t?null:t.logbids}var d=function(t){var e=t.bidresults;return c.a.createElement(c.a.Fragment,null,e.map(function(t){return c.a.createElement(p.w,{lg:"3",md:"4",sm:"6",key:t.id},c.a.createElement(m.a,{id:t.id,mainButtonText:t.own?"Claim now":t.pending?"Pending":"Lost",typeT:t.own?"claim":t.pending?"pending":"lost"}))}))},b=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(l.a)(Object(l.a)(n))),n.toggleFade=n.toggleFade.bind(Object(l.a)(Object(l.a)(n))),n.getWaifus=n.getWaifus.bind(Object(l.a)(Object(l.a)(n))),n.revealAll=n.revealAll.bind(Object(l.a)(Object(l.a)(n))),n.setWaifuName=n.setWaifuName.bind(Object(l.a)(Object(l.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,bidresults:[],waifuslog:y(),waifuNames:{}},f.g(function(t,e,a){n.setState({bidresults:n.state.bidresults.concat({id:t,own:e===a,pending:!0})})}),n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){var t=this;Object.keys(this.state.waifuslog).map(function(e){return Object.keys(t.state.waifuslog[e]).map(function(e){return fetch("https://api.waifuchain.moe/?waifu="+e).then(function(t){return t.clone().json()}).then(function(n){t.setWaifuName(e,n.name)}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)})})})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"getWaifus",value:function(){var t=this,e=[];return null===this.state.waifuslog||0==Object.keys(this.state.waifuslog).length?e.push():Object.keys(this.state.waifuslog).map(function(n){return Object.keys(t.state.waifuslog[n]).map(function(a){return e.unshift(c.a.createElement("tr",{key:a},c.a.createElement("th",{scope:"row"},a),c.a.createElement("td",null,t.state.waifuNames[a]),c.a.createElement("td",null,t.state.waifuslog[n][a].real),c.a.createElement("td",null,t.state.waifuslog[n][a].fake),c.a.createElement("td",null,t.state.waifuslog[n][a].secret),c.a.createElement("td",null,n)))})}),e}},{key:"revealAll",value:function(){f.h()}},{key:"setWaifuName",value:function(t,e){var n=this.state.waifuNames;n[t]=e,this.setState({waifuNames:n})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(p.D,{timeout:this.state.timeout,in:this.state.fadeIn},c.a.createElement(p.y,{className:"content-container"},c.a.createElement("h1",null,"History bid"),c.a.createElement(p.mb,{hover:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Waifu ID"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Real bid"),c.a.createElement("th",null,"Fake bid"),c.a.createElement("th",null,"Secret"),c.a.createElement("th",null,"Account"))),c.a.createElement("tbody",null,this.getWaifus().map(function(t){return t}))),c.a.createElement(p.e,{color:"success",onClick:this.revealAll},"REVEAL ALL")),c.a.createElement("h1",null),c.a.createElement(p.y,{className:"content-container"},c.a.createElement("h1",null,"Results"),c.a.createElement(p.jb,{id:"waifusOnAuciton",className:"main-table"},c.a.createElement(d,{bidresults:this.state.bidresults})))))}}]),e}(r.Component);e.default=b}}]);
//# sourceMappingURL=52.c4fa7a87.chunk.js.map