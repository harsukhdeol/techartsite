(this.webpackJsonptechartsite=this.webpackJsonptechartsite||[]).push([[0],[,,,function(e,t,a){e.exports={Container:"Container_Container__2TVjX",overlay:"Container_overlay__31LRZ",header:"Container_header__rQnB7",footer:"Container_footer__2ZeRG",socials:"Container_socials__3bxxF",menu:"Container_menu__3981j",icon:"Container_icon__1WMR6"}},function(e,t,a){e.exports={Page:"Page_Page__2lhdg",title:"Page_title__5VZCI",background:"Page_background__1GyFo",grid:"Page_grid__3nees"}},function(e,t,a){e.exports={Slider:"Slider_Slider__1cBTN",slideContainer:"Slider_slideContainer__3r8nh",overlay:"Slider_overlay__123VZ",divider:"Slider_divider__148SU",menuContainer:"Slider_menuContainer__TtnPv"}},function(e,t,a){e.exports={Slide:"Slide_Slide__1AuhT",overlay:"Slide_overlay__2psjk",text:"Slide_text__1JaW-"}},function(e,t,a){e.exports={MenuButton:"MenuButton_MenuButton__2Bq6Y",image:"MenuButton_image__2uNiS",text:"MenuButton_text__1Mee9"}},,function(e,t,a){e.exports={LargeComponent:"LargeComponent_LargeComponent__3yg5p",description:"LargeComponent_description__1tFYR"}},function(e,t,a){e.exports={SmallComponent:"SmallComponent_SmallComponent__23HYx",description:"SmallComponent_description__2yCPq"}},,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),n=a(12),c=a.n(n),s=(a(18),a(13)),o=a(3),l=a.n(o),d=[{text:"VFX",image:"./vfx/vfx.jpg"},{text:"UX/UI Dev",image:"./ui/ui.png"},{text:"AR/VR",image:"./arvr/1.png"},{text:"Materials",image:"./materials/materials.png"}],h=[{text:"VFX",video:"./vfx/vfx.mp4",large:{video:"./vfx/vfx.mp4",text:"This effect is made up of two particle systems moving along a spline and a dissolve material that animates upwards. A custom Niagara module script was implemented to make the particles follow the curve. All of the VFX below were created at my last workplace with Unreal Engine's particle system, Niagara. "},small:[{video:"./vfx/2.mp4",text:"I created a Niagara module script that read the vertex data of a box and skeletal mesh and transformed the particle position from the surface of the box to the character. I made this script work with the default physics modules so additional forces, like curl noise, could be added."},{video:"./vfx/3.mp4",text:"I created the placement VFX for this power pole. There is one emiter on the sphere and one on the pole, that resizes to fit the shape of its parent."},{video:"./vfx/4.mp4",text:"I created the hair model with Maya Xgen, then ran a script to generate a vector field. I used the vector field to animate particles down the length ot the hair and created a material for ombre hair. "},{video:"./vfx/5.mp4",text:"This is another prototype of animating hair with Niagara that moved with the character. "},{video:"./vfx/6.mp4",text:"This is a Niagara match puzzle I created with C++. Moving the mouse horizontally changes the color and moving it vertically changes its speed."}]},{text:"UX/UI Dev",video:"./ui/ui.mp4",large:{video:"./ui/ui.mp4",text:"This is the character customization screen I created for work. This UI is made up of reusable widgets that I developed and animated with UMG. I handled the data and logic with Blueprints. All of the UI screens below are protoypes I made from scratch, without any mockups, for the last game studio I worked at.  "},small:[{video:"./ui/4.mp4",text:"This is quick tutorial screen that opens at the start of the game.   "},{video:"./ui/5.mp4",text:"This is a more commplex UI system that displays the quests avaliable, allows users to select three and displays the progress when it is opened again. I linked the C++ functionality with Blueprints by exposing functions and variables to Blueprints and extending them in BLueprints with the correct references"},{video:"./ui/2.mp4",text:"This is a working prototype of the Lobby menus. This includes the Leaderboard, Challenges, BattlePass, Wardrobe ans Store. "},{video:"./ui/3.mp4",text:"This is the end game screen that gets the player's score and accomplishments and displays it on the screen. I created UI materials to animate the progress bar and the bottom text. "}]},{text:"AR/VR",video:"./arvr/1.mp4",large:{video:"./arvr/1.mp4",text:"Niagra particle effects with unreal"},small:[{video:"./arvr/arvr.mp4",text:"Niagra particle effects with unreal"},{video:"./arvr/2.mp4",text:"Niagra particle effects with unreal"},{video:"./arvr/3.mp4",text:"Niagra particle effects with unreal"},{video:"./arvr/4.mp4",text:"Niagra particle effects with unreal"}]},{text:"Materials",video:"./materials/1.mp4",large:{video:"./materials/1.mp4",text:"Niagra particle effects with unreal"},small:[{video:"./materials/2.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/3.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/4.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/5.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/6.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/7.mp4",text:"Niagra particle effects with unreal"},{video:"./materials/8.mp4",text:"Niagra particle effects with unreal"}]}],u=a(6),m=a.n(u),p=a(0),j=r.a.forwardRef((function(e,t){var a=e.data,r=(e.index,Object(i.useRef)(null));Object(i.useRef)(null);return Object(i.useEffect)((function(){})),Object(p.jsxs)("div",{ref:t,className:m.a.Slide,children:[Object(p.jsxs)("video",{ref:r,autoPlay:!0,muted:!0,controls:!0,loop:!0,children:[Object(p.jsx)("source",{src:a.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("div",{className:m.a.overlay,children:Object(p.jsx)("h1",{className:m.a.text,children:a.text})})]})})),x=a(7),f=a.n(x);function v(e){var t=e.data,a=e.index,i=e.onClick;return Object(p.jsxs)("div",{onClick:function(){return i(a)},className:f.a.MenuButton,children:[Object(p.jsx)("h3",{className:f.a.text,children:t.text}),Object(p.jsx)("div",{className:f.a.image,style:{backgroundImage:"url(".concat(t.image,")")}})]})}var b=a(2),g=a(5),O=a.n(g),_=r.a.forwardRef((function(e,t){var a=e.onClick,r=Object(i.useRef)([d.length]),n=b.b.timeline({repeat:-1});return Object(i.useEffect)((function(){r.current.forEach((function(e,t){n.to([e],{opacity:1,duration:2},">+=1").to([e],{opacity:1,duration:2},">").to([e],{opacity:0,duration:2},">+=2")}))}),[n]),Object(p.jsxs)("div",{ref:t,className:O.a.Slider,children:[Object(p.jsxs)("div",{className:O.a.slideContainer,children:[Object(p.jsx)("div",{children:h.map((function(e,t){return Object(p.jsx)(j,{ref:function(e){r.current[t]=e},index:t,data:e},t)}))}),Object(p.jsx)("div",{className:O.a.overlay})]}),Object(p.jsx)("div",{className:O.a.divider}),Object(p.jsx)("div",{className:O.a.menuContainer,children:d.map((function(e,t){return Object(p.jsx)(v,{index:t,data:e,onClick:a},t)}))})]})})),w=a(11),N=a(4),C=a.n(N),y=a(9),M=a.n(y);function k(e){return Object(p.jsxs)("div",{className:M.a.LargeComponent,children:[Object(p.jsxs)("video",{controls:!0,children:[Object(p.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("p",{className:M.a.description,children:e.text})]})}var S=a(10),I=a.n(S);function R(e){return Object(p.jsxs)("div",{className:I.a.SmallComponent,children:[Object(p.jsxs)("video",{controls:!0,children:[Object(p.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("p",{className:I.a.description,children:e.text})]})}var B=r.a.forwardRef((function(e,t){var a=e.data;return Object(p.jsxs)("div",{ref:t,className:C.a.Page,children:[Object(p.jsxs)("div",{className:C.a.background,children:[Object(p.jsx)("div",{className:C.a.hBorder}),Object(p.jsx)("div",{className:C.a.vBorder})]}),Object(p.jsx)("h1",{className:C.a.title,children:a.text}),Object(p.jsx)(k,Object(w.a)({},a.large)),Object(p.jsx)("div",{className:C.a.grid,children:a.small.map((function(e,t){return Object(p.jsx)(R,Object(w.a)({},e),t)}))})]})}));function z(){var e=Object(i.useRef)([]),t=Object(i.useRef)([d.length+1]),a=Object(i.useRef)(null),r=Object(i.useRef)(null),n=Object(i.useRef)(null),c=Object(i.useRef)(null),o=Object(i.useState)(0),u=Object(s.a)(o,2),m=u[0],j=u[1];function x(t){e.current[t].scrollIntoView(),console.log(t)}return Object(i.useEffect)((function(){var e=function(){var e=window.scrollY;j(e),e>window.innerHeight?(b.a.to([c.current],{duration:1,justifyContent:"center",height:" auto",fill:"#555"}),b.a.to([n.current],{duration:1,opacity:0}),b.a.to([a.current],{opacity:1,duration:1})):e<1.5*window.innerHeight&&(b.a.to([a.current],{opacity:0,duration:.5}),b.a.to([c.current],{duration:1,justifyContent:"flex-start",height:"170px"}),b.a.to([n.current],{duration:1,opacity:1})),t.current.forEach((function(t,a){var i=window.innerHeight*a,r=.1*window.innerHeight,n=window.innerHeight*(a+1);e>=i-r&&e<n-r?(b.a.to([t.children[0]],{backgroundColor:"#9922dd",duration:1}),b.a.to([t.children[1]],{color:"#cf7cff",duration:1})):(b.a.to([t.children[0]],{backgroundColor:"#444",duration:1}),b.a.to([t.children[1]],{color:"#888",duration:1}))}))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[m]),Object(p.jsxs)("div",{className:l.a.Container,children:[Object(p.jsx)(_,{onClick:x,ref:r}),Object(p.jsx)("div",{className:l.a.body,children:h.map((function(t,a){return Object(p.jsx)(B,{index:a,data:t,ref:function(t){return e.current.push(t)}},a)}))}),Object(p.jsxs)("div",{className:l.a.overlay,children:[Object(p.jsxs)("div",{ref:n,className:l.a.header,children:[Object(p.jsx)("h2",{children:"Harsukh Deol"}),Object(p.jsx)("h3",{children:" Technical Artist"})]}),Object(p.jsx)("div",{ref:c,className:l.a.footer,children:Object(p.jsxs)("ul",{className:l.a.socials,children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"mailto:harsukhkdeol@gmail.com",title:"Email",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(p.jsx)("path",{d:"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"})})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/harsukhdeol",title:"GitHub",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(p.jsx)("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.instagram.com/harsukh.deol/",title:"Instagram",children:Object(p.jsx)("div",{children:Object(p.jsxs)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:[Object(p.jsx)("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),Object(p.jsx)("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),Object(p.jsx)("circle",{cx:"351.5",cy:"160.5",r:"21.5"})]})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://codepen.io/harsukhdeol",title:"CodePen",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(p.jsx)("path",{d:"M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"})})})})})]})}),Object(p.jsxs)("div",{ref:a,className:l.a.menu,children:[Object(p.jsxs)("button",{className:l.a.toTop,onClick:function(){r.current.scrollIntoView()},ref:function(e){return t.current[0]=e},children:[Object(p.jsx)("div",{className:l.a.icon}),Object(p.jsx)("h4",{children:"Home"})]}),d.map((function(e,a){return Object(p.jsxs)("button",{className:l.a.menuButton,onClick:function(){return x(a)},ref:function(e){return t.current[a+1]=e},children:[Object(p.jsx)("div",{className:l.a.icon}),Object(p.jsx)("h4",{children:e.text})]},a)}))]})]})]})}a(20);var L=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(z,{})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),r(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),V()}],[[21,1,2]]]);
//# sourceMappingURL=main.769b146f.chunk.js.map