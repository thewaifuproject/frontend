(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{841:function(e,t,a){"use strict";a.r(t);var l=a(85),n=a(86),o=a(88),i=a(87),r=a(89),c=a(90),s=a(1),m=a.n(s),p=a(241),u=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={tooltipOpen:!1},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return m.a.createElement("span",null,m.a.createElement(p.e,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),m.a.createElement(p.nb,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),t}(m.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={tooltipOpen:[!1,!1],tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(e){var t=this.state.tooltipOpen.map(function(t,a){return a===e&&!t});this.setState({tooltipOpen:t})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(p.i,null,m.a.createElement(p.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Tooltips"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/tooltips/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(p.j,null,m.a.createElement("p",null,"Somewhere in here is a ",m.a.createElement("a",{href:"#",id:"TooltipExample"},"tooltip"),"."),m.a.createElement(p.nb,{placement:"right",isOpen:this.state.tooltipOpen[0],target:"TooltipExample",toggle:function(){e.toggle(0)}},"Hello world!"))),m.a.createElement(p.i,null,m.a.createElement(p.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Tooltip"),m.a.createElement("small",null," disable autohide")),m.a.createElement(p.j,null,m.a.createElement("p",null,"Sometimes you need to allow users to select text within a ",m.a.createElement("a",{href:"#",id:"DisabledAutoHideExample"},"tooltip"),"."),m.a.createElement(p.nb,{placement:"top",isOpen:this.state.tooltipOpen[1],autohide:!1,target:"DisabledAutoHideExample",toggle:function(){e.toggle(1)}},"Try to select this text!"))),m.a.createElement(p.i,null,m.a.createElement(p.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Tooltip"),m.a.createElement("small",null," list")),m.a.createElement(p.j,null,this.state.tooltips.map(function(e,t){return m.a.createElement(u,{key:t,item:e,id:t})}))),m.a.createElement(p.i,null,m.a.createElement(p.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Tooltip"),m.a.createElement("small",null," uncontrolled")),m.a.createElement(p.j,null,m.a.createElement("p",null,"Somewhere in here is a ",m.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),m.a.createElement(p.pb,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))))}}]),t}(s.Component);t.default=E}}]);
//# sourceMappingURL=29.568b4eee.chunk.js.map