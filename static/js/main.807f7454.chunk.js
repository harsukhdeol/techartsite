(this.webpackJsonptechartsite=this.webpackJsonptechartsite||[]).push([[0],[,,,function(e,t,i){e.exports={Container:"Container_Container__1f7Nt",overlay:"Container_overlay__2uuOV",header:"Container_header__1FPTM",footer:"Container_footer__1GTE1",socials:"Container_socials__1kf8D",menu:"Container_menu__1WLP1",icon:"Container_icon__3fQwl"}},function(e,t,i){e.exports={Page:"Page_Page__2sJ4I",title:"Page_title__3D9P4",background:"Page_background__37g8k",grid:"Page_grid__h5E_P"}},function(e,t,i){e.exports={Slider:"Slider_Slider__3yavJ",slideContainer:"Slider_slideContainer__35Kme",overlay:"Slider_overlay__2T2Kv",divider:"Slider_divider__3lNG-",menuContainer:"Slider_menuContainer__2iKQS"}},function(e,t,i){e.exports={Slide:"Slide_Slide__3iAhq",overlay:"Slide_overlay__33kO2",text:"Slide_text__1hPmn"}},function(e,t,i){e.exports={MenuButton:"MenuButton_MenuButton__3uVPr",image:"MenuButton_image__14i3L",text:"MenuButton_text__2h5vu"}},,function(e,t,i){e.exports={LargeComponent:"LargeComponent_LargeComponent__31HiL",description:"LargeComponent_description__1XOgU"}},function(e,t,i){e.exports={SmallComponent:"SmallComponent_SmallComponent__2tKEY",description:"SmallComponent_description__3dzFg"}},,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r=i(1),a=i.n(r),n=i(12),c=i.n(n),s=(i(18),i(13)),o=i(3),l=i.n(o),d=[{text:"VFX",image:"./vfx/vfx.jpg"},{text:"UX/UI Dev",image:"./ui/ui.png"},{text:"AR/VR",image:"./arvr/arvr.png"},{text:"Materials",image:"./materials/materials.png"}],u=[{text:"VFX",video:"./vfx/vfx.mp4",large:{video:"./vfx/vfx.mp4",text:"Niagra particle effects with unreal"},small:[{video:"./vfx/2.mp4",text:"Niagra particle effects with unreal"},{video:"./vfx/3.mp4",text:"Niagra particle effects with unreal"},{video:"./vfx/4.mp4",text:"Niagra particle effects with unreal"},{video:"./vfx/5.mp4",text:"Niagra particle effects with unreal"},{video:"./vfx/6.mp4",text:"Niagra particle effects with unreal"}]},{text:"UX/UI Dev",video:"./ui/ui.mp4",large:{video:"./ui/ui.mp4",text:"Niagra particle effects with unreal"},small:[{video:"./ui/2.mp4",text:"Niagra particle effects with unreal"},{video:"./ui/3.mp4",text:"Niagra particle effects with unreal"}]},{text:"AR/VR",video:"./arvr/arvr.mov",large:{video:"./arvr/arvr.mov",text:"Niagra particle effects with unreal"},small:[{video:"./arvr/2.mp4",text:"Niagra particle effects with unreal"},{video:"./arvr/3.mp4",text:"Niagra particle effects with unreal"},{video:"./arvr/4.mp4",text:"Niagra particle effects with unreal"}]},{text:"Materials",video:"./materials/1.mp4",large:{video:"./materials/1.mp4",text:"Niagra particle effects with unreal"},small:[{video:"./materials/2.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/3.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/4.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/5.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/6.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/7.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/8.mp4",text:"Niagra particle effects with unreal"}]}],j=i(6),x=i.n(j),f=i(0),h=a.a.forwardRef((function(e,t){var i=e.data,a=(e.index,Object(r.useRef)(null));Object(r.useRef)(null);return Object(r.useEffect)((function(){})),Object(f.jsxs)("div",{ref:t,className:x.a.Slide,children:[Object(f.jsxs)("video",{ref:a,autoPlay:!0,muted:!0,controls:!0,loop:!0,children:[Object(f.jsx)("source",{src:i.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(f.jsx)("div",{className:x.a.overlay,children:Object(f.jsx)("h1",{className:x.a.text,children:i.text})})]})})),v=i(7),m=i.n(v);function p(e){var t=e.data,i=e.index,r=e.onClick;return Object(f.jsxs)("div",{onClick:function(){return r(i)},className:m.a.MenuButton,children:[Object(f.jsx)("h3",{className:m.a.text,children:t.text}),Object(f.jsx)("div",{className:m.a.image,style:{backgroundImage:"url(".concat(t.image,")")}})]})}var b=i(2),O=i(5),g=i.n(O),_=a.a.forwardRef((function(e,t){var i=e.onClick,a=Object(r.useRef)([d.length]),n=b.b.timeline({repeat:-1});return Object(r.useEffect)((function(){a.current.forEach((function(e,t){n.to([e],{opacity:1,duration:2},">+=1").to([e],{opacity:1,duration:2},">").to([e],{opacity:0,duration:2},">+=2")}))}),[]),Object(f.jsxs)("div",{ref:t,className:g.a.Slider,children:[Object(f.jsxs)("div",{className:g.a.slideContainer,children:[Object(f.jsx)("div",{children:u.map((function(e,t){return Object(f.jsx)(h,{ref:function(e){a.current[t]=e},index:t,data:e},t)}))}),Object(f.jsx)("div",{className:g.a.overlay})]}),Object(f.jsx)("div",{className:g.a.divider}),Object(f.jsx)("div",{className:g.a.menuContainer,children:d.map((function(e,t){return Object(f.jsx)(p,{index:t,data:e,onClick:i},t)}))})]})})),N=i(11),w=i(4),C=i.n(w),M=i(9),y=i.n(M);function S(e){return Object(f.jsxs)("div",{className:y.a.LargeComponent,children:[Object(f.jsxs)("video",{controls:!0,children:[Object(f.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(f.jsx)("p",{className:y.a.description,children:e.text})]})}var k=i(10),L=i.n(k);function R(e){return Object(f.jsxs)("div",{className:L.a.SmallComponent,children:[Object(f.jsxs)("video",{controls:!0,children:[Object(f.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(f.jsx)("p",{className:L.a.description,children:e.text})]})}var z=a.a.forwardRef((function(e,t){var i=e.data;return Object(f.jsxs)("div",{ref:t,className:C.a.Page,children:[Object(f.jsxs)("div",{className:C.a.background,children:[Object(f.jsx)("div",{className:C.a.hBorder}),Object(f.jsx)("div",{className:C.a.vBorder})]}),Object(f.jsx)("h1",{className:C.a.title,children:i.text}),Object(f.jsx)(S,Object(N.a)({},i.large)),Object(f.jsx)("div",{className:C.a.grid,children:i.small.map((function(e,t){return Object(f.jsx)(R,Object(N.a)({},e),t)}))})]})}));function V(){var e=Object(r.useRef)([]),t=Object(r.useRef)([d.length+1]),i=Object(r.useRef)(null),a=Object(r.useRef)(null),n=Object(r.useRef)(null),c=Object(r.useRef)(null),o=Object(r.useState)(0),j=Object(s.a)(o,2),x=j[0],h=j[1];function v(t){e.current[t].scrollIntoView(),console.log(t)}return Object(r.useEffect)((function(){var e=function(){var e=window.scrollY;h(e),e>window.innerHeight?(b.a.to([c.current],{duration:1,justifyContent:"center",height:" auto",fill:"#555"}),b.a.to([n.current],{duration:1,opacity:0}),b.a.to([i.current],{opacity:1,duration:1})):e<1.5*window.innerHeight&&(b.a.to([i.current],{opacity:0,duration:.5}),b.a.to([c.current],{duration:1,justifyContent:"flex-start",height:"170px"}),b.a.to([n.current],{duration:1,opacity:1})),t.current.forEach((function(t,i){var r=window.innerHeight*i,a=.1*window.innerHeight,n=window.innerHeight*(i+1);e>=r-a&&e<n-a?(b.a.to([t.children[0]],{backgroundColor:"#9922dd",duration:1}),b.a.to([t.children[1]],{color:"#cf7cff",duration:1})):(b.a.to([t.children[0]],{backgroundColor:"#444",duration:1}),b.a.to([t.children[1]],{color:"#888",duration:1}))}))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[x]),Object(f.jsxs)("div",{className:l.a.Container,children:[Object(f.jsx)(_,{onClick:v,ref:a}),Object(f.jsx)("div",{className:l.a.body,children:u.map((function(t,i){return Object(f.jsx)(z,{index:i,data:t,ref:function(t){return e.current.push(t)}},i)}))}),Object(f.jsxs)("div",{className:l.a.overlay,children:[Object(f.jsxs)("div",{ref:n,className:l.a.header,children:[Object(f.jsx)("h2",{children:"Harsukh Deol"}),Object(f.jsx)("h3",{children:" Technical Artist"})]}),Object(f.jsx)("div",{ref:c,className:l.a.footer,children:Object(f.jsxs)("ul",{className:l.a.socials,children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"mailto:harsukhkdeol@gmail.com",title:"Email",children:Object(f.jsx)("div",{children:Object(f.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(f.jsx)("path",{d:"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"})})})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://github.com/harsukhdeol",title:"GitHub",children:Object(f.jsx)("div",{children:Object(f.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(f.jsx)("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})})})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.instagram.com/harsukh.deol/",title:"Instagram",children:Object(f.jsx)("div",{children:Object(f.jsxs)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:[Object(f.jsx)("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),Object(f.jsx)("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),Object(f.jsx)("circle",{cx:"351.5",cy:"160.5",r:"21.5"})]})})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://codepen.io/harsukhdeol",title:"CodePen",children:Object(f.jsx)("div",{children:Object(f.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(f.jsx)("path",{d:"M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"})})})})})]})}),Object(f.jsxs)("div",{ref:i,className:l.a.menu,children:[Object(f.jsxs)("button",{className:l.a.toTop,onClick:function(){a.current.scrollIntoView()},ref:function(e){return t.current[0]=e},children:[Object(f.jsx)("div",{className:l.a.icon}),Object(f.jsx)("h4",{children:"Home"})]}),d.map((function(e,i){return Object(f.jsxs)("button",{className:l.a.menuButton,onClick:function(){return v(i)},ref:function(e){return t.current[i+1]=e},children:[Object(f.jsx)("div",{className:l.a.icon}),Object(f.jsx)("h4",{children:e.text})]},i)}))]})]})]})}i(20);var P=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(V,{})})},B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(t){var i=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),r(e),a(e),n(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),B()}],[[21,1,2]]]);
//# sourceMappingURL=main.807f7454.chunk.js.map