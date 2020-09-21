(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,n,t){e.exports=t.p+"static/media/brush.27b127d3.svg"},16:function(e,n,t){e.exports=t.p+"static/media/highlighter.66601412.svg"},17:function(e,n,t){e.exports=t.p+"static/media/eraser.da647259.svg"},18:function(e,n,t){e.exports=t.p+"static/media/font.8d3a7b02.svg"},20:function(e,n,t){e.exports=t(28)},25:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t.n(a),c=(t(25),t(3)),u=t(1),l=t(2),f=t(4),s={width:2,color:"black",smooth:"round",highlight:!1,eraser:!1,text:!1,fontSize:14},d=["#000000","#F7412D","#47B04B","#FFC100","#9D1BB2","#EC1661"],p=t(12),g=t.n(p);function h(){var e=Object(u.a)(["\n  position: fixed;\n"]);return h=function(){return e},e}var x=l.a.div(h()),b=r.memo((function(e){var n=e.trigger,t=e.children,o=e.offset,i=e.allowed,u=r.useState(void 0),l=Object(c.a)(u,2),f=l[0],s=l[1],d=r.useState(!1),p=Object(c.a)(d,2),g=p[0],h=p[1],b=r.useRef(null),m=r.useRef(null);return r.useEffect((function(){if(g&&b.current&&m.current){var e=b.current.getBoundingClientRect(),n=m.current.getBoundingClientRect();s({top:e.y+(o&&o.y||0),left:e.x-n.width+(o&&o.x||0)})}}),[g,o]),r.useEffect((function(){"boolean"!==typeof i||i||h(!1)}),[i]),r.createElement(r.Fragment,null,r.createElement(n.type,Object.assign({},n.props,{ref:b,onClick:function(e){n.props.onClick&&n.props.onClick(e),h((function(e){return!e}))}})),g&&("boolean"!==typeof i||i)&&a.createPortal(r.createElement(x,{ref:m,style:f},t),document.body))}));function m(){var e=Object(u.a)(["\n  margin: 4px;\n  position: relative;\n  ","\n  &:hover {\n    "," {\n      display: block;\n    }\n  }\n"]);return m=function(){return e},e}function v(){var e=Object(u.a)(["\n  position: absolute;\n\n  top: -6px;\n  right: -4px;\n  background: white;\n  border-radius: 100%;\n  height: 14px;\n  width: 14px;\n  font-size: 8px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid #efefef;\n  padding: 0;\n  display: none;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: #efefef;\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(u.a)(["\n  border: 1px solid #efefef;\n  font-size: 24px;\n  align-items: flex-end;\n  border-radius: 100px;\n  width: 24px;\n  height: 24px;\n  margin: 4px;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return E=function(){return e},e}function w(){var e=Object(u.a)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n"]);return w=function(){return e},e}function C(){var e=Object(u.a)(["\n  -webkit-appearance: none;\n  border: none;\n  width: 0;\n  height: 0;\n  position: absolute;\n  opacity: 0;\n"]);return C=function(){return e},e}function O(){var e=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n"]);return O=function(){return e},e}var j=l.a.div(O()),y=l.a.input.attrs({type:"color"})(C()),k=l.a.div(w()),S=l.a.div(E(),(function(e){return e.disabled?"\n    pointer-events: none;\n    opacity: 0.3;\n    cursor: not-allowed;\n  ":""})),R=l.a.button(v()),z=l.a.div(m(),(function(e){return e.selected?"background: #ddd; \n        padding: 4px;\n        margin: 0px;\n        border-radius: 4px;":""}),R),H=function(e){var n=e.value,t=e.onChange,o=e.colors,a=e.addColor,i=e.removeColor,c=e.updateColor,u=r.useRef(null),l=function(e){t(e.target.getAttribute("data-color"))},f=function(e){i(parseInt(e.target.getAttribute("data-index")))};return r.createElement(j,null,o.map((function(e,t){return r.createElement(z,{key:t,selected:e===n},r.createElement(R,{"data-index":t,onClick:f},r.createElement("span",{"data-index":t},"X")),r.createElement(k,{style:{background:e},"data-color":e,onClick:l}))})),r.createElement(S,{disabled:12===o.length,onClick:function(){u.current&&(u.current.click(),a("#000000"))}},"+"),r.createElement(y,{ref:u,value:n,onChange:function(e){c(o.length-1,e.target.value)}}))};function B(){var e=Object(u.a)(["\n  width: 120px;\n  margin: 0 8px;\n\n  &::-webkit-slider-thumb {\n    cursor: pointer;\n  }\n"]);return B=function(){return e},e}var M=l.a.input.attrs({type:"range"})(B()),I=function(e){var n=e.min,t=e.max,o=e.value,a=e.onChange;return r.createElement(M,{min:n,max:t,value:o,onChange:function(e){a(parseInt(e.target.value))}})};function T(){var e=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return T=function(){return e},e}function F(){var e=Object(u.a)(["\n  padding: 4px 4px;\n  background: #efefef;\n  border-radius: 4px;\n  font-size: 14px;\n"]);return F=function(){return e},e}function W(){var e=Object(u.a)(["\n  ","\n  &:not(:last-child) {\n    padding-bottom: 12px;\n    margin-bottom: 12px;\n    border-bottom: 1px solid #efefef;\n  }\n  cursor: pointer;\n  padding: 0 12px;\n\n  ","\n"]);return W=function(){return e},e}function A(){var e=Object(u.a)(["\n  width: 24px;\n  height: 24px;\n"]);return A=function(){return e},e}var D=l.a.img(A()),L=l.a.div(W(),(function(e){return e.flex?"\n    display: flex;\n    align-items:center;\n  ":""}),(function(e){return e.selected&&"img{filter: invert(0.5)\n    sepia(1)\n    hue-rotate(200deg)\n    saturate(20)\n    brightness(1)}"})),U=l.a.span(F()),X=l.a.label(T()),G=t(19),J=function(e){var n=r.useState(e||d),t=Object(c.a)(n,2),o=t[0],a=t[1];return{colors:o,addColor:function(e){a((function(n){return n.length<12?[].concat(Object(G.a)(n),[e]):n}))},removeColor:function(e){a((function(n){return n.filter((function(n,t){return t!==e}))}))},updateColor:function(e,n){a((function(t){return t.map((function(t,r){return r!==e?t:n}))}))}}};function P(){var e=Object(u.a)(["\n  background: white;\n  padding: 16px 0;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return P=function(){return e},e}var Y=l.a.div(P()),q=function(e){var n=e.selected,t=e.onChange,o=e.onClick,a=r.useState("#000000"),i=Object(c.a)(a,2),u=i[0],l=i[1],f=r.useState(1),s=Object(c.a)(f,2),d=s[0],p=s[1],h=J(),x=r.useRef(!0);return r.useEffect((function(){x.current?x.current=!1:t({width:d,color:u})}),[d,u]),r.createElement(b,{allowed:n,offset:{x:-8,y:-16},trigger:r.createElement(L,{onClick:function(){o(),t({width:d,color:u})},selected:n},r.createElement(D,{src:g.a}))},r.createElement(Y,{style:{width:"208px"}},r.createElement(L,null,r.createElement(H,Object.assign({},h,{value:u,onChange:function(e){return l(e)}}))),r.createElement(L,{flex:!0},r.createElement(X,null,"Size"),r.createElement(I,{value:d,min:1,max:25,onChange:function(e){return p(e)}}),r.createElement(U,null,d))))},N=t(16),$=t.n(N);function K(){var e=Object(u.a)(["\n  background: white;\n  padding: 16px 0;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return K=function(){return e},e}var Q=l.a.div(K()),V=r.memo((function(e){var n=e.selected,t=e.onChange,o=e.onClick,a=r.useState("#FFFF00"),i=Object(c.a)(a,2),u=i[0],l=i[1],f=J(),s=r.useRef(!0);return r.useEffect((function(){s.current?s.current=!1:t({width:5,color:u})}),[u,f.colors]),r.createElement(b,{allowed:n,offset:{x:-8},trigger:r.createElement(L,{onClick:function(){o(),t({width:5,color:u})},selected:n},r.createElement(D,{src:$.a}))},r.createElement(Q,{style:{width:"120px"}},r.createElement(L,null,r.createElement(H,Object.assign({},f,{value:u,onChange:function(e){return l(e)}})))))})),Z=t(17),_=t.n(Z);function ee(){var e=Object(u.a)(["\n  background: white;\n  padding: 16px 0;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return ee=function(){return e},e}var ne=l.a.div(ee()),te=r.memo((function(e){var n=e.selected,t=e.onChange,o=e.onClick,a=r.useState(1),i=Object(c.a)(a,2),u=i[0],l=i[1],f=r.useRef(!0);return r.useEffect((function(){f.current?f.current=!1:t({width:3*u})}),[u]),r.createElement(b,{allowed:n,offset:{x:-8},trigger:r.createElement(L,{onClick:function(){o(),t({width:3*u})},selected:n},r.createElement(D,{src:_.a}))},r.createElement(ne,null,r.createElement(L,{flex:!0},r.createElement(X,null,"Size:"),r.createElement(I,{value:u,min:1,max:5,onChange:function(e){return l(e)}}),r.createElement(U,null,3*u))))})),re=t(18),oe=t.n(re);function ae(){var e=Object(u.a)(["\n  font-size: ","px;\n  height: 20px;\n  line-height: 20px;\n  margin: 8px;\n"]);return ae=function(){return e},e}function ie(){var e=Object(u.a)(["\n  &:not(:last-child) {\n    margin-right: 4px;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid;\n  padding: 0 2px 2px;\n  border-color: ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return ce=function(){return e},e}function ue(){var e=Object(u.a)(["\n  background: white;\n  padding: 16px 0;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return ue=function(){return e},e}var le=l.a.div(ue()),fe=l.a.div(ce()),se=l.a.div(ie(),(function(e){return e.selected?"#ddd":"white"})),de=l.a.p(ae(),(function(e){return e.size})),pe=function(e){var n=e.selected,t=e.onChange,o=e.onClick,a=r.useState(14),i=Object(c.a)(a,2),u=i[0],l=i[1],f=r.useRef(!0),s=J(),d=r.useState("#000000"),p=Object(c.a)(d,2),g=p[0],h=p[1],x=function(e){l(parseInt(e.target.getAttribute("data-size")))};return r.useEffect((function(){f.current?f.current=!1:t({fontSize:u,color:g})}),[u,g]),r.createElement(b,{allowed:n,offset:{x:-8,y:-80},trigger:r.createElement(L,{onClick:function(){o(),t({fontSize:u,color:g})},selected:n},r.createElement(D,{src:oe.a}))},r.createElement(le,{style:{width:"120px"}},r.createElement(L,null,r.createElement(H,Object.assign({},s,{value:g,onChange:function(e){return h(e)}}))),r.createElement(L,null,r.createElement(fe,null,[12,14,18].map((function(e){return r.createElement(se,{key:e,onClick:x,"data-size":e,selected:u===e},r.createElement(de,{"data-size":e,size:e},"T"),r.createElement(U,{"data-size":e},e))}))))))};function ge(){var e=Object(u.a)(["\n  position: fixed;\n  right: 16px;\n  top: 16px;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 16px 0;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  /* border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; */\n  border-radius: 4px;\n"]);return ge=function(){return e},e}var he=l.a.div(ge()),xe=function(e){var n=e.setSettings,t=r.useState("BRUSH"),o=Object(c.a)(t,2),a=o[0],i=o[1],u=function(e){n(Object(f.a)(Object(f.a)({},s),e))};return r.createElement(he,null,r.createElement(q,{onClick:function(){i("BRUSH")},onChange:u,selected:"BRUSH"===a}),r.createElement(pe,{onClick:function(){i("TEXT")},onChange:function(e){return u(Object(f.a)(Object(f.a)({},e),{},{text:!0}))},selected:"TEXT"===a}),r.createElement(V,{onClick:function(){i("HIGHLIGHTER")},onChange:function(e){return u(Object(f.a)(Object(f.a)({},e),{},{highlight:!0}))},selected:"HIGHLIGHTER"===a}),r.createElement(te,{onClick:function(){i("ERASER")},onChange:function(e){return u(Object(f.a)(Object(f.a)({},e),{},{eraser:!0}))},selected:"ERASER"===a}))};function be(){var e=Object(u.a)(["\n  border: none;\n  background: none;\n  position: fixed;\n  &:focus {\n    outline: none;\n  }\n"]);return be=function(){return e},e}var me=l.a.textarea(be());function ve(){var e=Object(u.a)(["\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n  background: white;\n  border: 2px solid #efefef;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background: #efefef;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return ve=function(){return e},e}function Ee(){var e=Object(u.a)(["\n  "," {\n    cursor: ",";\n  }\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]);return Ee=function(){return e},e}function we(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return we=function(){return e},e}var Ce=l.a.canvas(we()),Oe=l.a.div(Ee(),Ce,(function(e){return e.text?"text":"crosshair"})),je=l.a.button(ve()),ye=function(e){var n=Object(f.a)(Object(f.a)({},s),e),t=r.useState(!1),o=Object(c.a)(t,2),a=o[0],i=o[1],u=r.useState(null),l=Object(c.a)(u,2),d=l[0],p=l[1],g=r.useRef([]),h=r.useRef(null),x=r.useRef(null),b=r.useRef(null),m=r.useRef(null),v=r.useState(null),E=Object(c.a)(v,2),w=E[0],C=E[1];r.useEffect((function(){m.current&&m.current.focus()}),[d]),r.useEffect((function(){window.onresize=function(){var e=x.current.getContext("2d");h.current=e.getImageData(0,0,x.current.offsetWidth,x.current.offsetHeight),C({height:document.body.offsetHeight,width:document.body.offsetWidth})}}),[]),r.useLayoutEffect((function(){h.current&&x.current.getContext("2d").putImageData(h.current,0,0);h.current=null}),[w]);var O=function(e){var t=n.highlight&&!n.eraser?b.current.getContext("2d"):x.current.getContext("2d");t.lineWidth=n.width,t.lineCap=n.smooth,t.strokeStyle=n.color,n.eraser?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="source-over",t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var r=0;r<e.length;r++)t.lineTo(e[r].x,e[r].y);g.current.length>1&&(g.current=[g.current[1]]),t.stroke()},j=function(e){var n=e.nativeEvent;if(a){var t=n.offsetX,r=n.offsetY;g.current.push({x:t,y:r}),O(g.current)}},y=function(e){var t=g.current,r=e.nativeEvent,o=r.offsetX,a=r.offsetY;if(n.text){if(d)return;p({top:a,left:o,fontSize:n.fontSize})}else{if(t[0])if(Math.sqrt(o-t[0].x^a-t[0].y+2^2)<n.width)return;g.current.push({x:o,y:a}),O(t),i(!0)}},k=function(){n.text||(console.log("handleMouseUp"),g.current=[],i(!1))};return r.useLayoutEffect((function(){C({height:document.body.offsetHeight,width:document.body.offsetWidth})}),[]),r.createElement(Oe,{text:n.text},r.createElement(Ce,{ref:x,width:w?w.width:"100%",height:w?w.height:"100%",onMouseMove:j,onMouseDown:y,onMouseUp:k,onMouseLeave:k}),n.highlight&&r.createElement(Ce,{style:{opacity:.5},ref:b,width:w?w.width:"100%",height:w?w.height:"100%",onMouseMove:j,onMouseDown:y,onMouseUp:k,onMouseLeave:k}),d&&r.createElement(me,{ref:m,rows:2e3,cols:2e3,onBlur:function(e){var t=e.target.value,r=x.current.getContext("2d");r.font="".concat(n.fontSize,"px Arial"),r.globalCompositeOperation="source-over",r.fillStyle=n.color,r.fillText(t,parseInt(d.left,10),parseInt(d.top,10)+n.fontSize),p(null)},style:d}),r.createElement(je,{onClick:function(){b.current&&b.current.getContext("2d").clearRect(0,0,b.current.offsetWidth,b.current.offsetHeight),x.current.getContext("2d").clearRect(0,0,x.current.offsetWidth,x.current.offsetHeight)}},"Clear Board"))};function ke(){var e=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]);return ke=function(){return e},e}var Se=l.a.div(ke()),Re=function(){var e=r.useState(s),n=Object(c.a)(e,2),t=n[0],o=n[1];return r.createElement(Se,{className:"App"},r.createElement(ye,t),r.createElement(xe,{settings:t,setSettings:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fc1e880d.chunk.js.map