(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{249:function(t,e,n){"use strict";var a=n(275),i=n(287),o=n.n(i),s=n(261),u=n.n(s);function r(t){if(window.localStorage){null==window.localStorage.getItem("waifuchain")&&window.localStorage.setItem("waifuchain",JSON.stringify({logbids:{}}));var e=JSON.parse(window.localStorage.getItem("waifuchain"));return e.logbids.hasOwnProperty(t)||(e.logbids[t]={}),e}return null}n.d(e,"e",function(){return m}),n.d(e,"d",function(){return y}),n.d(e,"f",function(){return f}),n.d(e,"k",function(){return b}),n.d(e,"i",function(){return h}),n.d(e,"h",function(){return w}),n.d(e,"c",function(){return v}),n.d(e,"g",function(){return g}),n.d(e,"b",function(){return E}),n.d(e,"a",function(){return I}),n.d(e,"j",function(){return k});var l,c="1543902712",p=new((l="undefined"!==typeof window.web3?new o.a(window.web3.currentProvider):new o.a(new o.a.providers.HttpProvider("http://localhost:8545"))).eth.Contract)(u.a.ABI,u.a.contractAddress);function m(){return Number(c)}function d(t){l.eth.getAccounts().then(function(e){t(e[0])})}function y(t){var e=Number(c),n=(new Date).getTime()+(864e5-((new Date).getTime()-1e3*e)%864e5),a=Math.floor((new Date-1e3*e)/864e5),i=Math.floor(a/30);if(i>3)return[];var o=Math.pow(2,3-i);return[n,t>=450-(1-Math.pow(2,4-i))/-1*30+o*(a%30)]}function f(){var t=Math.floor((new Date-1e3*Number(c))/864e5),e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30);return Object(a.a)(Array(n).keys()).map(function(t){return t+i})}function b(t,e,n,a){l.eth.getAccounts().then(function(i){a(!i.length),i.length&&(console.log(i[0],t,e,n),function(t,e,n,a){var i=l.utils.randomHex(32);p.methods.bid(parseInt(e),l.utils.soliditySha3({type:"uint256",value:l.utils.toWei(n)},{type:"bool",value:!1},{type:"bytes32",value:i})).send({from:t,value:l.utils.toWei(a)}).on("transactionHash",function(o){!function(t,e,n,a,i){var o={real:[n],fake:[a],secret:[i]},s=r(t);s&&(s.logbids[t].hasOwnProperty(e)?(s.logbids[t][e].real.push(o.real[0]),s.logbids[t][e].fake.push(o.fake[0]),s.logbids[t][e].secret.push(o.secret[0])):s.logbids[t][e]=o,window.localStorage.setItem("waifuchain",JSON.stringify(s)))}(t,e,n,a,i)})}(i[0],t,e,n))})}function h(){var t=Math.floor((new Date-1e3*Number(c))/864e5)-1,e=Math.floor(t/30);if(e>3)return[];var n=Math.pow(2,3-e),i=450-(1-Math.pow(2,4-e))/-1*30+n*(t%30),o=Object(a.a)(Array(n).keys()).map(function(t){return t+i}),s=JSON.parse(window.localStorage.getItem("waifuchain")).logbids;console.log(s),Object.keys(s).map(function(t){Object.keys(s[t]).map(function(e){if(console.log(o),o.indexOf(parseInt(e))<0)return-1;var n=[];s[t][e].real.forEach(function(t){return n.push(l.utils.toWei(t))});var a=[];s[t][e].fake.forEach(function(t){return a.push(!1)});var i=[];s[t][e].secret.forEach(function(t){return i.push(t)}),console.log("Reveal params: ",parseInt(e),n,a,i),p.methods.reveal(parseInt(e),n,a,i).send({from:t}).then(function(){console.log(parseInt(e),n,a,i)})})})}function w(t,e){d(function(n){var a=0,i=0,o=r(n).logbids;Object.keys(o).map(function(t){Object.keys(o[t]).map(function(t){a++})}),null!=o?(console.log(o),Object.keys(o).map(function(s){Object.keys(o[s]).map(function(o){p.methods.highestBidder(parseInt(o)).call().then(function(s){i++,t(o,s,n),e(a<=i)})})})):console.log("no storage")})}function v(t){d(function(e){p.methods.claimWaifu(parseInt(t)).send({from:e}).then(function(){console.log("Claimed ",t)})})}function g(t){d(function(e){e&&p.methods.balanceOf(e).call().then(function(n){console.log("balanceOf(account): ",n,[e]);for(var a=0;a<n;a++)p.methods.tokenOfOwnerByIndex(e,a).call().then(function(e){t(e)})})})}function k(t,e){d(function(n){console.log(n,e),p.methods.safeTransferFrom(n,t,e).send({from:n}).then(function(){return console.log("safeTransferFrom",n,t,e,"sent")})})}function E(){return!("undefined"!==typeof l)}function I(t){l.eth.net.getId().then(function(e){return t(4==e)})}},261:function(t,e){t.exports.contractAddress="0x76ffb21b2c004e39aef756484c980ce8c81b7bd0",t.exports.ABI=[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_owner",type:"address"}],name:"voteFundOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"_tokenToProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBidder",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_URL",type:"string"}],name:"setBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_values",type:"uint256[]"},{name:"_fake",type:"bool[]"},{name:"_secret",type:"bytes32[]"}],name:"reveal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_profile",type:"string"}],name:"setWaifuProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],name:"bids",outputs:[{name:"blindedBid",type:"bytes32"},{name:"deposit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_profile",type:"string"}],name:"getWaifusInProfile",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"waifuIndex",type:"uint256"}],name:"claimWaifu",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"highestBid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creationTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_blindedBid",type:"bytes32"}],name:"bid",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_URL",type:"string"}],name:"voteBaseURL",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getWaifuProfile",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"waifuIndex",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"}]},290:function(t,e){},291:function(t,e){},293:function(t,e){},295:function(t,e){},296:function(t,e){},298:function(t,e){},816:function(t,e,n){},819:function(t,e,n){},822:function(t,e,n){},894:function(t,e,n){"use strict";n.r(e);var a=n(85),i=n(86),o=n(89),s=n(87),u=n(88),r=n(1),l=n.n(r),c=n(241),p=n(90),m=(n(816),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.state={tooltipOpen:!1},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return l.a.createElement("span",null,l.a.createElement("span",{className:"fa fa-question-circle",id:"Tooltip-"+this.props.id}),l.a.createElement(c.nb,{placement:this.props.pos,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},this.props.text))}}]),e}(l.a.Component)),d=n(249),y=function(t){function e(t){var n;Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).onDismissAlert=n.onDismissAlert.bind(Object(p.a)(Object(p.a)(n))),n.updateCountDown=n.updateCountDown.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n)));var i=d.d(n.props.wid);return n.state={tooltipOpen:!1,countDownDate:i[0],countdown:"-",alert:!1,alertText:"",active:i[1],show:!1,web3:!0},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=setInterval(this.updateCountDown,1e3);this.setState({intervalId:t})}},{key:"updateCountDown",value:function(){var t=(new Date).getTime(),e=this.state.countDownDate-t,n=Math.floor(e%864e5/36e5)+"h "+Math.floor(e%36e5/6e4)+"m "+Math.floor(e%6e4/1e3)+"s ";(e<0||!this.state.active)&&(clearInterval(this.state.intervalId),n="BID TIME HAS ENDED"),this.setState({countdown:n})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"onInputChangeReal",value:function(t){this.setState({realBidValue:t.target.value})}},{key:"onInputChangeFake",value:function(t){this.setState({fakeBidValue:t.target.value})}},{key:"bid",value:function(){var t=this;d.a(function(e){console.log(e),d.b()?(t.setState({web3:!1}),t.setState({alert:!0})):e?parseInt(t.state.realBidValue)>parseInt(t.state.fakeBidValue)?(t.setState({alertText:"Fake bid must be greater or equal than real bid."}),t.setState({alert:!0})):d.k(t.props.wid,t.state.realBidValue,t.state.fakeBidValue,function(e){return t.setState({alert:e,alertText:"You are not logged in in Metamask!"})}):(t.setState({alertText:"Oops! You are not in the correct network, change the network to Rinkeby. (In the metamask extension, top selector)"}),t.setState({alert:!0}))})}},{key:"onDismissAlert",value:function(){this.setState({alert:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.i,{outline:!0,color:"secondary"},l.a.createElement(c.j,null,l.a.createElement(c.y,null,l.a.createElement(c.jb,null,l.a.createElement(c.w,{xs:"12",sm:"6"},l.a.createElement("div",null,"Real bid \xa0",l.a.createElement(m,{pos:"right",id:"realq",text:f})),l.a.createElement(c.J,null,l.a.createElement(c.I,{placeholder:"0.015",type:"number",onChange:this.onInputChangeReal.bind(this)}),l.a.createElement(c.K,{addonType:"append"},"ETH"))),l.a.createElement(c.w,{xs:"12",sm:"6"},l.a.createElement("div",null,"Fake bid \xa0",l.a.createElement(m,{pos:"right",id:"fakeq",text:b})),l.a.createElement(c.J,null,l.a.createElement(c.I,{placeholder:"0.021",type:"number",onChange:this.onInputChangeFake.bind(this)}),l.a.createElement(c.K,{addonType:"append"},"ETH")))),l.a.createElement(c.jb,{className:"countdown-row"},l.a.createElement(c.w,null,l.a.createElement("div",{className:"float-left"},l.a.createElement("span",null,"Auction ends in:"),l.a.createElement("h2",null,this.state.countdown)))),l.a.createElement(c.jb,{className:"countdown-row"},l.a.createElement(c.w,null,l.a.createElement(c.a,{color:"danger",isOpen:this.state.alert,toggle:this.onDismissAlert},this.state.web3?this.state.alertText:l.a.createElement("div",null,"No wallet has been detected, do you want to know how to download one? ",l.a.createElement("a",{href:"https://waifuchain.moe/tutorial.html",target:"__blank",className:"alert-link"},"Click here to visit the tutorial!"))))),l.a.createElement(c.jb,null,l.a.createElement(c.w,null,l.a.createElement(c.e,{color:"primary",className:"float-right",onClick:this.bid.bind(this)},"BID NOW")))))))}}]),e}(r.Component),f="Enter here how much do you want to bid on the waifu in ETH",b="Enter here an arbitrary value greater than or equal to your real bid",h=(n(819),n(246)),w=n.n(h),v=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.state={activeTab:"1"},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"toggle",value:function(t){this.state.activeTab!==t&&this.setState({activeTab:t})}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement(c.W,{tabs:!0},l.a.createElement(c.X,null,l.a.createElement(c.Y,{className:w()({active:"1"===this.state.activeTab}),onClick:function(){t.toggle("1")}},"Information")),l.a.createElement(c.X,null,l.a.createElement(c.Y,{className:w()({active:"2"===this.state.activeTab}),onClick:function(){t.toggle("2")}},"How auctions work"))),l.a.createElement(c.kb,{activeTab:this.state.activeTab},l.a.createElement(c.lb,{tabId:"1"},l.a.createElement(c.jb,null,l.a.createElement(c.w,{sm:"12"},l.a.createElement("h4",null,"Biography"),l.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.props.waifuName.replace(" ","_"),target:"__blank"},l.a.createElement(c.e,{outline:!0,color:"primary"},"Know more on the wiki"))))),l.a.createElement(c.lb,{tabId:"2"},g)))}}]),e}(r.Component),g="The bid you made and the bids other users made are completely private. To assure that privacy, each user will make two bids, one \u201creal\u201d and another one \u201cfake\u201d. Only when the bidding process ends, you will know if you got the waifu. After that, the user has to manually take action to claim the waifu.",k=(n(822),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).state={waifuId:n.props.match.params.id},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("https://api.waifuchain.moe/?waifu="+this.state.waifuId).then(function(t){return t.clone().json()}).then(function(e){t.setState({waifuName:e.name,waifuImage:e.image,waifuDescription:e.description})}).catch(function(t){console.log("Hubo un problema con la petici\xf3n Fetch:"+t.message)})}},{key:"render",value:function(){return l.a.createElement(c.D,{timeout:this.state.timeout,in:this.state.fadeIn},l.a.createElement(c.y,{className:"_main-container"},l.a.createElement(c.jb,null,l.a.createElement(c.w,{className:"image-container",xs:"12",md:"4"},l.a.createElement("h1",null,this.state.waifuName),l.a.createElement("img",{width:"100%",src:this.state.waifuImage})),l.a.createElement(c.w,{className:"info-container",xs:"12",md:"8"},l.a.createElement("div",null,l.a.createElement("h1",null,this.state.waifuName),l.a.createElement("p",null,this.state.waifuDescription)),l.a.createElement(y,{wid:this.state.waifuId}))),l.a.createElement("div",{className:"tabs-container"},l.a.createElement(v,{waifuName:this.state.waifuName?this.state.waifuName:""}))))}}]),e}(r.Component));e.default=k}}]);
//# sourceMappingURL=49.9791e3e7.chunk.js.map