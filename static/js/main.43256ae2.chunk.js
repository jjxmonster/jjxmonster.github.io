(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},359:function(e,t,a){},362:function(e,t,a){},363:function(e,t,a){},364:function(e,t,a){},365:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a(3),s=a.n(c),n=a(94),i=a.n(n),r=(a(108),a(34)),l=a(59),d=a(12),u={isUserMovingForward:!1,isUserCheckProject:!1,handleMoveChange:function(){},handleChangeIsProjectChecked:function(){},handleSetDefaultisProjectChecked:function(){}},j=Object(c.createContext)(u),m=a(95),h=a.n(m),b=a(21),p=a.n(b),x=a(11),f=a(17),y=(a(357),a(10)),v=function(){var e=document.querySelector(".menuSpace p"),t=document.querySelectorAll(".icon");e.style.visibility="hidden";var a=y.a.timeline({defaults:{ease:"power3.ease"}});a.add("start"),t.forEach((function(e){a.to(e,{opacity:0,duration:.2},"start")})),a.to(".box1",{width:"0px",height:"0px",duration:.3},"start"),a.to(".box2",{width:"0px",height:"0px",duration:.3},"start"),a.to(".header",{y:-100,opacity:0,duration:.3},"start")},O=a(24),g=function(e){Object(c.useEffect)((function(){!function(){var e=document.querySelector(".socialWrapper").childNodes,t=y.a.timeline({defaults:{ease:"power3.ease"}});e.forEach((function(e,a){a<3?t.from(e,{opacity:0,duration:.5,scale:.5,delay:"0.".concat(a)},"start"):t.from(e,{opacity:0,duration:.5,x:50},"start")}))}()}),[]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"socialWrapper",children:[Object(o.jsx)("a",{target:"_blank",href:"https://www.facebook.com/kuba.tarabasz/",children:Object(o.jsx)(x.a,{className:"socialIcon",icon:O.b})}),Object(o.jsx)("a",{target:"_blank",href:"https://github.com/jjxmonster",children:Object(o.jsx)(x.a,{className:"socialIcon",icon:O.d})}),Object(o.jsx)("a",{target:"_blank",href:"https://www.instagram.com/jjxmonster/",children:Object(o.jsx)(x.a,{className:"socialIcon",icon:O.e})}),Object(o.jsx)("div",{className:"backSocialIcon",onClick:function(){var t=y.a.timeline({defaults:{ease:"power3.ease"}});t.to(".backSocialIcon",{backgroundColor:"rgb(165, 165, 165)",width:"100%",duration:.5},"start"),t.to("#socialBackIcon",{opacity:0,duration:.4},"start"),setTimeout((function(){e.handleUnMountSocialIcons()}),400)},children:Object(o.jsx)(x.a,{icon:f.a,id:"socialBackIcon"})})]})})},w=function(){var e=Object(c.useContext)(j),t=e.isUserMovingForward,a=e.handleSetDefaultisProjectChecked,s=Object(c.useState)(!1),n=Object(r.a)(s,2),i=n[0],l=n[1];return Object(c.useEffect)((function(){t?function(){var e=document.querySelectorAll(".icon"),t=y.a.timeline({defaults:{ease:"power3.ease"}});t.to(".box1",{rotate:45,width:"1px",height:"1px",duration:0}),t.to(".box2",{rotate:-45,width:"1px",height:"1px",duration:0}),t.from(".header",{y:-100,opacity:0,duration:.7},"start"),t.to(".box1",{width:"95%",height:"8vh",borderRadius:"50px",duration:.8},"start"),t.to(".box2",{width:"95%",height:"8vh",borderRadius:"50px",duration:.8},"start"),e.forEach((function(e){t.to(e,{visibility:"visible",opacity:1,delay:.5},"start")}))}():function(){var e=y.a.timeline({defaults:{ease:"power3.ease"}}),t=document.querySelectorAll(".icon");e.add("start"),e.from(".header",{y:100,opacity:0,duration:.7,delay:.1},"start"),e.from(".box1",{translateX:"-50vw",duration:1,opacity:0},"start"),e.from(".box2",{translateX:"50vw",duration:1,opacity:0},"start"),e.to(".box1",{rotate:45,delay:1,duration:.5},"start"),e.to(".box2",{rotate:-45,delay:1,duration:.5},"start"),e.to(".box1",{width:"95%",borderRadius:"50px",delay:1.5},"start"),e.to(".box2",{width:"95%",borderRadius:"50px",delay:1.5},"start"),t.forEach((function(t){e.to(t,{visibility:"visible",opacity:1,duration:.5,delay:1.8},"start")}))}(),function(){var e=document.querySelector(".menuSpace p"),t=document.querySelector(".box1"),a=document.querySelector(".box2"),o=document.querySelectorAll(".icon"),c=["PROJECTS","ABOUT ME","CONTACT","SOCIAL"];o.forEach((function(o,s){o.addEventListener("mouseover",(function(){t.classList.add("white"),a.classList.add("white"),e.classList.add("animationInfo"),e.textContent=c[s]})),o.addEventListener("mouseout",(function(){t.classList.remove("white"),a.classList.remove("white"),e.textContent=""}))}))}(),a()}),[]),Object(o.jsxs)("div",{className:"homePage",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Jakub Tarabasz"}),Object(o.jsx)("p",{children:"Front-End Developer"})]}),Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(p.a,{delay:1e3,to:"/projects",replace:!1,children:Object(o.jsx)(x.a,{onClick:v,className:"icon1 icon",icon:f.e})}),Object(o.jsx)(p.a,{delay:1e3,to:"/about",replace:!1,children:Object(o.jsx)(x.a,{onClick:v,className:"icon2 icon",icon:f.f})}),Object(o.jsx)(p.a,{delay:1e3,to:"/contact",replace:!1,children:Object(o.jsx)(x.a,{onClick:v,className:"icon3 icon",icon:f.d})}),Object(o.jsx)(x.a,{className:"icon4 icon",onClick:function(){!function(){var e=document.querySelectorAll(".icon"),t=y.a.timeline({defaults:{ease:"none"}});t.to(".box1",{rotate:0,duration:.5},"start"),t.to(".box2",{rotate:0,duration:.5},"start"),t.to(".menuSpace",{visibility:"hidden",duration:.1},"start"),e.forEach((function(e){t.to(e,{visibility:"hidden",opacity:0,duration:.2},"start")})),t.to(".box2",{backgroundColor:"white",duration:.2,delay:.5},"start")}(),setTimeout((function(){l(!0)}),500)},icon:f.c}),Object(o.jsx)("div",{className:"menuSpace",children:Object(o.jsx)("p",{})}),Object(o.jsx)("div",{className:"box1"}),Object(o.jsx)("div",{className:"box2",children:i?Object(o.jsx)(g,{handleUnMountSocialIcons:function(){!function(){var e=document.querySelectorAll(".icon"),t=y.a.timeline({defaults:{ease:"power1.ease"}});t.to(".box1",{rotate:45,duration:.5},"start"),t.to(".box2",{rotate:-45,duration:.5},"start"),t.to(".menuSpace",{visibility:"visible",duration:.1},"start"),t.to(".box2",{backgroundColor:"",duration:.2},"start"),e.forEach((function(e){t.to(e,{visibility:"visible",opacity:1,duration:.1},"start")}))}(),l(!1)}}):null})]})}),Object(o.jsx)("footer",{children:"\xa9 Copyright 2020 by Jakub Tarabasz. All Rights Reserved."})]})},S=function(){var e=document.querySelector(".app"),t=document.querySelector(".welcome"),a=y.a.timeline({defaults:{ease:"power3.ease"}});e.style=" overflow: hidden",t.classList.add("rollWelcome"),a.to(".spanBck",{opacity:0,duration:.2},"start"),a.to(".aboutHeader",{y:-100,opacity:0,duration:.5},"start"),a.to(".aboutContent",{y:-100,opacity:0,delay:.3,duration:.5},"start"),a.to(".mainSkills",{opacity:0,y:-100,duration:.5},"start"),a.to(".otherSkills",{opacity:0,y:-100,delay:.2,duration:.5},"start"),a.to(".langSkills",{opacity:0,y:-100,delay:.4,duration:.5},"start"),a.to(".aboutPage",{height:0,delay:.7,duration:1},"start")},k=function(e){return window.innerWidth>1200?Object(o.jsx)("span",{onClick:e.onUnMountFunction,className:"spanBck",children:"HOME"}):Object(o.jsx)(x.a,{onClick:e.onUnMountFunction,className:"backIcon",icon:f.b})},N=(a(358),a.p+"static/media/me.05a8def5.jpg"),C=function(){var e=Object(c.useContext)(j).handleMoveChange;return Object(c.useEffect)((function(){!function(){var e=document.querySelector(".app"),t=document.querySelector(".welcome div h1"),a=document.querySelector(".welcome div h2"),o=document.querySelector(".welcome div span"),c=y.a.timeline({defaults:{ease:"power3.ease"}});e.style=" overflow: visible",c.from(".aboutPage",{height:0,duration:1},"start"),c.to(".aboutHeader",{visibility:"visible",delay:.5},"start"),c.to(".aboutContent",{visibility:"visible",delay:.5},"start"),c.from(".imageSpace",{delay:4.5,y:-100,opacity:0,duration:.5},"start"),c.from(".textSpace #top",{x:-50,opacity:0,delay:4.5,duration:.3},"start"),c.from(".textSpace #bottom",{x:-50,opacity:0,delay:4.7,duration:.3},"start"),c.from(".skillsTitle h1",{y:50,opacity:0,delay:5,duration:.5},"start"),c.from(".mainSkills",{opacity:0,y:-100,delay:5,duration:.5},"start"),c.from(".otherSkills",{opacity:0,y:-100,delay:5.2,duration:.5},"start"),c.from(".langSkills",{opacity:0,y:-100,delay:5.4,duration:.5},"start"),c.from(".spanBck",{opacity:0,y:10,delay:5.4,duration:.2},"start");var s=0,n=0,i="HELLO, MY NAME IS",r="JAKUB";setTimeout((function(){var e=setInterval((function(){t.textContent+=i[s],++s===i.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=r[n],++n===r.length&&clearInterval(e)}),100)}),2750),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),4e3),window.innerWidth<1200&&c.fromTo(".aboutPage",{height:0,duration:1},{height:"200%"},"start")}(),e()}),[]),Object(o.jsxs)("div",{className:"aboutPage",children:[Object(o.jsxs)("div",{className:"aboutHeader",children:[Object(o.jsx)("div",{className:"aboutTitle aboutFlex",children:Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h1",{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsx)("div",{className:"aboutImage aboutFlex",children:Object(o.jsxs)("div",{className:"imageSpace",children:[Object(o.jsx)("p",{className:"imageText",children:"yes, it's me!"}),Object(o.jsx)("img",{src:N,alt:"mejpg"})]})})]}),Object(o.jsxs)("div",{className:"aboutContent ",children:[Object(o.jsx)("div",{className:"aboutText aboutFlex",children:Object(o.jsxs)("div",{className:"textSpace",children:[Object(o.jsx)("p",{id:"top",children:"I'm React Front-End Developer from Poland. I'm 18 yo and I learn Front-End since april 2018 and React since 2020."}),Object(o.jsx)("p",{id:"bottom",children:"Besides coding, gym and computer games is my hobby, also i like reading books, I love The Witcher of Sapkowski."})]})}),Object(o.jsxs)("div",{className:"aboutSkills aboutFlex",children:[Object(o.jsx)("div",{className:"skillsTitle",children:Object(o.jsx)("h1",{children:"SKILLS"})}),Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsxs)("div",{className:"mainSkills",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"MAIN"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"beforeReact before",children:Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{className:"skillsIcon",icon:O.h})})}),Object(o.jsx)("li",{className:"beforeJs before",children:Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{className:"skillsIcon",icon:O.f})})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Redux"})}),Object(o.jsx)("li",{className:"beforeCss before",children:Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{className:"skillsIcon",icon:O.a})})})]})]}),Object(o.jsxs)("div",{className:"otherSkills",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"OTHERS"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"beforeNode before",children:Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{className:"skillsIcon",icon:O.g})})}),Object(o.jsx)("li",{className:"beforeExpress before",children:Object(o.jsx)("p",{children:"Express.js"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"beforeApi before",children:"API"})}),Object(o.jsx)("li",{className:"beforeGit before",children:Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{className:"skillsIcon",icon:O.c})})})]})]}),Object(o.jsxs)("div",{className:"langSkills",children:[Object(o.jsx)("div",{className:"skillsTitle",children:Object(o.jsx)("h2",{children:"LANGUAGES"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Polish"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"English"})})]})]})]})]})]}),Object(o.jsx)(p.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(k,{onUnMountFunction:S})})]})},E=function(){var e=document.querySelector(".welcomeProjects"),t=y.a.timeline({defaults:{ease:"power3.ease"}});e.classList.add("rollWelcome"),t.to(".spanBck",{opacity:0,duration:.2,ease:"none"},"start"),t.to(".projectsHeader",{opacity:0,y:-100,duration:.5,ease:"none"},"start"),t.to(".projectBox",{opacity:0,y:-100,duration:.5,dealy:.3,ease:"none"},"start"),t.to(".projectsContainer",{visibility:"hidden",duration:0,delay:.35},"start"),t.to(".projectsPage",{height:0,delay:.7,duration:1},"start")},I=function(){document.querySelector("body").style.overflow="hidden";var e=y.a.timeline({defaults:{ease:"power3.ease"}});e.to(".projectsHeader",{opacity:0,x:-100,duration:.2},"start"),e.to(".projectsContainer",{opacity:0,x:-100,duration:.2,delay:.1},"start"),e.to(".spanBck",{opacity:0,y:50,delay:.2,duration:.1},"start"),e.to(".projectsPage",{width:0,delay:.4,duration:1},"start")},P=a.p+"static/media/weatherapp.d97e18d2.jpg",T=a.p+"static/media/weatherapp2.3d4fa34f.jpg",q=a.p+"static/media/weatherapp3.ec9b5393.jpg",M=a.p+"static/media/weatherapp4.06b1d97f.jpg",A=a.p+"static/media/budget1.9c61658c.jpg",R=a.p+"static/media/budget2.63c4634f.jpg",F=a.p+"static/media/budget3.981c8856.jpg",U=a.p+"static/media/budget4.8eb15f6c.jpg",B=[{id:1,name:"Weather App",linkName:"weatherapp",images:[P,T,q,M],description:"React application using free weather API, gets with fetch(). With smooth animations using GSAP. User is able to know the current temperature, humadity, pressure and wind speed.",technology:"React, React Hooks, GSAP, CSS, API",github:"https://github.com/jjxmonster/React-Weather-App"},{id:2,name:"Tissot Store",linkName:"tissot-store",images:[a.p+"static/media/tissot.c43a0105.png",a.p+"static/media/tissot2.0e0fc3ee.png",a.p+"static/media/tissot3.9a09ea4c.png",a.p+"static/media/tissot4.c1e337e1.png"],description:"React shopping cart with Tissot watches, user can browse the store's offer, add product to cart (if he wants, he can remove it). After entering the data in the form, order will be saved in json file  due to custom backend with express.js. User can also check all\n         orders",technology:"React, Redux, Styled Components, React Final Form, React-Query, Node.js, Express.js",github:""},{id:3,name:"Movie Library",linkName:"movie-library",images:[a.p+"static/media/movie1.a472178b.png",a.p+"static/media/movie2.718ebbb6.png",a.p+"static/media/movie3.3bdaf766.png",a.p+"static/media/movie4.3f782221.png"],description:"User can choose his favourite movie genre and see movies matching to that. After click to some movie, user will able to see more information about it, like description, duration and links to movie website and watch trailer.         ",technology:"React, Redux, Styled Components, React-Query, API",github:""},{id:4,name:"Budget App",linkName:"budget",images:[A,R,F,U],description:"React application about budget, user can add his budget and categories, add to them transactions. User is able to know how much money he allocated in the month concerned, how much he spent in different categories, and how much money is left.",technology:"React, Redux, Styled Components, React Final Form, i18next, JSON Server",github:""}],L=(a(359),function(){var e=Object(c.useContext)(j),t=e.handleMoveChange,a=e.isUserCheckProject;return Object(c.useEffect)((function(){a?function(){document.querySelector("body").style.overflow="visible";var e=document.querySelector(".welcomeProjects h1"),t=document.querySelector(".welcomeProjects h2"),a=document.querySelector(".welcomeProjects span"),o=y.a.timeline({defaults:{ease:"power3.ease"}});e.textContent="CHECK OUT MY",t.textContent="PROJECTS",o.from(".projectsPage",{width:0,delay:.4,duration:1},"start"),o.from(".projectsHeader",{opacity:0,delay:1.1,duration:.2},"start"),o.from(".projectsHeader h1",{opacity:0,x:-100,delay:1.1,duration:.2},"start"),o.from(".projectsHeader h2",{opacity:0,x:-100,delay:1.1,duration:.2},"start"),o.from(".projectsContainer",{opacity:0,x:-100,duration:.2,delay:1.2},"start"),o.to(".projectsContainer",{visibility:"visible",delay:1.2},"start"),o.to(".projectBox",{opacity:1,duration:.1,delay:1.2},"start"),o.from(".spanBck",{opacity:0,y:10,delay:1.5,duration:.1},"start"),setTimeout((function(){a.textContent="|",setInterval((function(){a.classList.toggle("active")}),400)}),3500)}():function(){var e=document.querySelector(".app"),t=document.querySelector(".welcomeProjects h1"),a=document.querySelector(".welcomeProjects h2"),o=document.querySelector(".welcomeProjects span"),c=document.querySelector(".projectsContainer"),s=document.querySelectorAll(".projectBox"),n=y.a.timeline({defaults:{ease:"power3.ease"}});s.forEach((function(e){n.to(e,{opacity:0,y:-200,duration:0})})),n.from(".projectsPage",{height:0,duration:1},"start"),n.from(".spanBck",{opacity:0,y:10,delay:3.5,duration:.1},"start"),e.style=" overflow: hidden";var i=0,r=0,l="CHECK OUT MY",d="PROJECTS";setTimeout((function(){s.forEach((function(e){n.to(e,{opacity:1,y:0,duration:.1,delay:.1,ease:"none"})}))}),2e3),setTimeout((function(){c.style="visibility:visible";var e=setInterval((function(){t.textContent+=l[i],++i===l.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=d[r],++r===d.length&&clearInterval(e)}),100)}),2300),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),3500)}(),t()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"projectsPage",children:[Object(o.jsx)("div",{className:"projectsHeader",children:Object(o.jsxs)("div",{className:"welcomeProjects",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsx)("div",{className:"projectsContainer",children:B.map((function(e){return Object(o.jsxs)("div",{className:"projectBox",children:[Object(o.jsx)("img",{src:e.images[0],alt:e.name}),Object(o.jsx)(p.a,{delay:1e3,to:"/project/".concat(e.linkName),replace:!1,children:Object(o.jsx)("div",{onClick:I,className:"projectContent",children:Object(o.jsx)("h3",{children:e.name.toUpperCase()})})})]},e.id)}))}),Object(o.jsx)(p.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(k,{onUnMountFunction:E})})]})})}),_=a(97),H=a(98),W=a(99),J=a(102),z=a(101),D=a(100),K=a.n(D),G=function(){console.log("out");var e=y.a.timeline({defaults:{ease:"power3.ease"}});e.to(".spanBck",{opacity:0,duration:.2,ease:"none"},"start"),e.to(".contactHeader",{y:-100,opacity:0,duration:.5},"start"),e.to(".contactWrapper",{y:-100,opacity:0,delay:.2,duration:.5},"start"),e.to(".contactPage",{height:0,delay:.7,duration:1},"start"),document.querySelector("body").style.overflow="visible"},Y=(a(362),function(e){Object(J.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(H.a)(this,a);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={from_name:"",email:"",message:"",nameError:null,mailError:null,messageError:null,showErrors:!1},e.errorMessages={name:"Name can't contain a number and is required.",mail:"Please enter a valid email.",message:"Please enter some message."},e}return Object(W.a)(a,[{key:"handleShowErrors",value:function(){this.formValidation(),this.setState({showErrors:!0})}},{key:"componentDidMount",value:function(){this.context.handleMoveChange(),function(){document.querySelector("body").style.overflow="hidden";var e=document.querySelector(".contactForm form").childNodes,t=document.querySelector(".welcomeContact h1"),a=document.querySelector(".welcomeContact h2"),o=document.querySelector(".welcomeContact span"),c=y.a.timeline({defaults:{ease:"power3.ease"}});c.from(".contactPage",{height:0,duration:1},"start"),c.from(".spanBck",{opacity:0,y:10,delay:4.5,duration:.1},"start"),c.from(".contactText",{opacity:0,y:100,delay:3.8,duration:.5},"start"),e.forEach((function(e,t){c.from(e,{opacity:0,y:100,delay:"4.".concat(t),duration:.5},"start")}));var s=0,n=0,i="IF YOU WANT",r="CONTACT ME";setTimeout((function(){var e=setInterval((function(){t.textContent+=i[s],++s===i.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=r[n],++n===r.length&&clearInterval(e)}),100)}),2200),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),3500)}()}},{key:"formValidation",value:function(){var e=this.state,t=e.from_name,a=e.email,o=e.message;/\d/.test(t)||""===t?this.setState({nameError:!0}):this.setState({nameError:!1}),-1!==a.indexOf("@")?this.setState({mailError:!1}):this.setState({mailError:!0}),o.length>5?this.setState({messageError:!1}):this.setState({messageError:!0})}},{key:"sendEmail",value:function(e){e.preventDefault();var t=this.state,a=t.nameError,o=t.mailError,c=t.messageError;!1===a&&!1===o&&!1===c&&(K.a.sendForm("service_ljad4dc","template_cez2xe7",e.target,"user_c3tVKssssylv8IrSad9b0").then((function(e){console.log(e.text),alert("Thank you, your message was sent. I will write back as soon as possible.")}),(function(e){console.log(e.text),alert("Ooops! something went wrong! Try again later.")})),this.setState({from_name:"",email:"",message:"",nameError:null,mailError:null,messageError:null}))}},{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(_.a)({},t,e.target.value)),this.formValidation()}},{key:"render",value:function(){var e=this.state,t=e.from_name,a=e.email,c=e.message,s=e.nameError,n=e.mailError,i=e.messageError,r=e.showErrors;return Object(o.jsxs)("div",{className:"contactPage",children:[Object(o.jsx)("div",{className:"contactHeader",children:Object(o.jsxs)("div",{className:"welcomeContact",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsxs)("div",{className:"contactWrapper",children:[Object(o.jsx)("div",{className:"contactForm",children:Object(o.jsxs)("form",{onSubmit:this.sendEmail.bind(this),children:[Object(o.jsxs)("div",{className:"formName",children:[Object(o.jsx)("input",{className:"input",type:"text",name:"from_name",placeholder:"Name",onChange:this.handleChange.bind(this),value:t}),r?Object(o.jsx)("p",{children:s?this.errorMessages.name:null}):null]}),Object(o.jsxs)("div",{className:"formMail",children:[Object(o.jsx)("input",{className:"input",type:"text",name:"email",placeholder:"Email",onChange:this.handleChange.bind(this),value:a}),r?Object(o.jsx)("p",{children:n?this.errorMessages.mail:null}):null]}),Object(o.jsxs)("div",{className:"formArea",children:[Object(o.jsx)("textarea",{name:"message",placeholder:"Message",onChange:this.handleChange.bind(this),value:c,cols:"30",rows:"10"}),r?Object(o.jsx)("p",{children:i?this.errorMessages.message:null}):null]}),Object(o.jsx)("input",{onClick:this.handleShowErrors.bind(this),className:"formSubmit",type:"submit",value:"Submit"})]})}),Object(o.jsxs)("div",{className:"contactText",children:[Object(o.jsx)("h3",{children:"If you have any questions or offer, you can send me a message via form, or contact me on email."}),Object(o.jsxs)("a",{href:"mailTo:kuba.tarabasz@wp.pl",children:[Object(o.jsx)("span",{children:Object(o.jsx)(x.a,{icon:f.d})})," kuba.tarabasz@wp.pl"]})]})]}),Object(o.jsx)(p.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(k,{onUnMountFunction:G})})]})}}]),a}(c.Component));Y.contextType=j;var V=Y,X=function(e){var t=e.images,a=t.map((function(e,t){return Object(o.jsx)("input",{type:"radio",name:"slide",id:"dot".concat(t+1),selected:!1},e)})),c=t.map((function(e){return Object(o.jsx)("img",{alt:e,src:e},e)})),s=t.map((function(e,t){return Object(o.jsx)("label",{htmlFor:"dot".concat(t+1)},e)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"slider",children:[a,Object(o.jsx)("div",{className:"slides",children:Object(o.jsx)("div",{className:"overflow",children:Object(o.jsx)("div",{className:"image",children:c})})}),Object(o.jsx)("div",{className:"dots",children:s})]})})},Q=(a(363),function(e){var t=e.match,a=e.history,s=Object(c.useContext)(j).handleChangeIsProjectChecked;Object(c.useEffect)((function(){!function(){var e=y.a.timeline({defaults:{ease:"power3.ease"}});e.from(".projectPage",{width:0,duration:1},"start"),e.from(".projectHeader h1",{y:-100,opacity:0,scale:.5,duration:.5,delay:1.1},"start"),e.from(".aboutProject",{opacity:0,x:50,delay:1.5},"start"),e.from(".sliderWrapper",{opacity:0,x:50,delay:2},"start"),setTimeout((function(){document.querySelector("body").style.overflow="visible"}),500)}(),s()}),[]);var n=B.filter((function(e){return e.linkName===t.params.name}))[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"projectHeader",children:Object(o.jsx)("h1",{children:n.name})}),Object(o.jsxs)("div",{className:"projectWrapper",children:[Object(o.jsxs)("div",{className:"aboutProject",children:[Object(o.jsx)("p",{children:n.description}),Object(o.jsx)("div",{className:"technologies",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"SKILLS = [  "}),n.technology," ",Object(o.jsx)("span",{children:"]"})]})})]}),Object(o.jsx)("div",{className:"sliderWrapper",children:Object(o.jsx)(X,{images:n.images})})]}),Object(o.jsx)("div",{className:"projectButtons",children:Object(o.jsxs)("span",{onClick:function(){!function(){var e=y.a.timeline({defaults:{ease:"power3.ease"}});document.querySelector("body").style.overflow="hidden",e.to(".backToProjects",{y:50,opacity:0,duration:.2},"start"),e.to(".projectHeader h1",{x:100,opacity:0,duration:.2},"start"),e.to(".aboutProject",{opacity:0,x:100,duration:.2},"start"),e.to(".sliderWrapper",{opacity:0,x:100,duration:.2},"start"),e.to(".projectPage",{width:"0%",duration:.7,delay:.5,padding:"0"},"start")}(),setTimeout((function(){a.goBack()}),1e3)},className:"backToProjects",children:[Object(o.jsx)(x.a,{icon:f.a,id:"projectsBackIcon"}),"PROJECTS"]})})]})})}),Z=(a(364),{particles:{number:{value:100,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:1,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:200,color:"#009771",opacity:.5,width:2},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:100,duration:.2},push:{particles_nb:3},remove:{particles_nb:2}}},retina_detect:!0}),$=function(){var e=Object(c.useState)(u.isUserMovingForward),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(u.isUserCheckProject),i=Object(r.a)(n,2),m=i[0],b=i[1];return Object(o.jsx)(l.BrowserRouter,{basename:"",children:Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)(j.Provider,{value:{isUserMovingForward:a,isUserCheckProject:m,handleMoveChange:function(){s(!0)},handleChangeIsProjectChecked:function(){b(!0)},handleSetDefaultisProjectChecked:function(){b(!1)}},children:[Object(o.jsx)(h.a,{params:Z}),Object(o.jsxs)(d.g,{children:[Object(o.jsx)(d.d,{path:"/about",component:function(){return Object(o.jsx)(C,{})}}),Object(o.jsx)(d.d,{path:"/projects",component:function(){return Object(o.jsx)(L,{})}}),Object(o.jsx)(d.d,{path:"/project/:name",component:Q}),Object(o.jsx)(d.d,{path:"/contact",component:V}),Object(o.jsx)(d.d,{path:"/",component:function(){return Object(o.jsx)(w,{})}})]})]})})})},ee=function(){return Object(o.jsx)($,{})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(ee,{})}),document.getElementById("root"))}},[[365,1,2]]]);
//# sourceMappingURL=main.43256ae2.chunk.js.map