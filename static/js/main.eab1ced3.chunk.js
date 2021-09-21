(this.webpackJsonptechartsite=this.webpackJsonptechartsite||[]).push([[0],[,,,function(e,t,a){e.exports={Container:"Container_Container__2TVjX",overlay:"Container_overlay__31LRZ",header:"Container_header__rQnB7",footer:"Container_footer__2ZeRG",socials:"Container_socials__3bxxF",menu:"Container_menu__3981j",icon:"Container_icon__1WMR6"}},function(e,t,a){e.exports={Page:"Page_Page__2lhdg",title:"Page_title__5VZCI",background:"Page_background__1GyFo",grid:"Page_grid__3nees"}},function(e,t,a){e.exports={Slider:"Slider_Slider__1cBTN",slideContainer:"Slider_slideContainer__3r8nh",overlay:"Slider_overlay__123VZ",divider:"Slider_divider__148SU",menuContainer:"Slider_menuContainer__TtnPv"}},function(e,t,a){e.exports={Slide:"Slide_Slide__1AuhT",overlay:"Slide_overlay__2psjk",text:"Slide_text__1JaW-"}},function(e,t,a){e.exports={MenuButton:"MenuButton_MenuButton__2Bq6Y",image:"MenuButton_image__2uNiS",text:"MenuButton_text__1Mee9"}},,function(e,t,a){e.exports={LargeComponent:"LargeComponent_LargeComponent__3yg5p",description:"LargeComponent_description__1tFYR"}},function(e,t,a){e.exports={SmallComponent:"SmallComponent_SmallComponent__23HYx",description:"SmallComponent_description__2yCPq"}},,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),n=a(12),s=a.n(n),o=(a(18),a(13)),c=a(3),d=a.n(c),l=[{text:"VFX",image:"./vfx/vfx.jpg"},{text:"UX/UI Dev",image:"./ui/ui.png"},{text:"AR/VR",image:"./arvr/1.png"},{text:"Materials",image:"./materials/materials.png"}],h=[{text:"VFX",video:"./vfx/vfx.mp4",large:{video:"./vfx/vfx.mp4",text:"This effect is made up of two particle systems moving along a spline and a dissolve material that animates upwards. A custom Niagara module script was implemented to make the particles follow the curve. All of the VFX below were created at my last workplace with Unreal Engine's particle system, Niagara. "},small:[{video:"./vfx/2.mp4",text:"I created a Niagara module script that read the vertex data of a box and skeletal mesh and transformed the particle position from the surface of the box to the character. I made this script work with the default physics modules so additional forces, like curl noise, could be added."},{video:"./vfx/3.mp4",text:"I created the placement VFX for this power pole. There is one emiter on the sphere and one on the pole, that resizes to fit the shape of its parent."},{video:"./vfx/4.mp4",text:"I created a hair model with Maya Xgen, then ran a script to generate a vector field, which I used to animate particles down the length of the hair. I also created a material for ombre hair. "},{video:"./vfx/5.mp4",text:"This is another prototype of animating hair I created with Niagara that also moved with the character. "},{video:"./vfx/6.mp4",text:"This is a VFX matching puzzle I created with C++ and Niagara. Moving the mouse horizontally changes the color and moving it vertically changes its speed."}]},{text:"UX/UI Dev",video:"./ui/ui.mp4",large:{video:"./ui/ui.mp4",text:"This is the character customization screen I created with reusable widgets that I developed and animated with UMG. I handled the data and logic with Blueprints. All of the UIs below are protoypes I made with UMG, without any mockups, for the last game studio I worked at.  "},small:[{video:"./ui/4.mp4",text:"This is quick tutorial screen I created to describe the objectives of the game. The background was created in Illustrator and the animations were done with UMG timeline. "},{video:"./ui/5.mp4",text:"This UI system displays the all quests available, allows users to select three and displays the progress when it is opened again. I linked the C++ functionality to the UI with Blueprints."},{video:"./ui/2.mp4",text:"This is a working prototype of the Lobby menus. This includes the Leaderboard, Challenges, BattlePass, Wardrobe and Store. "},{video:"./ui/3.mp4",text:"This is the end game screen that displays the player's score and accomplishments. I created UI materials to animate the progress bar and the bottom text. "}]},{text:"AR/VR",video:"./arvr/1.mp4",large:{video:"./arvr/1.mp4",text:"I setup this AR scene and experimented with different lighting and post processing setups to design different levels. I also created the VFX particles with Unity's Particle System and used C# to control their movement."},small:[{video:"./arvr/arvr.mov",text:"Here is another version of the same scene with different lighting and post processing."},{video:"./arvr/2.mp4",text:"This is the TikTok effect I created for my company to send to TikTok, so they could get approved to use their software commercially. Since I was experienced creating Snapchat filters, I was able to quickly pick up the new software and create this effect independently. "},{video:"./arvr/3.mp4",text:"This is one of the several Snapchat filters I have made. It detects a hand and orbits planets around it. I created the materials for the planets in Lens Studio and used JavaScript to control the motion"},{video:"./arvr/4.mp4",text:"I created several trendy filters as well that appeal to the young audience that use Snapchat, This is one of my most popular effects with over 350K views."}]},{text:"Materials",video:"./materials/1.mp4",large:{video:"./materials/1.mp4",text:"This is one material instance of my master fractal material. The game had a mathematical theme and required an interesting sky material. So I used HLSL to create a material function that generated fractals and layered them together to remove any harsh lines. "},small:[{video:"./materials/2.mp4",text:"This is another material instance of the same fractal material that focused on different parameters of the Julia set."},{video:"./materials/22.mp4",text:"This is the material that was chosen as the final design as it was more subtle and resembled stars."},{video:"./materials/4.mp4",text:"This is the shader I developed for the AR game. It animates the vertices according to the user-defined wind speed and colors the grass blades in a gradient of the user-defined colors"},{video:"./materials/3.mp4",text:"I learned about Fractal Brownian Motion and developed this shader in ShaderToy."},{video:"./materials/5.mp4",text:"The game had fractal match puzzles where players could control the shape of the fractal with mouse movement. I created a material that took the numbers generated from the C++ puzzle code and a lookup table to create visually appealing fractals"},{video:"./materials/6.mp4",text:"Different types of fractals required adjustments to ensure the color was mapped correctly. I created several lookup tables that could be applied to any type of fractal, creating over 20 different combinations."},{video:"./materials/7.mp4",text:"This is a procedural material I created in Substance Designer. I used the shape and blend nodes to create the basic design and experimented with a variety of noise nodes to create imperfections to add realism. "},{video:"./materials/8.mp4",text:"This is another HLSL shader I created in ShaderToy. I learned about the Mandelbrot Times Table and created a shader that connected different points along a circle to their factors "}]}],u=a(6),m=a.n(u),p=a(0),f=r.a.forwardRef((function(e,t){var a=e.data,r=(e.index,Object(i.useRef)(null));return Object(p.jsxs)("div",{ref:t,className:m.a.Slide,children:[Object(p.jsxs)("video",{ref:r,autoPlay:!0,muted:!0,controls:!0,loop:!0,children:[Object(p.jsx)("source",{src:a.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("div",{className:m.a.overlay,children:Object(p.jsx)("h1",{className:m.a.text,children:a.text})})]})})),v=a(7),j=a.n(v);function x(e){var t=e.data,a=e.index,i=e.onClick;return Object(p.jsxs)("div",{onClick:function(){return i(a)},className:j.a.MenuButton,children:[Object(p.jsx)("h3",{className:j.a.text,children:t.text}),Object(p.jsx)("div",{className:j.a.image,style:{backgroundImage:"url(".concat(t.image,")")}})]})}var b=a(2),g=a(5),O=a.n(g),w=r.a.forwardRef((function(e,t){var a=e.onClick,r=Object(i.useRef)([l.length]),n=b.b.timeline({repeat:-1});return Object(i.useEffect)((function(){r.current.forEach((function(e,t){n.from([e],{opacity:0}).to([e],{opacity:1,duration:2},">").to([e],{opacity:0,duration:1},">+=1")}))}),[n]),Object(p.jsxs)("div",{ref:t,className:O.a.Slider,children:[Object(p.jsxs)("div",{className:O.a.slideContainer,children:[Object(p.jsx)("div",{children:h.map((function(e,t){return Object(p.jsx)(f,{ref:function(e){r.current[t]=e},index:t,data:e},t)}))}),Object(p.jsx)("div",{className:O.a.overlay})]}),Object(p.jsx)("div",{className:O.a.divider}),Object(p.jsx)("div",{className:O.a.menuContainer,children:l.map((function(e,t){return Object(p.jsx)(x,{index:t,data:e,onClick:a},t)}))})]})})),_=a(11),y=a(4),C=a.n(y),I=a(9),k=a.n(I);function N(e){return Object(p.jsxs)("div",{className:k.a.LargeComponent,children:[Object(p.jsxs)("video",{autoPlay:!0,controls:!0,children:[Object(p.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("p",{className:k.a.description,children:e.text})]})}var S=a(10),T=a.n(S);function M(e){return Object(p.jsxs)("div",{className:T.a.SmallComponent,children:[Object(p.jsxs)("video",{controls:!0,children:[Object(p.jsx)("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(p.jsx)("p",{className:T.a.description,children:e.text})]})}var R=r.a.forwardRef((function(e,t){var a=e.data;return Object(p.jsxs)("div",{ref:t,className:C.a.Page,children:[Object(p.jsxs)("div",{className:C.a.background,children:[Object(p.jsx)("div",{className:C.a.hBorder}),Object(p.jsx)("div",{className:C.a.vBorder})]}),Object(p.jsx)("h1",{className:C.a.title,children:a.text}),Object(p.jsx)(N,Object(_.a)({},a.large)),Object(p.jsx)("div",{className:C.a.grid,children:a.small.map((function(e,t){return Object(p.jsx)(M,Object(_.a)({},e),t)}))})]})}));function B(){var e=Object(i.useRef)([]),t=Object(i.useRef)([l.length]),a=Object(i.useRef)(null),r=Object(i.useRef)(null),n=Object(i.useRef)(null),s=Object(i.useRef)(null),c=Object(i.useState)(0),u=Object(o.a)(c,2),m=u[0],f=u[1];function v(t){e.current[t].scrollIntoView()}return Object(i.useEffect)((function(){var i=function(){var i=window.scrollY;f(i),i>window.innerHeight?(b.a.to([s.current],{duration:1,justifyContent:"center",height:" auto",fill:"#555"}),b.a.to([n.current],{duration:1,opacity:0}),b.a.to([a.current],{opacity:1,duration:1})):i<1.5*window.innerHeight&&(b.a.to([a.current],{opacity:0,duration:.5}),b.a.to([s.current],{duration:1,justifyContent:"flex-start",height:"170px"}),b.a.to([n.current],{duration:1,opacity:1})),t.current.forEach((function(t,a){var i=window.innerHeight,r=e.current[a].getBoundingClientRect();r.bottom>i/2&&r.top<i?(b.a.to([t.children[0]],{backgroundColor:"#9922dd",duration:1}),b.a.to([t.children[1]],{color:"#cf7cff",duration:1})):(b.a.to([t.children[0]],{backgroundColor:"#444",duration:1}),b.a.to([t.children[1]],{color:"#888",duration:1}))}))};return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[m]),Object(p.jsxs)("div",{className:d.a.Container,children:[Object(p.jsx)(w,{onClick:v,ref:r}),Object(p.jsx)("div",{className:d.a.body,children:h.map((function(t,a){return Object(p.jsx)(R,{index:a,data:t,ref:function(t){return e.current.push(t)}},a)}))}),Object(p.jsxs)("div",{className:d.a.overlay,children:[Object(p.jsxs)("div",{ref:n,className:d.a.header,children:[Object(p.jsx)("h2",{children:"Harsukh Deol"}),Object(p.jsx)("h3",{children:" Technical Artist"})]}),Object(p.jsx)("div",{ref:s,className:d.a.footer,children:Object(p.jsxs)("ul",{className:d.a.socials,children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"mailto:harsukhkdeol@gmail.com",title:"Email",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(p.jsx)("path",{d:"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"})})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/harsukhdeol",title:"GitHub",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(p.jsx)("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.instagram.com/harsukh.deol/",title:"Instagram",children:Object(p.jsx)("div",{children:Object(p.jsxs)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:[Object(p.jsx)("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),Object(p.jsx)("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),Object(p.jsx)("circle",{cx:"351.5",cy:"160.5",r:"21.5"})]})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/harsukh-deol-861920177/",title:"Linkedin",children:Object(p.jsx)("div",{children:Object(p.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})})})]})}),Object(p.jsxs)("div",{ref:a,className:d.a.menu,children:[Object(p.jsxs)("button",{className:d.a.toTop,onClick:function(){r.current.scrollIntoView()},children:[Object(p.jsx)("div",{className:d.a.icon}),Object(p.jsx)("h4",{children:"Home"})]}),l.map((function(e,a){return Object(p.jsxs)("button",{className:d.a.menuButton,onClick:function(){return v(a)},ref:function(e){return t.current[a]=e},children:[Object(p.jsx)("div",{className:d.a.icon}),Object(p.jsx)("h4",{children:e.text})]},a)}))]})]})]})}a(20);var z=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(B,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),r(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),L()}],[[21,1,2]]]);
//# sourceMappingURL=main.eab1ced3.chunk.js.map