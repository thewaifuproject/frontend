(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{269:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return y});var a,i=n(308),o=n(325),s=n.n(o),u=n(287),p=n.n(u);window.web3&&(a=new s.a(window.web3.currentProvider));var l=new a.eth.Contract(p.a.ABI,p.a.contractAddress);function r(t,e){l.methods.creationTime().call().then(function(n){var a=Number(n),i=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*a)%864e5),o=Math.floor((new Date-1e3*a)/864e5),s=Math.floor(o/30);if(s>3)return[];var u=Math.pow(2,3-s),p=450-(1-Math.pow(2,4-s))/-1*30+u*(o%30);t(i,e>=p)})}function c(t){l.methods.creationTime().call().then(function(e){var n=Math.floor((new Date-1e3*Number(e))/864e5),a=Math.floor(n/30);if(a>3)return[];var o=Math.pow(2,3-a),s=450-(1-Math.pow(2,4-a))/-1*30+o*(n%30);t(Object(i.a)(Array(o).keys()).map(function(t){return t+s}))})}function y(t,e,n){a.eth.getAccounts().then(function(i){console.log(i[0],t,e,n),function(t,e,n,i){var o=(s=0,u=999999999999999,Math.floor(Math.random()*(u-s))+s);var s,u;l.methods.bid(e,a.utils.soliditySha3(a.utils.toWei(n),a.utils.toWei(i),o)).send({from:t,value:a.utils.toWei(n)}).then(function(){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]};null==localStorage.getItem("waifuchain")&&localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var s=JSON.parse(localStorage.getItem("waifuchain"));s.logbids.hasOwnProperty(t)||(s.logbids[t]={});s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o;localStorage.setItem("waifuchain",JSON.stringify(s))}(t,e,n,i,o),console.log("puja realizada con exito")})}(i[0],t,e,n)})}},287:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},321:function(t,e,n){"use strict";var a=n(85),i=n(86),o=n(88),s=n(87),u=n(89),p=n(90),l=n(1),r=n.n(l),c=n(241),y=n(348),m=(n(322),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:""},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})}},{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description,waifuShortBio:d(e.description,50)})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)})}},{key:"render",value:function(){var t="/waifus/".concat(this.props.id),e=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.e,{color:"purple",className:"p-2 flex-grow-1 bd-highlight width100"},this.props.mainButtonText))));return"drop"==this.props.type&&(e=r.a.createElement(c.j,null,r.a.createElement(c.q,null,this.state.waifuName),r.a.createElement(c.p,null,d(this.state.waifuShortBio,50)),r.a.createElement(c.g,{className:"d-flex bd-highlight"},r.a.createElement(c.e,{color:"purple",className:"p-2 flex-grow-1 bd-highlight"},r.a.createElement(y.a,{className:"action-button-card",to:t},this.props.mainButtonText)),r.a.createElement(c.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(c.C,{color:"purple",caret:!0}),r.a.createElement(c.B,null,r.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},r.a.createElement(c.A,{className:"pointa"},"See on the wiki"))))))),r.a.createElement("div",null,r.a.createElement(c.i,null,r.a.createElement(c.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),e))}}]),e}(l.Component));function d(t,e){return t.slice(0,e)+(t.length>e?"...":"")}e.a=m},322:function(t,e,n){},328:function(t,e){},329:function(t,e){},331:function(t,e){},336:function(t,e){},337:function(t,e){},345:function(t,e){},794:function(t,e,n){},839:function(t,e,n){"use strict";n.r(e);var a=n(308),i=n(85),o=n(86),s=n(88),u=n(87),p=n(89),l=n(90),r=n(1),c=n.n(r),y=n(321),m=n(241),d=(n(794),n(269)),f=function(t){var e=t.waifusid;return c.a.createElement(c.a.Fragment,null,e.map(function(t){return c.a.createElement(m.w,{lg:"3",md:"4",sm:"6",key:t},c.a.createElement(y.a,{id:t,mainButtonText:"See on the wiki"}))}))},b=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).toggle=n.toggle.bind(Object(l.a)(Object(l.a)(n))),n.toggleFade=n.toggleFade.bind(Object(l.a)(Object(l.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,idswaifus:[]},d.a(function(t){n.setState({idswaifus:Object(a.a)(Array(t[0]).keys())})}),n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(t){return{fadeIn:!t}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement("div",{id:"waifu-countdown"}),c.a.createElement(m.D,{timeout:this.state.timeout,in:this.state.fadeIn},c.a.createElement(m.y,null,c.a.createElement("h1",null,"Auction history"),c.a.createElement(m.jb,{id:"waifusOnAuciton",className:"main-table"},c.a.createElement(f,{waifusid:this.state.idswaifus})))))}}]),e}(r.Component);e.default=b}}]);
//# sourceMappingURL=50.9e1fae47.chunk.js.map