(window.webpackJsonp=window.webpackJsonp||[]).push([[13,32],{252:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"d",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i});function l(e){if(window.localStorage){null==window.localStorage.getItem("waifuchain")&&window.localStorage.setItem("waifuchain",JSON.stringify({logbids:{},tutorial:{auction:!0,bid:!0,beforeReveal:!0,afterReveal:!0}}));var t=JSON.parse(window.localStorage.getItem("waifuchain"));return!t.logbids.hasOwnProperty(e)&&e&&(t.logbids[e]={}),t}return null}function n(){var e=l();e.tutorial={auction:!0,bid:!0,beforeReveal:!0,afterReveal:!0},window.localStorage.setItem("waifuchain",JSON.stringify(e))}function r(e){if(!l().tutorial){var t=l();t.tutorial={auction:!0,bid:!0,beforeReveal:!0,afterReveal:!0},window.localStorage.setItem("waifuchain",JSON.stringify(t))}switch(e){case"auction":return l().tutorial[e];case"bid":return l().tutorial[e]&&!l().tutorial.auction;case"beforeReveal":return l().tutorial[e]&&!l().tutorial.auction&&!l().tutorial.bid;case"afterReveal":return l().tutorial[e]&&!l().tutorial.auction&&!l().tutorial.bid&&!l().tutorial.beforeReveal;default:return l().tutorial[e]}}function i(e){var t=l();t&&(t.tutorial[e]=!1,console.log(e),window.localStorage.setItem("waifuchain",JSON.stringify(t)))}},254:function(e,t,a){"use strict";function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,"a",function(){return l})},347:function(e,t,a){"use strict";a.r(t);var l=a(85),n=a(86),r=a(89),i=a(87),o=a(88),c=a(90),u=a(1),s=a.n(u),m=a(241),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={tooltipOpen:!1},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return s.a.createElement("span",null,s.a.createElement(m.e,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),s.a.createElement(m.ob,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),t}(s.a.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={tooltipOpen:[!1,!1],tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(e){var t=this.state.tooltipOpen.map(function(t,a){return a===e&&!t});this.setState({tooltipOpen:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(m.i,null,s.a.createElement(m.n,null,s.a.createElement("i",{className:"fa fa-align-justify"}),s.a.createElement("strong",null,"Tooltips"),s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"https://reactstrap.github.io/components/tooltips/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(m.j,null,s.a.createElement("p",null,"Somewhere in here is a ",s.a.createElement("a",{href:"#",id:"TooltipExample"},"tooltip"),"."),s.a.createElement(m.ob,{placement:"right",isOpen:this.state.tooltipOpen[0],target:"TooltipExample",toggle:function(){e.toggle(0)}},"Hello world!"))),s.a.createElement(m.i,null,s.a.createElement(m.n,null,s.a.createElement("i",{className:"fa fa-align-justify"}),s.a.createElement("strong",null,"Tooltip"),s.a.createElement("small",null," disable autohide")),s.a.createElement(m.j,null,s.a.createElement("p",null,"Sometimes you need to allow users to select text within a ",s.a.createElement("a",{href:"#",id:"DisabledAutoHideExample"},"tooltip"),"."),s.a.createElement(m.ob,{placement:"top",isOpen:this.state.tooltipOpen[1],autohide:!1,target:"DisabledAutoHideExample",toggle:function(){e.toggle(1)}},"Try to select this text!"))),s.a.createElement(m.i,null,s.a.createElement(m.n,null,s.a.createElement("i",{className:"fa fa-align-justify"}),s.a.createElement("strong",null,"Tooltip"),s.a.createElement("small",null," list")),s.a.createElement(m.j,null,this.state.tooltips.map(function(e,t){return s.a.createElement(p,{key:t,item:e,id:t})}))),s.a.createElement(m.i,null,s.a.createElement(m.n,null,s.a.createElement("i",{className:"fa fa-align-justify"}),s.a.createElement("strong",null,"Tooltip"),s.a.createElement("small",null," uncontrolled")),s.a.createElement(m.j,null,s.a.createElement("p",null,"Somewhere in here is a ",s.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),s.a.createElement(m.qb,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))))}}]),t}(u.Component);t.default=f},847:function(e,t,a){"use strict";a.r(t);var l=a(254),n=a(85),r=a(86),i=a(89),o=a(87),c=a(88),u=a(90),s=a(1),m=a.n(s),p=a(241),f=(a(246),a(290),a(347),a(252)),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).startTutorial=a.startTutorial.bind(Object(u.a)(Object(u.a)(a))),a.toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a.state={activeTab:"1"},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"startTutorial",value:function(){f.d(),window.location=""}},{key:"render",value:function(){var e=this.props;e.children,Object(l.a)(e,["children"]);return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.X,{tabs:!0}),m.a.createElement(p.lb,{activeTab:this.state.activeTab},m.a.createElement(p.mb,{tabId:"1"},m.a.createElement(p.P,{className:"list-group-accent",tag:"div"},m.a.createElement(p.Q,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"More"),m.a.createElement(p.Q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider",onClick:this.startTutorial},"Start tutorial")))))}}]),t}(s.Component);g.defaultProps={},t.default=g}}]);
//# sourceMappingURL=13.f4aa8854.chunk.js.map