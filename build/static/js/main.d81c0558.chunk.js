(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/VideoMaskedAndNonMaskedPeople.fbc363b3.mp4"},22:function(e,t,n){e.exports=n.p+"static/media/AdamTeste.891fcd0a.mp4"},37:function(e,t,n){e.exports=n.p+"static/media/alert.fec56da6.mp3"},38:function(e,t,n){e.exports=n.p+"static/media/map.508641e1.jpg"},41:function(e,t,n){e.exports=n(76)},66:function(e,t){},67:function(e,t){},68:function(e,t){},69:function(e,t){},70:function(e,t){},71:function(e,t){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(32),c=n.n(r),i=n(77),l=n(3),s=n(4);function u(){const e=Object(l.a)(["\n    color: #FFFFFF;\n    font-size: 23px;\n    font-weight: bold;\n    margin: auto 0 auto 8px;\n\n    :hover {\n        cursor: pointer;\n    }\n"]);return u=function(){return e},e}function d(){const e=Object(l.a)(["\n    img {\n        height: 80px;\n        margin: 5px 0 5px 10px;\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n"]);return d=function(){return e},e}function p(){const e=Object(l.a)(["\n    width: 100%;\n    height: 90px;\n    background-color: navy;\n    box-shadow: 0px 2px 4px gray;\n    z-index: 5;\n    display: flex;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin-bottom: 25px;\n"]);return p=function(){return e},e}const m=s.a.div(p()),f=s.a.div(d()),h=s.a.p(u());var x=n(9);var b=Object(x.a)();var g=function(){function e(){b.push("/")}return o.a.createElement(m,null,o.a.createElement(f,{onClick:e},o.a.createElement("img",{src:"https://i.imgur.com/hqVtTM4.png",alt:"LogoMask"})),o.a.createElement(h,{onClick:e},"Mask Detection"))};function v(){const e=Object(l.a)(["\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 30px;\n    color: #333;\n    font-weight: bold;\n    text-align: center;\n"]);return v=function(){return e},e}function E(){const e=Object(l.a)(["\n    padding: 20px;\n"]);return E=function(){return e},e}const w=s.a.div(E()),y=s.a.p(v());n(47);var k=n(36),O=n.n(k);function j(){const e=Object(l.a)(["\n    width: 600px;\n    height: 350px;\n"]);return j=function(){return e},e}function S(){const e=Object(l.a)(["\n    div {\n        margin-left: 50px;\n    }\n"]);return S=function(){return e},e}function F(){const e=Object(l.a)(["\n    margin: 10px 0 60px 0;\n    display: flex;\n    flex-direction: column;\n"]);return F=function(){return e},e}const C=s.a.div(F()),M=Object(s.a)(O.a)(S()),B=s.a.video(j());var T=n(21),R=n.n(T),A=n(22),I=n.n(A);var W=function(){function e(e){window.location.assign(window.location.href+"detection/?video="+window.location.href.substring(0,window.location.href.length-1)+e)}return o.a.createElement(C,null,o.a.createElement(M,{swipeable:!1,draggable:!1,showDots:!0,centerMode:!0,focusOnSelect:!0,responsive:{superLargeDesktop:{breakpoint:{max:400,min:3e3},items:1},desktop:{breakpoint:{max:2024,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},ssr:!0,infinite:!0,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"transform .5",transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",renderButtonGroupOutside:!0},o.a.createElement("div",{onClick:()=>e(R.a)},o.a.createElement(B,{controls:!0,muted:!0,preload:"auto"},o.a.createElement("source",{src:R.a,type:"video/mp4"}),"Your browser does not support the video tag.")),o.a.createElement("div",{onClick:()=>e(I.a)},o.a.createElement(B,{controls:!0,muted:!0,preload:"auto"},o.a.createElement("source",{src:I.a,type:"video/mp4"}),"Your browser does not support the video tag."))))};var L=function(){return o.a.createElement(w,null,o.a.createElement(y,null,"Select a video below:"),o.a.createElement(W,null))};function P(){const e=Object(l.a)(["\n    height: 100px;\n    background-color: black;\n    padding: 5px;\n    margin-top: 20px;\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: white;\n    box-shadow: 0px 1px 2px gray, 0px -3px 5px gray;\n\n    p {\n        margin-top: 20px;\n    }\n"]);return P=function(){return e},e}const D=s.a.div(P());var G=function(){return o.a.createElement(D,null,o.a.createElement("p",null,"\xa9 Mask Detection, Inc. All rights reserved."))};function V(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(L,null),o.a.createElement(G,null))}var U=n(7),z=n(39);var H=e=>{const t=Object(a.useState)(),n=Object(U.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)(()=>{z.a.load(e).then(e=>{r(e)})},[e]),o},N=n(5),X=n.n(N),q=n(26),J=n(10);var Y=(e,t)=>{Object(a.useEffect)(()=>{t()},[t,e])};const _=e=>{const t=e.getContext("2d"),n=window.devicePixelRatio;let a=e.width/n,o=e.height/n;return{setWidth:t=>{a=t,e.style.width=t+"px",e.width=t*n},setHeight:t=>{o=t,e.style.height=t+"px",e.height=t*n},width:a,height:o,clearAll:()=>t.clearRect(0,0,a*n,o*n),clearRect:(e,a,o,r)=>t.clearRect(e*n,a*n,o*n,r*n),setFont:e=>{const a=parseInt(e,10)*n,o=e.replace(/^\d+px/,a+"px");t.font=o},setTextBaseLine:e=>{t.textBaseline=e},setStrokeStyle:e=>{t.strokeStyle=e},setLineWidth:e=>{t.lineWidth=e*n},strokeRect:(e,a,o,r)=>t.strokeRect(e*n,a*n,o*n,r*n),setFillStyle:e=>{t.fillStyle=e},measureText:e=>{const a=t.measureText(e);return{width:a.width/n,actualBoundingBoxLeft:a.actualBoundingBoxLeft/n,actualBoundingBoxRight:a.actualBoundingBoxRight/n,actualBoundingBoxAscent:a.actualBoundingBoxAscent/n,actualBoundingBoxDescent:a.actualBoundingBoxDescent/n}},fillRect:(e,a,o,r)=>t.fillRect(e*n,a*n,o*n,r*n),fillText:(e,a,o)=>t.fillText(e,a*n,o*n)}},K=e=>{const t=(100*e.score).toFixed(1);return"".concat(e.label," ").concat(t,"%")},Q=(e,t)=>{const n="".concat(16,"px 'ibm-plex-sans', Helvetica Neue, Arial, sans-serif");e.setFont(n),e.setTextBaseLine("top");const a=parseInt(n,10);t.forEach(t=>{const n=t.bbox[0],o=t.bbox[1],r=t.bbox[2],c=t.bbox[3],i=K(t);e.setStrokeStyle("#0062ff"),e.setLineWidth(4),e.strokeRect(Math.round(n),Math.round(o),Math.round(r),Math.round(c)),e.setFillStyle("#0062ff");const l=e.measureText(i).width;e.fillRect(Math.round(n-2),Math.round(o-(a+8)-6),Math.round(l+16),Math.round(a+8))}),t.forEach(t=>{const n=t.bbox[0],o=t.bbox[1],r=K(t);e.setFillStyle("#ffffff"),e.fillText(r,Math.round(n-2+8),Math.round(o-(a+8)-6+4))})},Z=Object(a.createContext)();function $({children:e}){const t=Object(a.useState)(0),n=Object(U.a)(t,2),r=n[0],c=n[1];return o.a.createElement(Z.Provider,{value:{count:r,setCount:c}},e)}function ee(){const e=Object(a.useContext)(Z);return{count:e.count,setCount:e.setCount}}var te=n(25);function ne(){const e=Object(l.a)(["\n    margin-left: 20px;\n\n    h3 {\n        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        font-size: 25px;\n        color: #333;\n        margin-bottom: 10px;\n    }\n\n    p {\n        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        font-weight: bold;\n        font-size: 15px;\n        color: #333;\n    }\n\n    button {\n        margin-top: 20px;\n        width: 210px;\n        height: 30px;\n        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        font-weight: bold;\n        font-size: 15px;\n        color: #fff;\n        background: #FF8C00;\n        border: 1px solid #FF8C00;\n        border-radius: 5px;\n        box-shadow: 0px 2px 4px gray;\n\n        :hover {\n            cursor: pointer;\n            background: ",";\n            border-color: ",";\n        }\n    }\n"]);return ne=function(){return e},e}const ae=s.a.div(ne(),Object(te.a)(.1,"#FF8C00"),Object(te.a)(.1,"#FF8C00"));var oe=n(37),re=n.n(oe);var ce=function({personWithMask:e,personWithoutMask:t,count:n}){let a=new Audio(re.a);return o.a.createElement(ae,null,o.a.createElement("h3",null,"Camera X01"),o.a.createElement("p",null,"Location/Region: Hall 01 / Near the exit / Gate 01"),o.a.createElement("br",null),o.a.createElement("p",{style:{color:"green"}},"People with mask: ",e),o.a.createElement("p",{style:{color:"red"}},"People without a mask: ",t),o.a.createElement("p",null,"Total people there: ",n),o.a.createElement("button",{onClick:()=>{a.play(),alert("Warning sound")}},"Send Alert"))};const ie=window.location.search,le=new URLSearchParams(ie).get("video");var se=o.a.memo(({model:e,onPrediction:t,fit:n,mirrored:r,render:c})=>{const i=Object(a.useState)(0),l=Object(U.a)(i,2),s=l[0],u=l[1],d=Object(a.useState)(0),p=Object(U.a)(d,2),m=p[0],f=p[1],h=Object(a.useRef)(),x=Object(a.useRef)(),b=ee(),g=b.count,v=b.setCount;Y(h,()=>{E()});const E=Object(a.useCallback)(Object(J.a)(X.a.mark(function a(){var o,i,l,s,d,p,m,b,g,w,y,k,O,j;return X.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=27;break}return a.next=3,e.detect(h.current);case 3:o=a.sent,t&&t(o),i=h.current.offsetWidth,l=h.current.offsetHeight,s=h.current.videoWidth,d=h.current.videoHeight,p=i/s,m=l/d,b="aspectFit"===n?Math.min(p,m):Math.max(p,m),g=(i-s*b)/2,w=(l-d*b)/2,(y=_(x.current)).setWidth(i),y.setHeight(l),y.clearAll(),k=o.map(e=>{let t=e.bbox[0]*b+g;const n=e.bbox[1]*b+w,a=e.bbox[2]*b,o=e.bbox[3]*b;return r&&(t=i-t-a),Object(q.a)(Object(q.a)({},e),{},{bbox:[t,n,a,o]})}),O=o.filter((e,t,n)=>"Com mascara"===e.class),j=o.filter((e,t,n)=>"Sem mascara"===e.class),v(o.length),u(O.length),f(j.length),(c||Q)(y,k),requestAnimationFrame(()=>{E()});case 27:case"end":return a.stop()}},a)})),[n,r,e,t,c,v]);return x.current&&(x.current.style.position="absolute",x.current.style.left="0",x.current.style.top="0"),h.current&&(h.current.style.width="50%",h.current.style.height="50%",h.current.style.objectFit="aspectFit"===n?"contain":"cover",h.current.style.transform=r?"scaleX(-1)":"scaleX(1)"),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative"}},o.a.createElement("video",{controls:!0,autoPlay:!0,playsInline:!0,ref:h,src:le,muted:!0}),o.a.createElement("canvas",{ref:x}),o.a.createElement(ce,{personWithMask:s,personWithoutMask:m,count:g}))}),ue=n(38),de=n.n(ue);function pe(){const e=Object(l.a)(["\n    fill: ",";\n    stroke-width:5;\n    opacity:0.5\n"]);return pe=function(){return e},e}function me(){const e=Object(l.a)(["\n    margin-top: 30px;\n\n    hr {\n        border: 0;\n        height: 0;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    }\n\n    h1 {\n        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        font-size: 35px;\n        color: #333;\n        margin-bottom: 10px;\n    }\n\n    img {\n        width: 1200px;\n        height: 700px;\n    }\n\n    svg {\n        margin-top: 20px;\n        position: absolute;\n        left: 10px;\n    }\n"]);return me=function(){return e},e}const fe=s.a.div(me()),he=s.a.rect(pe(),e=>e.count>1?"red":"green");var xe=function(){const e=ee().count;return o.a.createElement(fe,null,o.a.createElement("hr",null),o.a.createElement("h1",null,"Camera heat map:"),o.a.createElement("img",{src:de.a,alt:"Map"}),o.a.createElement("svg",{width:"400",height:"330"},o.a.createElement(he,{width:"400",height:"400",count:e})))};function be(){const e=Object(l.a)(["\n    padding: 10px;\n"]);return be=function(){return e},e}const ge=s.a.div(be());function ve(){const e=H("/model_web");return o.a.createElement($,null,o.a.createElement("div",{className:"fillPage"},o.a.createElement(g,null),o.a.createElement(ge,null,o.a.createElement(se,{model:e,fit:"aspectFit",mirrored:!0}),o.a.createElement(xe,null)),o.a.createElement(G,null)))}function Ee(){return o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0,component:V}),o.a.createElement(i.a,{path:"/detection",component:ve}))}n(75);const we=()=>o.a.createElement("div",{className:"App"},o.a.createElement(i.b,{history:b},o.a.createElement(Ee,null))),ye=document.getElementById("root");c.a.render(o.a.createElement(we,null),ye)}},[[41,1,2]]]);
//# sourceMappingURL=main.d81c0558.chunk.js.map