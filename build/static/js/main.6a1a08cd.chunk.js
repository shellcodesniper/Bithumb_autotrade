(this.webpackJsonphit_the_bot=this.webpackJsonphit_the_bot||[]).push([[0],{125:function(e,t,a){},194:function(e,t,a){e.exports=a(334)},199:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),l=a.n(c),o=(a(125),a(23)),i=a(24),u=a(25),s=a(26),m=(a(199),a(68)),d=a(17),p=a(344),h=a(183),f=a(352),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[{key:"contact",active:!0,content:r.a.createElement("b",null,"\uae30\ub2a5 \ucd94\uac00 / \ubb38\uc758 \uc0ac\ud56d")},{key:"info",active:!1,content:"\uac1c\ubc1c : shellcodesniper / KuuWangE"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{items:this.state.items})}}]),a}(r.a.Component),v=a(343);function y(e){return r.a.createElement(f.a,{vertical:!0},r.a.createElement(f.a.Item,{name:"home",active:"home"===e.activeItem,onClick:e.handleItemClick},"HOME"),r.a.createElement(f.a.Item,{name:"info",active:"info"===e.activeItem,onClick:e.handleItemClick},"\ud68c\uc6d0\uc815\ubcf4"),r.a.createElement(f.a.Item,{name:"spam",active:"spam"===e.activeItem,onClick:e.handleItemClick},"\uc790\uc0b0\uad00\ub9ac"),r.a.createElement(f.a.Item,{name:"updates",active:"updates"===e.activeItem,onClick:e.handleItemClick},"\uc794\uace0\ud604\ud669"),r.a.createElement(f.a.Item,null,r.a.createElement(v.a,{icon:"search",placeholder:"Search mail..."})))}var g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleItemClick=function(e,t){var a=t.name;n.setState({activeItem:a})},n.state={activeItem:e.currentName,redirect:""},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){if(this.state.activeItem!==t.activeItem&&this.state.activeItem!==this.props.currentName){var n="";n="info"===this.state.activeItem?"/info":"/",this.setState({redirect:n})}}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(d.a,{to:this.state.redirect}):r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.a,{split:"vertical",className:"makeScrollable",minSize:100,defaultSize:212},r.a.createElement("div",{className:"dividerLeft"},r.a.createElement(y,{activeItem:this.state.activeItem,handleItemClick:this.handleItemClick})),r.a.createElement("div",{className:"dividerRight"},this.props.children)))}}]),a}(r.a.Component),b=a(71),O=a(350),_=a(351),S=a(345),I=a(354),K=a(53),j=a(353),C=a(349),k=(window.ipcRenderer,{getApiData:function(){var e=localStorage.getItem("connectKey"),t=localStorage.getItem("secretKey");return{connectKey:e=e||"",secretKey:t=t||""}},prepareApiData:function(e){return{apiData:this.getApiData(),apiParams:e}},decodeApiResponse:function(e){return e&&"ERROR"!==e?"0000"!==e.status?(console.error("###### found Error in decodeApiResponse ######"),console.error("CODE :"+e.status),null):e.data:null},getDateFromTimeStamp:function(e){var t=parseInt(e);return new Date(t)},getFullStringFromTimeStamp:function(e){var t=this.getDateFromTimeStamp(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDay()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())},comma3Seperator:function(e){var t=parseInt(e),a=this.toFixedFloat(parseFloat(e)-t,1),n=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return a>0&&(n+="".concat(a.toString().slice(1))),n},toFixedFloat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return parseFloat(e).toFixed(t)}}),D=(a(316),window.ipcRenderer);function R(e){var t=e.item.name,a=k.comma3Seperator(e.item.data.bids[0].price);return r.a.createElement(O.a,{fluid:!0,className:"priceBox",color:Math.floor(3*Math.random())>1?"blue":"orange",header:"".concat(t,"    ||    ").concat(a," WON")})}function w(e){var t=e.resultList,a=[];for(var n in t)["timestamp","payment_currency"].includes(n)||a.push({name:n,data:t[n]});return r.a.createElement("div",null,r.a.createElement(p.a,null,a.map((function(e){return r.a.createElement(R,{key:e.name,item:e})}))))}function F(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){D.on("response_orderbook",(function(e,t){var a=k.decodeApiResponse(t);a&&l(a)})),T()}),[]),r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(_.a.Title,{active:u,index:0,onClick:function(e){s(!u)}},r.a.createElement(S.a,{horizontal:!0},r.a.createElement(I.a,{as:"h4"},r.a.createElement(K.a,{name:"money"}),u?"\ud604\uc7ac\uac00\uaca9 [\ub20c\ub7ec\uc11c \uc811\uae30]":"\ud604\uc7ac\uac00\uaca9 [\ub20c\ub7ec\uc11c \ud3bc\uce58\uae30]"))),r.a.createElement(_.a.Content,{active:u},r.a.createElement(O.a.Group,null,r.a.createElement(w,{resultList:c})),r.a.createElement("div",{className:"seperator"}))))}var N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={realtimeDiff:0,name:e.item.name,curPrice:e.item.data.closing_price,diffRate24:e.item.data.fluctate_rate_24H},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.item.data.closing_price!==e.item.data.closing_price&&this.setState({realtimeDiff:k.toFixedFloat(e.item.data.closing_price-this.props.item.data.closing_price)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"seperator"}),r.a.createElement(j.a.Group,{widths:"four"},r.a.createElement(j.a,null,r.a.createElement(j.a.Value,{text:!0},this.state.name),r.a.createElement(j.a.Label,null,"Coin Name")),r.a.createElement(j.a,{size:"mini"},r.a.createElement(j.a.Value,null,r.a.createElement("p",{className:"tooLarge"},k.comma3Seperator(this.state.curPrice))),r.a.createElement(j.a.Label,null,"\ud604\uc7ac\uac00\uaca9")),r.a.createElement(j.a,null,r.a.createElement(j.a.Value,null,r.a.createElement(K.a,{color:this.state.realtimeDiff>0?"blue":0===this.state.realtimeDiff?"green":"red",name:this.state.realtimeDiff>0?"hand point up outline":0===this.state.realtimeDiff?"hand point right outline":"hand point down outline"}),k.comma3Seperator(this.state.realtimeDiff)),r.a.createElement(j.a.Label,null,"\uc2e4\uc2dc\uac04\ub4f1\ub77d")),r.a.createElement(j.a,null,r.a.createElement(j.a.Value,null,r.a.createElement(K.a,{color:this.state.diffRate24>0?"blue":0===this.state.diffRate24?"green":"red",name:this.state.diffRate24>0?"hand point up outline":0===this.state.diffRate24?"hand point right outline":"hand point down outline"}),k.comma3Seperator(this.state.diffRate24,0)," %"),r.a.createElement(j.a.Label,null,"24\uc2dc\uac04 \ub4f1\ub77d"))))}}]),a}(r.a.Component);function A(e){var t=e.resultList;return t?r.a.createElement("div",null,t.map((function(e){return r.a.createElement(N,{key:e.name,item:e})}))):r.a.createElement("div",null)}function L(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){D.on("response_ticker",(function(e,t){var a=k.decodeApiResponse(t),n=[],r=[];for(var c in a)r.push([c,a[c].acc_trade_value_24H]);r.sort((function(e,t){return t[1]-e[1]}));for(var o=0;o<10;o++)n.push({name:r[o][0],data:a[r[o][0]]});n&&l(n)})),x()}),[]),r.a.createElement("div",null,r.a.createElement(S.a,{horizontal:!0},r.a.createElement(I.a,{as:"h4"},r.a.createElement(K.a,{name:"attention"}),"HOT \uc790\uc0b0[\uac70\ub798\uae08\uc561 \uc0c1\uc704 10 \uac00\uc9c0]")),r.a.createElement(A,{resultList:c}))}function T(){D.send("request_orderbook",k.prepareApiData({order_currency:"ALL",payment_currency:"KRW"}))}function x(){D.send("request_ticker",k.prepareApiData({order_currency:"ALL",payment_currency:"KRW"}))}function W(e){var t=Object(n.useState)(Date.now()),a=Object(b.a)(t,2),c=(a[0],a[1]);return Object(n.useEffect)((function(){var e=setInterval((function(){c(Date.now()),x(),T()}),2e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(L,null))}window.ipcRenderer;var B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=k.getApiData(),t=e.connectKey,a=e.secretKey;return t&&a?(console.log("MAIN"),r.a.createElement(g,{currentName:"home"},r.a.createElement(p.a,null,r.a.createElement(W,null)))):(console.log("NOT LOGGED IN!!!"),r.a.createElement(d.a,{to:"/login"}))}}]),a}(r.a.Component),M=a(51),V=a(347),P=a(335),z=(a(317),window.ipcRenderer);function q(e){return r.a.createElement(p.a,{className:"marginTop"},r.a.createElement(V.a,{onSubmit:e.handleSubmit},r.a.createElement(V.a.Field,null,r.a.createElement(v.a,{label:{icon:"asterisk"},labelPosition:"right corner",placeholder:"Access Key",name:"connectKey",value:e.connectKey,onChange:e.handleChange})),r.a.createElement(V.a.Field,null,r.a.createElement(v.a,{label:{icon:"asterisk"},labelPosition:"right corner",placeholder:"Secret Key",name:"secretKey",value:e.secretKey,onChange:e.handleChange})),r.a.createElement(P.a,{type:"submit"},"Submit")))}var G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={connectKey:"",secretKey:"",redirect:""},n.restoreValue=n.restoreValue.bind(Object(M.a)(n)),n.LoginForm=q.bind(Object(M.a)(n)),n.handleFormChange=n.handleFormChange.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.restoreValue(),z.on("response_account",(function(t,a){console.log(a),k.decodeApiResponse(a)&&(e.setState({redirect:"/info"}),e.state.connectKey&&localStorage.setItem("connectKey",e.state.connectKey),e.state.secretKey&&localStorage.setItem("secretKey",e.state.secretKey))}))}},{key:"restoreValue",value:function(e){this.setState({connectKey:localStorage.getItem("connectKey")?localStorage.getItem("connectKey"):"",secretKey:localStorage.getItem("secretKey")?localStorage.getItem("secretKey"):""})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={apiData:{connectKey:this.state.connectKey,secretKey:this.state.secretKey},apiParams:{order_currency:"BTC",payment_currency:"KRW"}};z.send("request_account",t)}},{key:"handleFormChange",value:function(e){"connectKey"===e.currentTarget.getAttribute("name")&&this.setState({connectKey:e.currentTarget.value}),"secretKey"===e.currentTarget.getAttribute("name")&&this.setState({secretKey:e.currentTarget.value})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(d.a,{to:this.state.redirect}):r.a.createElement(p.a,null,r.a.createElement(q,{connectKey:this.state.connectKey,secretKey:this.state.secretKey,handleChange:this.handleFormChange,handleSubmit:this.handleSubmit}))}}]),a}(r.a.Component),H=window.ipcRenderer;function U(e){var t=e.responseData;return r.a.createElement("div",null,r.a.createElement(S.a,{horizontal:!0},r.a.createElement(I.a,{as:"h4"},r.a.createElement(K.a,{name:"tag"}),"\ud68c\uc6d0\uc815\ubcf4")),r.a.createElement("p",null,"\ud68c\uc6d0 \uc544\uc774\ub514 : ",t.userInfo.account_id),r.a.createElement("p",null,"\ud68c\uc6d0 \uac00\uc785\uc77c : ",t.userInfo.created),r.a.createElement(S.a,{horizontal:!0},r.a.createElement(I.a,{as:"h4"},r.a.createElement(K.a,{name:"bar chart"}),"\uc0c1\uc138\uc815\ubcf4")),r.a.createElement(C.a,{definition:!0},r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,{width:2},"\uc8fc\ubb38 \ud1b5\ud654 (\ucf54\uc778)"),r.a.createElement(C.a.Cell,null,t.userInfo.order_currency)),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"\uacb0\uc81c \ud1b5\ud654 (\ub9c8\ucf13)"),r.a.createElement(C.a.Cell,null,t.userInfo.payment_currency)),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"\uac70\ub798 \uc218\uc218\ub8cc\uc728"),r.a.createElement(C.a.Cell,null,t.userInfo.trade_fee)),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"\uc8fc\ubb38 \uac00\ub2a5 \uc218\ub7c9"),r.a.createElement(C.a.Cell,null,t.userInfo.balance)))))}var J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=k.getApiData(),c=r.connectKey,l=r.secretKey;return n.state={connectKey:c,secretKey:l,userInfo:{created:"",account_id:"",order_currency:"",payment_currency:"",trade_fee:"",balance:""}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("### DEBUG IN INFO ###"),H.on("response_account",(function(t,a){if(a&&"ERROR"!==a){var n=a.data,r=k.getFullStringFromTimeStamp(n.created);e.setState({userInfo:{created:r,account_id:n.account_id,order_currency:n.order_currency,payment_currency:n.payment_currency,trade_fee:n.trade_fee,balance:n.balance}})}else H.send("request_account",k.prepareApiData({order_currency:"BTC",payment_currency:"KRW"}))})),H.send("request_account",k.prepareApiData({order_currency:"BTC",payment_currency:"KRW"}))}},{key:"render",value:function(){return r.a.createElement(g,{currentName:"info"},r.a.createElement(p.a,null,r.a.createElement(U,{responseData:this.state})))}}]),a}(r.a.Component),Y=a(355),$=a(346),Q=window.ipcRenderer,X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={updateFinish:!1,logoDataUrl:"",releaseName:"",percentage:0,description:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.send("register_updateWindow"),Q.on("response_svg_to_data_url",(function(t,a){"success"===a.status?e.setState({logoDataUrl:a.data}):console.log(a.err)})),Q.on("updateProgressPercentage",(function(t,a){e.setState({percentage:a})})),Q.on("updateReleaseVersion",(function(t,a){e.setState({releaseName:a})}))}},{key:"render",value:function(){return r.a.createElement(Y.a,null,r.a.createElement(Y.a.Row,null,r.a.createElement(Y.a.Column,null,r.a.createElement("h3",null,100===parseFloat(this.state.percentage)?"\uc5c5\ub370\uc774\ud2b8 \uc644\ub8cc! \ud655\uc778 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ucc3d\uc744 \ub2eb\uc544\uc8fc\uc138\uc694":"\uc5c5\ub370\uc774\ud2b8 \uc911..."),r.a.createElement($.a,{indicating:!0,percent:parseFloat(this.state.percentage),progress:!0}),r.a.createElement("div",{className:"col-2 mx-0 px-0 float-right mt-3"}))),"\u3147")}}]),a}(r.a.Component),Z=function(){return r.a.createElement(m.a,null,r.a.createElement(d.b,{exact:!0,path:"/",component:B}),r.a.createElement(d.b,{path:"/login",component:G}),r.a.createElement(d.b,{path:"/info",component:J}),r.a.createElement(d.b,{path:"/update",component:X}))},ee=(a(333),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.6a1a08cd.chunk.js.map