(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{250:function(t,e,n){"use strict";var a=n(281),i=n(306),o=n.n(i),s=n(274),u=n.n(s);function l(t){if(window.localStorage){null==window.localStorage.getItem("waifuchain")&&window.localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var e=JSON.parse(window.localStorage.getItem("waifuchain"));return e.logbids.hasOwnProperty(t)||(e.logbids[t]={}),e}return null}n.d(e,"e",function(){return m}),n.d(e,"d",function(){return y}),n.d(e,"f",function(){return f}),n.d(e,"k",function(){return h}),n.d(e,"i",function(){return b}),n.d(e,"h",function(){return g}),n.d(e,"c",function(){return w}),n.d(e,"g",function(){return v}),n.d(e,"b",function(){return O}),n.d(e,"a",function(){return E}),n.d(e,"j",function(){return k}),n.d(e,"l",function(){return I});var p,r="1543902712",c=new((p="undefined"!==typeof window.web3?new o.a(window.web3.currentProvider):new o.a(new o.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(u.a.ABI,u.a.contractAddress);function m(){return Number(r)}function d(t){p.eth.getAccounts().then(function(e){t(e[0])})}function y(t){var e=Number(r),n=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*e)%864e5),a=Math.floor((new Date-1e3*e)/864e5),i=Math.floor(a/30);if(i>3)return[];var o=Math.pow(2,3-i);return[n,t>=450-(1-Math.pow(2,4-i))/-1*30+o*(a%30)]}function f(){var t=Math.floor((new Date-1e3*Number(r))/864e5),e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30);return Object(a.a)(Array(n).keys()).map(function(t){return t+i})}function h(t,e,n,a){p.eth.getAccounts().then(function(i){a(!i.length),i.length&&(console.log(i[0],t,e,n),function(t,e,n,a){var i=p.utils.randomHex(32);c.methods.bid(parseInt(e),p.utils.soliditySha3({type:"uint256",value:p.utils.toWei(n)},{type:"bool",value:!1},{type:"bytes32",value:i})).send({from:t,value:p.utils.toWei(a)}).on("transactionHash",function(o){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]},s=l(t);s&&(s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o,window.localStorage.setItem("waifuchain",JSON.stringify(s)))}(t,e,n,a,i)})}(i[0],t,e,n))})}function b(){var t=Math.floor((new Date-1e3*Number(r))/864e5)-1,e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30),o=Object(a.a)(Array(n).keys()).map(function(t){return t+i}),s=JSON.parse(window.localStorage.getItem("waifuchain")).logbids;console.log(s),Object.keys(s).map(function(t){Object.keys(s[t]).map(function(e){if(console.log(o),o.indexOf(parseInt(e))<0)return-1;var n=[];s[t][e].real.forEach(function(t){return n.push(p.utils.toWei(t))});var a=[];s[t][e].fake.forEach(function(t){return a.push(!1)});var i=[];s[t][e].secret.forEach(function(t){return i.push(t)}),console.log("Reveal params: ",parseInt(e),n,a,i),c.methods.reveal(parseInt(e),n,a,i).send({from:t}).then(function(){console.log(parseInt(e),n,a,i)})})})}function g(t,e){d(function(n){var a=0,i=0,o=l(n).logbids;Object.keys(o).map(function(t){Object.keys(o[t]).map(function(t){a++})}),null!=o?(console.log(o),Object.keys(o).map(function(s){Object.keys(o[s]).map(function(o){c.methods.highestBidder(parseInt(o)).call().then(function(s){i++,t(o,s,n),e(a<=i)})})})):console.log("no storage")})}function w(t){d(function(e){c.methods.claimWaifu(parseInt(t)).send({from:e}).then(function(){console.log("Claimed ",t)})})}function v(t){d(function(e){e&&c.methods.balanceOf(e).call().then(function(n){console.log("balanceOf(account): ",n,[e]);for(var a=0;a<n;a++)c.methods.tokenOfOwnerByIndex(e,a).call().then(function(e){t(e)})})})}function k(t,e){d(function(n){console.log(n,e),c.methods.safeTransferFrom(n,t,e).send({from:n}).then(function(){return console.log("safeTransferFrom",n,t,e,"sent")})})}function O(){return!("undefined"!==typeof p)}function E(t){p.eth.net.getId().then(function(e){return t(4==e)})}function I(){d(function(t){c.methods.withdraw().send({from:t}).then(function(){return console.log("ok")})})}},268:function(t,e,n){},274:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},275:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(85),o=n(86),s=n(89),u=n(87),l=n(88),p=n(90),r=n(1),c=n.n(r),m=n(241),d=(n(268),n(250)),y=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={modal:!1,address2send:""},n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.handleAddressInputChange=n.handleAddressInputChange.bind(Object(p.a)(Object(p.a)(n))),n.sendWaifu=n.sendWaifu.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleAddressInputChange",value:function(t){this.setState({address2send:t.target.value})}},{key:"sendWaifu",value:function(){d.j(this.state.address2send,this.props.waifuID),this.toggle()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.toggle},this.props.mainButtonText),c.a.createElement(m.S,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,centered:!0,fade:!1},c.a.createElement(m.T,null,c.a.createElement("p",null,"Do you want to send ",this.props.waifuName," to someone else?"),c.a.createElement(m.J,null,c.a.createElement(m.K,{addonType:"prepend"},"Address"),c.a.createElement(m.I,{placeholder:"0x56c77d84caf29adc6f0bCd02e51a8a33a13Ed749",onChange:this.handleAddressInputChange}),c.a.createElement(m.K,{addonType:"prepend"},c.a.createElement(m.e,{color:"purple",onClick:this.sendWaifu},"Send"))))))}}]),e}(c.a.Component),f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleButtonClick=function(){var t="#/waifus/".concat(n.props.id);window.location=t},n.handleButtonClick=n.handleButtonClick.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.claim=n.claim.bind(Object(p.a)(Object(p.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:"",buttonColor:"purple"},n}return Object(l.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})}},{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description,waifuShortBio:h(e.description,50)})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)})}},{key:"componentWillUpdate",value:function(t,e){}},{key:"claim",value:function(){"claim"===this.props.typeT&&d.c(this.props.id)}},{key:"render",value:function(){var t=c.a.createElement(m.j,null,c.a.createElement(m.q,null,this.state.waifuName),c.a.createElement(m.p,null,h(this.state.waifuShortBio,50)),c.a.createElement(m.g,{className:"d-flex bd-highlight"},c.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},c.a.createElement(m.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText))));if("drop"===this.props.typeT)t=c.a.createElement(m.j,null,c.a.createElement(m.q,null,this.state.waifuName),c.a.createElement(m.p,null,h(this.state.waifuShortBio,50)),c.a.createElement(m.g,{className:"d-flex bd-highlight"},c.a.createElement(m.e,{id:"buttontourjs",color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.handleButtonClick},this.props.mainButtonText),c.a.createElement(m.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},c.a.createElement(m.C,{color:this.props.buttonColor,caret:!0}),c.a.createElement(m.B,null,c.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},c.a.createElement(m.A,{className:"pointa"},"See on the wiki"))))));else if("claim"===this.props.typeT)t=c.a.createElement(m.j,null,c.a.createElement(m.q,null,this.state.waifuName),c.a.createElement(m.p,null,h(this.state.waifuShortBio,50)),c.a.createElement(m.g,{className:"d-flex bd-highlight"},c.a.createElement(m.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText)));else if("wallet"===this.props.typeT){var e;t=c.a.createElement(m.j,null,c.a.createElement(m.q,null,this.state.waifuName),c.a.createElement(m.p,null,h(this.state.waifuShortBio,50)),c.a.createElement(m.g,{className:"d-flex bd-highlight"},c.a.createElement(y,(a(e={mainButtonText:this.props.mainButtonText,buttonColor:this.props.buttonColor},"mainButtonText",this.props.mainButtonText),a(e,"waifuName",this.state.waifuName),a(e,"waifuID",this.props.id),e)),c.a.createElement(m.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},c.a.createElement(m.C,{color:this.props.buttonColor,caret:!0}),c.a.createElement(m.B,null,c.a.createElement("a",{className:"nostile"},c.a.createElement(m.A,{className:"pointa"},"Assign to... (soon available)"))))))}return c.a.createElement("div",null,c.a.createElement(m.i,null,c.a.createElement(m.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),t))}}]),e}(r.Component);function h(t,e){return t.slice(0,e)+(t.length>e?"...":"")}e.a=f},307:function(t,e){},308:function(t,e){},312:function(t,e){},315:function(t,e){},316:function(t,e){},319:function(t,e){},837:function(t,e,n){},885:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(89),s=n(87),u=n(88),l=n(90),p=n(1),r=n.n(p),c=n(241),m=n(275),d=(n(837),n(250)),y=function(t){var e=t.waifusid;return r.a.createElement(r.a.Fragment,null,e.map(function(t){return r.a.createElement(c.w,{lg:"3",md:"4",sm:"6",key:t},r.a.createElement(m.a,{id:t,mainButtonText:"Send",typeT:"wallet",buttonColor:"purple"}))}))},f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(l.a)(Object(l.a)(n))),n.toggleFade=n.toggleFade.bind(Object(l.a)(Object(l.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,idswaifus:[],defopen:!0,open:!0},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;d.g(function(e){t.setState({idswaifus:t.state.idswaifus.concat(parseInt(e))}),console.log(e)})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(c.D,{timeout:this.state.timeout,in:this.state.fadeIn},r.a.createElement(c.y,{className:"content-container"},(t=this.state.idswaifus).length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mainTitle"},"My waifus"),r.a.createElement(c.jb,{className:"main-table"},r.a.createElement(y,{waifusid:t}))):r.a.createElement(c.w,null,r.a.createElement("img",{className:"center-0waifus",src:"https://api.waifuchain.moe/waifu404.jpg"})))));var t}}]),e}(p.Component);e.default=f}}]);
//# sourceMappingURL=56.83ff2631.chunk.js.map