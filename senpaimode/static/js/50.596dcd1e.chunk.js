(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{268:function(e,t,n){},275:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(85),o=n(86),l=n(89),s=n(87),u=n(88),c=n(90),h=n(1),m=n.n(h),r=n(241),p=(n(268),n(250)),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={modal:!1,address2send:""},n.toggle=n.toggle.bind(Object(c.a)(Object(c.a)(n))),n.handleAddressInputChange=n.handleAddressInputChange.bind(Object(c.a)(Object(c.a)(n))),n.sendWaifu=n.sendWaifu.bind(Object(c.a)(Object(c.a)(n))),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleAddressInputChange",value:function(e){this.setState({address2send:e.target.value})}},{key:"sendWaifu",value:function(){p.j(this.state.address2send,this.props.waifuID),this.toggle()}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(r.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.toggle},this.props.mainButtonText),m.a.createElement(r.S,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,centered:!0,fade:!1},m.a.createElement(r.T,null,m.a.createElement("p",null,"Do you want to send ",this.props.waifuName," to someone else?"),m.a.createElement(r.J,null,m.a.createElement(r.K,{addonType:"prepend"},"Address"),m.a.createElement(r.I,{placeholder:"0x56c77d84caf29adc6f0bCd02e51a8a33a13Ed749",onChange:this.handleAddressInputChange}),m.a.createElement(r.K,{addonType:"prepend"},m.a.createElement(r.e,{color:"purple",onClick:this.sendWaifu},"Send"))))))}}]),t}(m.a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleButtonClick=function(){var e="#/waifus/".concat(n.props.id);window.location=e},n.handleButtonClick=n.handleButtonClick.bind(Object(c.a)(Object(c.a)(n))),n.toggle=n.toggle.bind(Object(c.a)(Object(c.a)(n))),n.claim=n.claim.bind(Object(c.a)(Object(c.a)(n))),n.state={dropdownOpen:!1,waifuShortBio:"",waifuName:"",buttonColor:"purple"},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"componentWillMount",value:function(){var e=this;fetch("https://api.waifuchain.moe/?waifu="+this.props.id).then(function(e){return e.clone().json()}).then(function(t){e.setState({waifuName:t.name,waifuImage:t.image,waifuDescription:t.description,waifuShortBio:b(t.description,50)})}).catch(function(e){console.log("Hubo un problema con la petici\xf3n Fetch:"+e.message)})}},{key:"componentWillUpdate",value:function(e,t){}},{key:"claim",value:function(){"claim"===this.props.typeT&&p.c(this.props.id)}},{key:"render",value:function(){var e=m.a.createElement(r.j,null,m.a.createElement(r.q,null,this.state.waifuName),m.a.createElement(r.p,null,b(this.state.waifuShortBio,50)),m.a.createElement(r.g,{className:"d-flex bd-highlight"},m.a.createElement("a",{className:"nostile width100",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},m.a.createElement(r.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText))));if("drop"===this.props.typeT)e=m.a.createElement(r.j,null,m.a.createElement(r.q,null,this.state.waifuName),m.a.createElement(r.p,null,b(this.state.waifuShortBio,50)),m.a.createElement(r.g,{className:"d-flex bd-highlight"},m.a.createElement(r.e,{id:"buttontourjs",color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight",onClick:this.handleButtonClick},this.props.mainButtonText),m.a.createElement(r.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},m.a.createElement(r.C,{color:this.props.buttonColor,caret:!0}),m.a.createElement(r.B,null,m.a.createElement("a",{className:"nostile",href:"https://waifu.wiki/index.php/"+this.state.waifuName.replace(" ","_"),target:"__blank"},m.a.createElement(r.A,{className:"pointa"},"See on the wiki"))))));else if("claim"===this.props.typeT)e=m.a.createElement(r.j,null,m.a.createElement(r.q,null,this.state.waifuName),m.a.createElement(r.p,null,b(this.state.waifuShortBio,50)),m.a.createElement(r.g,{className:"d-flex bd-highlight"},m.a.createElement(r.e,{color:this.props.buttonColor,className:"p-2 flex-grow-1 bd-highlight width100",onClick:this.claim},this.props.mainButtonText)));else if("wallet"===this.props.typeT){var t;e=m.a.createElement(r.j,null,m.a.createElement(r.q,null,this.state.waifuName),m.a.createElement(r.p,null,b(this.state.waifuShortBio,50)),m.a.createElement(r.g,{className:"d-flex bd-highlight"},m.a.createElement(d,(a(t={mainButtonText:this.props.mainButtonText,buttonColor:this.props.buttonColor},"mainButtonText",this.props.mainButtonText),a(t,"waifuName",this.state.waifuName),a(t,"waifuID",this.props.id),t)),m.a.createElement(r.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},m.a.createElement(r.C,{color:this.props.buttonColor,caret:!0}),m.a.createElement(r.B,null,m.a.createElement("a",{className:"nostile"},m.a.createElement(r.A,{className:"pointa"},"Assign to... (soon available)"))))))}return m.a.createElement("div",null,m.a.createElement(r.i,null,m.a.createElement(r.o,{className:"fixedH-auction",width:"100%",src:this.state.waifuImage,alt:this.state.waifuImage}),e))}}]),t}(h.Component);function b(e,t){return e.slice(0,t)+(e.length>t?"...":"")}t.a=g},807:function(e,t,n){},880:function(e,t,n){"use strict";n.r(t);var a=n(85),i=n(86),o=n(89),l=n(87),s=n(88),u=n(90),c=n(1),h=n.n(c),m=n(275),r=n(241),p=n(437),d=n.n(p),g=n(441),b=(n(807),n(442),n(250)),w=function(e){var t=e.waifusid;return h.a.createElement(h.a.Fragment,null,t.map(function(e){return h.a.createElement(r.w,{id:"colcard",lg:"3",md:"4",sm:"6",key:e},h.a.createElement(m.a,{id:e,mainButtonText:"BID",typeT:"drop",buttonColor:"purple"}))}),console.log(t))},f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).closeTour=n.closeTour.bind(Object(u.a)(Object(u.a)(n))),n.toggle=n.toggle.bind(Object(u.a)(Object(u.a)(n))),n.toggleFade=n.toggleFade.bind(Object(u.a)(Object(u.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,idswaifus:b.f(),isTourOpen:!0},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"closeTour",value:function(){this.setState({isTourOpen:!1})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){return h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(r.D,{timeout:this.state.timeout,in:this.state.fadeIn},h.a.createElement(r.y,null,h.a.createElement("h1",{id:"titulo"},"Waifus in auction"),h.a.createElement(r.jb,{id:"waifusOnAuciton",className:"main-table"},h.a.createElement(w,{waifusid:this.state.idswaifus})))),h.a.createElement(d.a,{steps:g.a,isOpen:this.state.isTourOpen,onRequestClose:this.closeTour,closeWithMask:!1,showNumber:!1,showNavigationNumber:!1,showNavigation:!1,showButtons:!1,className:"tourHelper",showCloseButton:!1}))}}]),t}(c.Component);t.default=f}}]);
//# sourceMappingURL=50.596dcd1e.chunk.js.map