(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{251:function(t,e,n){"use strict";var a=n(274),i=n(285),o=n.n(i),s=n(261),u=n.n(s);function p(t){if(window.localStorage){null==window.localStorage.getItem("waifuchain")&&window.localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var e=JSON.parse(window.localStorage.getItem("waifuchain"));return e.logbids.hasOwnProperty(t)||(e.logbids[t]={}),e}return null}n.d(e,"e",function(){return m}),n.d(e,"d",function(){return d}),n.d(e,"f",function(){return f}),n.d(e,"j",function(){return b}),n.d(e,"i",function(){return h}),n.d(e,"h",function(){return w}),n.d(e,"c",function(){return g}),n.d(e,"g",function(){return v}),n.d(e,"b",function(){return k}),n.d(e,"a",function(){return O});var l,r="1543902712",c=new((l="undefined"!==typeof window.web3?new o.a(window.web3.currentProvider):new o.a(new o.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(u.a.ABI,u.a.contractAddress);function m(){return Number(r)}function y(t){l.eth.getAccounts().then(function(e){t(e[0])})}function d(t){var e=Number(r),n=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*e)%864e5),a=Math.floor((new Date-1e3*e)/864e5),i=Math.floor(a/30);if(i>3)return[];var o=Math.pow(2,3-i);return[n,t>=450-(1-Math.pow(2,4-i))/-1*30+o*(a%30)]}function f(){var t=Math.floor((new Date-1e3*Number(r))/864e5),e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30);return Object(a.a)(Array(n).keys()).map(function(t){return t+i})}function b(t,e,n,a){l.eth.getAccounts().then(function(i){a(!i.length),i.length&&(console.log(i[0],t,e,n),function(t,e,n,a){var i=l.utils.randomHex(32);c.methods.bid(parseInt(e),l.utils.soliditySha3({type:"uint256",value:l.utils.toWei(n)},{type:"bool",value:!1},{type:"bytes32",value:i})).send({from:t,value:l.utils.toWei(a)}).on("transactionHash",function(o){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]},s=p(t);s&&(s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o,window.localStorage.setItem("waifuchain",JSON.stringify(s)))}(t,e,n,a,i)})}(i[0],t,e,n))})}function h(){var t=Math.floor((new Date-1e3*Number(r))/864e5)-1,e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30),o=Object(a.a)(Array(n).keys()).map(function(t){return t+i}),s=JSON.parse(window.localStorage.getItem("waifuchain")).logbids;console.log(s),Object.keys(s).map(function(t){Object.keys(s[t]).map(function(e){if(console.log(o),o.indexOf(parseInt(e))<0)return-1;var n=[];s[t][e].real.forEach(function(t){return n.push(l.utils.toWei(t))});var a=[];s[t][e].fake.forEach(function(t){return a.push(!1)});var i=[];s[t][e].secret.forEach(function(t){return i.push(t)}),console.log("Reveal params: ",parseInt(e),n,a,i),c.methods.reveal(parseInt(e),n,a,i).send({from:t}).then(function(){console.log(parseInt(e),n,a,i)})})})}function w(t,e){y(function(n){var a=0,i=0,o=p(n).logbids;Object.keys(o).map(function(t){Object.keys(o[t]).map(function(t){a++})}),null!=o?(console.log(o),Object.keys(o).map(function(s){Object.keys(o[s]).map(function(o){c.methods.highestBidder(parseInt(o)).call().then(function(s){i++,t(o,s,n),e(a<=i)})})})):console.log("no storage")})}function g(t){y(function(e){c.methods.claimWaifu(parseInt(t)).send({from:e}).then(function(){console.log("Claimed ",t)})})}function v(t){y(function(e){c.methods.balanceOf(e).call().then(function(n){console.log("balanceOf(account): ",n,[e]);for(var a=0;a<n;a++)c.methods.tokenOfOwnerByIndex(e,a).call().then(function(e){t(e)})})})}function k(){return!("undefined"!==typeof l)}function O(t){l.eth.net.getId().then(function(e){return t(4==e)})}},261:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},267:function(t,e,n){"use strict";var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),c=n(241),m=(n(268),n(251)),y=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).handleButtonClick=function(){var t="#/waifus/".concat(n.props.id);window.location=t},n.handleButtonClick=n.handleButtonClick.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.claim=n.claim.bind(Object(p.a)(Object(p.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:"",buttonColor:"purple"},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})}},{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description,waifuShortBio:d(e.description,50)})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)})}},{key:"componentWillUpdate",value:function(t,e){}},{key:"claim",value:function(){"claim"===this.props.typeT&&m.c(this.props.id)}},{key:"render",value:function(){var t=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText))));return"drop"===this.props.typeT?t=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement(c.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.handleButtonClick},this.props.mainButtonText),r.a.createElement(c.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(c.C,{color:this.props.buttonColor,caret:!0}),r.a.createElement(c.B,null,r.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.A,{className:"pointa"},"See on the wiki")))))):"claim"===this.props.typeT&&(t=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement(c.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText)))),r.a.createElement("div",null,r.a.createElement(c.i,null,r.a.createElement(c.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),t))}}]),e}(l.Component);function d(t,e){return t.slice(0,e)+(t.length>e?"...":"")}e.a=y},268:function(t,e,n){},288:function(t,e){},289:function(t,e){},291:function(t,e){},293:function(t,e){},294:function(t,e){},296:function(t,e){},813:function(t,e,n){},860:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),c=n(241),m=n(267),y=(n(813),n(251)),d=function(t){var e=t.waifusid;return r.a.createElement(r.a.Fragment,null,e.map(function(t){return r.a.createElement(c.w,{lg:"3",md:"4",sm:"6",key:t},r.a.createElement(m.a,{id:t,mainButtonText:"See on the wiki",typeT:"mine",buttonColor:"success"}))}))},f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.toggleFade=n.toggleFade.bind(Object(p.a)(Object(p.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,idswaifus:[]},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;y.g(function(e){t.setState({idswaifus:t.state.idswaifus.concat(parseInt(e))}),console.log(e)})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(c.D,{timeout:this.state.timeout,in:this.state.fadeIn},r.a.createElement(c.y,{className:"content-container"},(t=this.state.idswaifus).length>0?r.a.createElement("div",null,r.a.createElement("h1",{className:"mainTitle"},"My waifus"),r.a.createElement(d,{waifusid:t})):r.a.createElement(c.w,null,r.a.createElement("img",{className:"center-0waifus",src:"https://api.waifuchain.moe/waifu404.jpg"})))));var t}}]),e}(l.Component);e.default=f}}]);
//# sourceMappingURL=54.22ca1774.chunk.js.map