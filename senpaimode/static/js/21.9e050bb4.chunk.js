(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{854:function(e,t,a){"use strict";a.r(t);var l=a(85),n=a(86),r=a(89),c=a(87),m=a(88),o=a(90),s=a(1),E=a.n(s),i=a(241),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).toggle=a.toggle.bind(Object(o.a)(Object(o.a)(a))),a.toggleFade=a.toggleFade.bind(Object(o.a)(Object(o.a)(a))),a.state={collapse:!0,fadeIn:!0,timeout:300},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){var e=this;return E.a.createElement("div",{className:"animated fadeIn"},E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",sm:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Credit Card"),E.a.createElement("small",null," Form")),E.a.createElement(i.j,null,E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"name"},"Name"),E.a.createElement(i.I,{type:"text",id:"name",placeholder:"Enter your name",required:!0})))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"ccnumber"},"Credit Card Number"),E.a.createElement(i.I,{type:"text",id:"ccnumber",placeholder:"0000 0000 0000 0000",required:!0})))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"ccmonth"},"Month"),E.a.createElement(i.I,{type:"select",name:"ccmonth",id:"ccmonth"},E.a.createElement("option",{value:"1"},"1"),E.a.createElement("option",{value:"2"},"2"),E.a.createElement("option",{value:"3"},"3"),E.a.createElement("option",{value:"4"},"4"),E.a.createElement("option",{value:"5"},"5"),E.a.createElement("option",{value:"6"},"6"),E.a.createElement("option",{value:"7"},"7"),E.a.createElement("option",{value:"8"},"8"),E.a.createElement("option",{value:"9"},"9"),E.a.createElement("option",{value:"10"},"10"),E.a.createElement("option",{value:"11"},"11"),E.a.createElement("option",{value:"12"},"12")))),E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"ccyear"},"Year"),E.a.createElement(i.I,{type:"select",name:"ccyear",id:"ccyear"},E.a.createElement("option",null,"2017"),E.a.createElement("option",null,"2018"),E.a.createElement("option",null,"2019"),E.a.createElement("option",null,"2020"),E.a.createElement("option",null,"2021"),E.a.createElement("option",null,"2022"),E.a.createElement("option",null,"2023"),E.a.createElement("option",null,"2024"),E.a.createElement("option",null,"2025"),E.a.createElement("option",null,"2026")))),E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"cvv"},"CVV/CVC"),E.a.createElement(i.I,{type:"text",id:"cvv",placeholder:"123",required:!0}))))))),E.a.createElement(i.w,{xs:"12",sm:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Company"),E.a.createElement("small",null," Form")),E.a.createElement(i.j,null,E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"company"},"Company"),E.a.createElement(i.I,{type:"text",id:"company",placeholder:"Enter your company name"})),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"vat"},"VAT"),E.a.createElement(i.I,{type:"text",id:"vat",placeholder:"DE1234567890"})),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"street"},"Street"),E.a.createElement(i.I,{type:"text",id:"street",placeholder:"Enter street name"})),E.a.createElement(i.G,{row:!0,className:"my-0"},E.a.createElement(i.w,{xs:"8"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"city"},"City"),E.a.createElement(i.I,{type:"text",id:"city",placeholder:"Enter your city"}))),E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"postal-code"},"Postal Code"),E.a.createElement(i.I,{type:"text",id:"postal-code",placeholder:"Postal Code"})))),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"country"},"Country"),E.a.createElement(i.I,{type:"text",id:"country",placeholder:"Country name"})))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",md:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Basic Form")," Elements"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,null,"Static")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement("p",{className:"form-control-static"},"Username"))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"text-input"},"Text Input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"text",id:"text-input",name:"text-input",placeholder:"Text"}),E.a.createElement(i.H,{color:"muted"},"This is a help text"))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"email-input"},"Email Input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"email",id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),E.a.createElement(i.H,{className:"help-block"},"Please enter your email"))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"password-input"},"Password")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"password",id:"password-input",name:"password-input",placeholder:"Password",autoComplete:"new-password"}),E.a.createElement(i.H,{className:"help-block"},"Please enter a complex password"))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"date-input"},"Date Input ",E.a.createElement(i.b,null,"NEW"))),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"disabled-input"},"Disabled Input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"text",id:"disabled-input",name:"disabled-input",placeholder:"Disabled",disabled:!0}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"textarea-input"},"Textarea")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"select"},"Select")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"select",name:"select",id:"select"},E.a.createElement("option",{value:"0"},"Please select"),E.a.createElement("option",{value:"1"},"Option #1"),E.a.createElement("option",{value:"2"},"Option #2"),E.a.createElement("option",{value:"3"},"Option #3")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"selectLg"},"Select Large")),E.a.createElement(i.w,{xs:"12",md:"9",size:"lg"},E.a.createElement(i.I,{type:"select",name:"selectLg",id:"selectLg",bsSize:"lg"},E.a.createElement("option",{value:"0"},"Please select"),E.a.createElement("option",{value:"1"},"Option #1"),E.a.createElement("option",{value:"2"},"Option #2"),E.a.createElement("option",{value:"3"},"Option #3")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"selectSm"},"Select Small")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"select",name:"selectSm",id:"SelectLm",bsSize:"sm"},E.a.createElement("option",{value:"0"},"Please select"),E.a.createElement("option",{value:"1"},"Option #1"),E.a.createElement("option",{value:"2"},"Option #2"),E.a.createElement("option",{value:"3"},"Option #3"),E.a.createElement("option",{value:"4"},"Option #4"),E.a.createElement("option",{value:"5"},"Option #5")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"disabledSelect"},"Disabled Select")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"select",name:"disabledSelect",id:"disabledSelect",disabled:!0,autoComplete:"name"},E.a.createElement("option",{value:"0"},"Please select"),E.a.createElement("option",{value:"1"},"Option #1"),E.a.createElement("option",{value:"2"},"Option #2"),E.a.createElement("option",{value:"3"},"Option #3")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"multiple-select"},"Multiple select")),E.a.createElement(i.w,{md:"9"},E.a.createElement(i.I,{type:"select",name:"multiple-select",id:"multiple-select",multiple:!0},E.a.createElement("option",{value:"1"},"Option #1"),E.a.createElement("option",{value:"2"},"Option #2"),E.a.createElement("option",{value:"3"},"Option #3"),E.a.createElement("option",{value:"4"},"Option #4"),E.a.createElement("option",{value:"5"},"Option #5"),E.a.createElement("option",{value:"6"},"Option #6"),E.a.createElement("option",{value:"7"},"Option #7"),E.a.createElement("option",{value:"8"},"Option #8"),E.a.createElement("option",{value:"9"},"Option #9"),E.a.createElement("option",{value:"10"},"Option #10")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,null,"Radios")),E.a.createElement(i.w,{md:"9"},E.a.createElement(i.G,{check:!0,className:"radio"},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"radio1",name:"radios",value:"option1"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"radio1"},"Option 1")),E.a.createElement(i.G,{check:!0,className:"radio"},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"radio2",name:"radios",value:"option2"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"radio2"},"Option 2")),E.a.createElement(i.G,{check:!0,className:"radio"},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"radio3",name:"radios",value:"option3"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"radio3"},"Option 3")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,null,"Inline Radios")),E.a.createElement(i.w,{md:"9"},E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"One")),E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"Two")),E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"radio",id:"inline-radio3",name:"inline-radios",value:"option3"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-radio3"},"Three")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,null,"Checkboxes")),E.a.createElement(i.w,{md:"9"},E.a.createElement(i.G,{check:!0,className:"checkbox"},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"checkbox1",name:"checkbox1",value:"option1"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"checkbox1"},"Option 1")),E.a.createElement(i.G,{check:!0,className:"checkbox"},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"checkbox2",name:"checkbox2",value:"option2"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"checkbox2"},"Option 2")),E.a.createElement(i.G,{check:!0,className:"checkbox"},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"checkbox3",name:"checkbox3",value:"option3"}),E.a.createElement(i.O,{check:!0,className:"form-check-label",htmlFor:"checkbox3"},"Option 3")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,null,"Inline Checkboxes")),E.a.createElement(i.w,{md:"9"},E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"inline-checkbox1",name:"inline-checkbox1",value:"option1"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox1"},"One")),E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox2"},"Two")),E.a.createElement(i.G,{check:!0,inline:!0},E.a.createElement(i.I,{className:"form-check-input",type:"checkbox",id:"inline-checkbox3",name:"inline-checkbox3",value:"option3"}),E.a.createElement(i.O,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox3"},"Three")))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"file-input"},"File input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"file",id:"file-input",name:"file-input"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"file-multiple-input"},"Multiple File input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"file",id:"file-multiple-input",name:"file-multiple-input",multiple:!0}))),E.a.createElement(i.G,{row:!0,hidden:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{className:"custom-file",htmlFor:"custom-file-input"},"Custom file input")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.O,{className:"custom-file"},E.a.createElement(i.I,{className:"custom-file",type:"file",id:"custom-file-input",name:"file-input"}),E.a.createElement("span",{className:"custom-file-control"})))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))),E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Inline")," Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",inline:!0},E.a.createElement(i.G,{className:"pr-1"},E.a.createElement(i.O,{htmlFor:"exampleInputName2",className:"pr-1"},"Name"),E.a.createElement(i.I,{type:"text",id:"exampleInputName2",placeholder:"Jane Doe",required:!0})),E.a.createElement(i.G,{className:"pr-1"},E.a.createElement(i.O,{htmlFor:"exampleInputEmail2",className:"pr-1"},"Email"),E.a.createElement(i.I,{type:"email",id:"exampleInputEmail2",placeholder:"jane.doe@example.com",required:!0})))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset")))),E.a.createElement(i.w,{xs:"12",md:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Horizontal")," Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"hf-email"},"Email")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"email",id:"hf-email",name:"hf-email",placeholder:"Enter Email...",autoComplete:"email"}),E.a.createElement(i.H,{className:"help-block"},"Please enter your email"))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"3"},E.a.createElement(i.O,{htmlFor:"hf-password"},"Password")),E.a.createElement(i.w,{xs:"12",md:"9"},E.a.createElement(i.I,{type:"password",id:"hf-password",name:"hf-password",placeholder:"Enter Password...",autoComplete:"current-password"}),E.a.createElement(i.H,{className:"help-block"},"Please enter your password"))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))),E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Normal")," Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"nf-email"},"Email"),E.a.createElement(i.I,{type:"email",id:"nf-email",name:"nf-email",placeholder:"Enter Email..",autoComplete:"email"}),E.a.createElement(i.H,{className:"help-block"},"Please enter your email")),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"nf-password"},"Password"),E.a.createElement(i.I,{type:"password",id:"nf-password",name:"nf-password",placeholder:"Enter Password..",autoComplete:"current-password"}),E.a.createElement(i.H,{className:"help-block"},"Please enter your password")))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))),E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Input ",E.a.createElement("strong",null,"Grid")),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"3"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-3"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"4"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-4"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"5"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-5"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"6"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-6"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"7"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-7"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"8"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-8"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"9"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-9"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"10"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-10"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"11"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-11"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{sm:"12"},E.a.createElement(i.I,{type:"text",placeholder:".col-sm-12"}))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-user"})," Login"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))),E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Input ",E.a.createElement("strong",null,"Sizes")),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.O,{sm:"5",size:"sm",htmlFor:"input-small"},"Small Input"),E.a.createElement(i.w,{sm:"6"},E.a.createElement(i.I,{bsSize:"sm",type:"text",id:"input-small",name:"input-small",className:"input-sm",placeholder:".form-control-sm"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.O,{sm:"5",htmlFor:"input-normal"},"Normal Input"),E.a.createElement(i.w,{sm:"6"},E.a.createElement(i.I,{type:"text",id:"input-normal",name:"input-normal",placeholder:"Normal"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.O,{sm:"5",size:"lg",htmlFor:"input-large"},"Large Input"),E.a.createElement(i.w,{sm:"6"},E.a.createElement(i.I,{bsSize:"lg",type:"text",id:"input-large",name:"input-large",className:"input-lg",placeholder:".form-control-lg"}))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",sm:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Validation feedback")," Form"),E.a.createElement(i.j,null,E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"inputIsValid"},"Input is valid"),E.a.createElement(i.I,{type:"text",valid:!0,id:"inputIsValid"}),E.a.createElement(i.F,{valid:!0},"Cool! Input is valid")),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"inputIsInvalid"},"Input is invalid"),E.a.createElement(i.I,{type:"text",invalid:!0,id:"inputIsInvalid"}),E.a.createElement(i.F,null,"Houston, we have a problem..."))))),E.a.createElement(i.w,{xs:"12",sm:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Validation feedback")," Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{className:"was-validated"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"inputSuccess2i"},"Non-required input"),E.a.createElement(i.I,{type:"text",className:"form-control-success",id:"inputSuccess2i"}),E.a.createElement(i.F,{valid:!0},"Non-required")),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"inputWarning2i"},"Required input"),E.a.createElement(i.I,{type:"text",className:"form-control-warning",id:"inputWarning2i",required:!0}),E.a.createElement(i.F,{className:"help-block"},"Please provide a valid information"),E.a.createElement(i.F,{valid:!0,className:"help-block"},"Input provided"))))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",md:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Icon/Text")," Groups"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-user"}))),E.a.createElement(i.I,{type:"text",id:"input1-group1",name:"input1-group1",placeholder:"Username"})))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"email",id:"input2-group1",name:"input2-group1",placeholder:"Email"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-envelope-o"})))))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-euro"}))),E.a.createElement(i.I,{type:"text",id:"input3-group1",name:"input3-group1",placeholder:".."}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,".00"))))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"success"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset")))),E.a.createElement(i.w,{xs:"12",md:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Button")," Groups"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.e,{type:"button",color:"primary"},E.a.createElement("i",{className:"fa fa-search"})," Search")),E.a.createElement(i.I,{type:"text",id:"input1-group2",name:"input1-group2",placeholder:"Username"})))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"email",id:"input2-group2",name:"input2-group2",placeholder:"Email"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.e,{type:"button",color:"primary"},"Submit"))))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.e,{type:"button",color:"primary"},E.a.createElement("i",{className:"fa fa-facebook"}))),E.a.createElement(i.I,{type:"text",id:"input3-group2",name:"input3-group2",placeholder:"Search"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.e,{type:"button",color:"primary"},E.a.createElement("i",{className:"fa fa-twitter"})))))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"success"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset")))),E.a.createElement(i.w,{xs:"12",md:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("strong",null,"Dropdowns")," Groups"),E.a.createElement(i.j,null,E.a.createElement(i.E,{className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.f,{isOpen:this.state.first,toggle:function(){e.setState({first:!e.state.first})}},E.a.createElement(i.C,{caret:!0,color:"primary"},"Dropdown"),E.a.createElement(i.B,{className:this.state.first?"show":""},E.a.createElement(i.A,null,"Action"),E.a.createElement(i.A,null,"Another Action"),E.a.createElement(i.A,null,"Something else here"),E.a.createElement(i.A,{divider:!0}),E.a.createElement(i.A,null,"Separated link")))),E.a.createElement(i.I,{type:"text",id:"input1-group3",name:"input1-group3",placeholder:"Username"})))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"email",id:"input2-group3",name:"input2-group3",placeholder:"Email"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.f,{isOpen:this.state.second,toggle:function(){e.setState({second:!e.state.second})}},E.a.createElement(i.C,{caret:!0,color:"primary"},"Dropdown"),E.a.createElement(i.B,{className:this.state.second?"show":""},E.a.createElement(i.A,null,"Action"),E.a.createElement(i.A,null,"Another Action"),E.a.createElement(i.A,null,"Something else here"),E.a.createElement(i.A,{divider:!0}),E.a.createElement(i.A,null,"Separated link"))))))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"12"},E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.f,{isOpen:this.state.third,toggle:function(){e.setState({third:!e.state.third})}},E.a.createElement(i.C,{caret:!0,color:"primary"},"Action"),E.a.createElement(i.B,{className:this.state.third?"show":""},E.a.createElement(i.A,null,"Action"),E.a.createElement(i.A,null,"Another Action"),E.a.createElement(i.A,null,"Something else here"),E.a.createElement(i.A,{divider:!0}),E.a.createElement(i.A,null,"Separated link")))),E.a.createElement(i.I,{type:"text",id:"input3-group3",name:"input3-group3",placeholder:".."}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.f,{isOpen:this.state.fourth,toggle:function(){e.setState({fourth:!e.state.fourth})}},E.a.createElement(i.C,{caret:!0,color:"primary"},"Dropdown"),E.a.createElement(i.B,{className:this.state.fourth?"show":""},E.a.createElement(i.A,null,"Action"),E.a.createElement(i.A,null,"Another Action"),E.a.createElement(i.A,null,"Something else here"),E.a.createElement(i.A,{divider:!0}),E.a.createElement(i.A,null,"Separated link"))))))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"success"},E.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),E.a.createElement(i.e,{type:"reset",size:"sm",color:"danger"},E.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",md:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Use the grid for big devices!",E.a.createElement("small",null,E.a.createElement("code",null,".col-lg-*")," ",E.a.createElement("code",null,".col-md-*")," ",E.a.createElement("code",null,".col-sm-*"))),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"8"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-8"})),E.a.createElement(i.w,{md:"4"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-4"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"7"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-7"})),E.a.createElement(i.w,{md:"5"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-5"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"6"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-6"})),E.a.createElement(i.w,{md:"6"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-6"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"5"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-5"})),E.a.createElement(i.w,{md:"7"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-7"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{md:"4"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-4"})),E.a.createElement(i.w,{md:"8"},E.a.createElement(i.I,{type:"text",placeholder:".col-md-8"}))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},"Action"),E.a.createElement(i.e,{size:"sm",color:"danger"},"Action"),E.a.createElement(i.e,{size:"sm",color:"warning"},"Action"),E.a.createElement(i.e,{size:"sm",color:"info"},"Action"),E.a.createElement(i.e,{size:"sm",color:"success"},"Action")))),E.a.createElement(i.w,{xs:"12",md:"6"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Input Grid for small devices!",E.a.createElement("small",null,E.a.createElement("code",null,".col-*"))),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post",className:"form-horizontal"},E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.I,{type:"text",placeholder:".col-4"})),E.a.createElement(i.w,{xs:"8"},E.a.createElement(i.I,{type:"text",placeholder:".col-8"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{xs:"5"},E.a.createElement(i.I,{type:"text",placeholder:".col-5"})),E.a.createElement(i.w,{xs:"7"},E.a.createElement(i.I,{type:"text",placeholder:".col-7"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{xs:"6"},E.a.createElement(i.I,{type:"text",placeholder:".col-6"})),E.a.createElement(i.w,{xs:"6"},E.a.createElement(i.I,{type:"text",placeholder:".col-6"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{xs:"7"},E.a.createElement(i.I,{type:"text",placeholder:".col-5"})),E.a.createElement(i.w,{xs:"5"},E.a.createElement(i.I,{type:"text",placeholder:".col-5"}))),E.a.createElement(i.G,{row:!0},E.a.createElement(i.w,{xs:"8"},E.a.createElement(i.I,{type:"text",placeholder:".col-8"})),E.a.createElement(i.w,{xs:"4"},E.a.createElement(i.I,{type:"text",placeholder:".col-4"}))))),E.a.createElement(i.l,null,E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},"Action"),E.a.createElement(i.e,{size:"sm",color:"danger"},"Action"),E.a.createElement(i.e,{size:"sm",color:"warning"},"Action"),E.a.createElement(i.e,{size:"sm",color:"info"},"Action"),E.a.createElement(i.e,{size:"sm",color:"success"},"Action"))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12",sm:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Example Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post"},E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,"Username")),E.a.createElement(i.I,{type:"email",id:"username3",name:"username3",autoComplete:"name"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-user"}))))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,"Email")),E.a.createElement(i.I,{type:"email",id:"email3",name:"email3",autoComplete:"username"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-envelope"}))))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,"Password")),E.a.createElement(i.I,{type:"password",id:"password3",name:"password3",autoComplete:"current-password"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-asterisk"}))))),E.a.createElement(i.G,{className:"form-actions"},E.a.createElement(i.e,{type:"submit",size:"sm",color:"primary"},"Submit")))))),E.a.createElement(i.w,{xs:"12",sm:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Example Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post"},E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"text",id:"username2",name:"username2",placeholder:"Username",autoComplete:"name"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-user"}))))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"email",id:"email2",name:"email2",placeholder:"Email",autoComplete:"username"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-envelope"}))))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.I,{type:"password",id:"password2",name:"password2",placeholder:"Password",autoComplete:"current-password"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-asterisk"}))))),E.a.createElement(i.G,{className:"form-actions"},E.a.createElement(i.e,{type:"submit",size:"sm",color:"secondary"},"Submit")))))),E.a.createElement(i.w,{xs:"12",sm:"4"},E.a.createElement(i.i,null,E.a.createElement(i.n,null,"Example Form"),E.a.createElement(i.j,null,E.a.createElement(i.E,{action:"",method:"post"},E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-user"}))),E.a.createElement(i.I,{type:"text",id:"username1",name:"username1",placeholder:"Username",autoComplete:"name"}))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-envelope"}))),E.a.createElement(i.I,{type:"email",id:"email1",name:"email1",placeholder:"Email",autoComplete:"username"}))),E.a.createElement(i.G,null,E.a.createElement(i.J,null,E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,E.a.createElement("i",{className:"fa fa-asterisk"}))),E.a.createElement(i.I,{type:"password",id:"password1",name:"password1",placeholder:"Password",autoComplete:"current-password"}))),E.a.createElement(i.G,{className:"form-actions"},E.a.createElement(i.e,{type:"submit",size:"sm",color:"success"},"Submit"))))))),E.a.createElement(i.kb,null,E.a.createElement(i.w,{xs:"12"},E.a.createElement(i.D,{timeout:this.state.timeout,in:this.state.fadeIn},E.a.createElement(i.i,null,E.a.createElement(i.n,null,E.a.createElement("i",{className:"fa fa-edit"}),"Form Elements",E.a.createElement("div",{className:"card-header-actions"},E.a.createElement(i.e,{color:"link",className:"card-header-action btn-setting"},E.a.createElement("i",{className:"icon-settings"})),E.a.createElement(i.e,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle},E.a.createElement("i",{className:"icon-arrow-up"})),E.a.createElement(i.e,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},E.a.createElement("i",{className:"icon-close"})))),E.a.createElement(i.x,{isOpen:this.state.collapse,id:"collapseExample"},E.a.createElement(i.j,null,E.a.createElement(i.E,{className:"form-horizontal"},E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"prependedInput"},"Prepended text"),E.a.createElement("div",{className:"controls"},E.a.createElement(i.J,{className:"input-prepend"},E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,"@")),E.a.createElement(i.I,{id:"prependedInput",size:"16",type:"text"})),E.a.createElement("p",{className:"help-block"},"Here's some help text"))),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"appendedInput"},"Appended text"),E.a.createElement("div",{className:"controls"},E.a.createElement(i.J,null,E.a.createElement(i.I,{id:"appendedInput",size:"16",type:"text"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,".00"))),E.a.createElement("span",{className:"help-block"},"Here's more help text"))),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"appendedPrependedInput"},"Append and prepend"),E.a.createElement("div",{className:"controls"},E.a.createElement(i.J,{className:"input-prepend"},E.a.createElement(i.K,{addonType:"prepend"},E.a.createElement(i.M,null,"$")),E.a.createElement(i.I,{id:"appendedPrependedInput",size:"16",type:"text"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.M,null,".00"))))),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"appendedInputButton"},"Append with button"),E.a.createElement("div",{className:"controls"},E.a.createElement(i.J,null,E.a.createElement(i.I,{id:"appendedInputButton",size:"16",type:"text"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.e,{color:"secondary"},"Go!"))))),E.a.createElement(i.G,null,E.a.createElement(i.O,{htmlFor:"appendedInputButtons"},"Two-button append"),E.a.createElement("div",{className:"controls"},E.a.createElement(i.J,null,E.a.createElement(i.I,{id:"appendedInputButtons",size:"16",type:"text"}),E.a.createElement(i.K,{addonType:"append"},E.a.createElement(i.e,{color:"secondary"},"Search"),E.a.createElement(i.e,{color:"secondary"},"Options"))))),E.a.createElement("div",{className:"form-actions"},E.a.createElement(i.e,{type:"submit",color:"primary"},"Save changes"),E.a.createElement(i.e,{color:"secondary"},"Cancel"))))))))))}}]),t}(s.Component);t.default=p}}]);
//# sourceMappingURL=21.9e050bb4.chunk.js.map