import gsap from 'gsap'
 


export const animationsOnMount = ()=>
{
   
 const app = document.querySelector('.app')  
 const title = document.querySelector(".welcomeProjects h1")
 const secondTitle = document.querySelector(".welcomeProjects h2")
 const cursor = document.querySelector(".welcomeProjects span")
 const container = document.querySelector('.projectsContainer')
 const projectBoxes = document.querySelectorAll(".projectBox")
 
 const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

projectBoxes.forEach((item )=>{
    timeLine.to(item, {opacity:0,y:-200, duration:0})
 })

 timeLine.from(".projectsPage", { height:0, duration:1} ,"start")
 timeLine.from(".spanBck",{opacity:0, y:10, delay:3.5, duration:0.1},"start")

 app.style=" overflow: hidden"

 let number = 0;
 let numberh2 = 0;
 const texth1 = "CHECK OUT MY"
 const h2 = "PROJECTS"


setTimeout(() => {
    projectBoxes.forEach((item )=>{
    timeLine.to(item, {opacity:1,y:0, duration:0.1,delay:0.1,ease: 'none'})
 })
}, 2000);


 setTimeout(() => {
    container.style="visibility:visible"
     const addLetter = () => {

         title.textContent += texth1[number];
         number++;
         if (number === texth1.length) clearInterval(indexTyping);
     }
   
     const indexTyping = setInterval(addLetter, 100);     
 }, 1000);


 setTimeout(() => {


     const addLetter2 = () => {
        secondTitle.textContent += h2[numberh2];
         numberh2++;
         if (numberh2 === h2.length) clearInterval(indexTyping1);
     }
    const indexTyping1 = setInterval(addLetter2, 100);
    
 }, 2300);

 setTimeout(() => {
        cursor.textContent="|"
        const cursorAnimation = () => {

         cursor.classList.toggle('active');
     }
 
     setInterval(cursorAnimation, 400);
 }, 3500);


}

export const animationsOnUnMount = ()=>
{
    const title = document.querySelector(".welcomeProjects")
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    title.classList.add("rollWelcome")
    
    timeLine.to(".spanBck", {opacity:0, duration:0.2,ease: 'none',},"start")
    timeLine.to(".projectsHeader", {opacity:0,y:-100, duration:0.5,ease: 'none',},"start")
    timeLine.to(".projectBox", {opacity:0,y:-100, duration:0.5,dealy:0.3,ease: 'none'},"start")
    timeLine.to(".projectsContainer",{visibility:"hidden", duration:0,delay:0.35},"start")
    timeLine.to(".projectsPage",{height:0, delay:0.7,duration:1},"start")
}

export const animationsToProject = ()=>
{
    document.querySelector('body').style.overflow='hidden'
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    timeLine.to(".projectsHeader", {opacity:0,x:-100, duration:0.2},"start")
    timeLine.to(".projectsContainer",{opacity:0,x:-100, duration:0.2,delay:0.1},"start")
    timeLine.to(".spanBck", {opacity:0,y:50,delay:0.2, duration:0.1,},"start")
    timeLine.to(".projectsPage",{width:0, delay:0.4,duration:1},"start")
   
}

export const animationsOnBackMount = ()=>
{ 
    document.querySelector('body').style.overflow='visible'
    const title = document.querySelector(".welcomeProjects h1")
    const secondTitle = document.querySelector(".welcomeProjects h2")
    const cursor = document.querySelector('.welcomeProjects span')
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    title.textContent="CHECK OUT MY"
    secondTitle.textContent="PROJECTS"


    timeLine.from(".projectsPage",{width:0, delay:0.4,duration:1},"start")
    timeLine.from(".projectsHeader", {opacity:0,delay:1.1, duration:0.2},"start")
    timeLine.from(".projectsHeader h1", {opacity:0,x:-100,delay:1.1, duration:0.2},"start")
    timeLine.from(".projectsHeader h2", {opacity:0,x:-100,delay:1.1, duration:0.2},"start")
    timeLine.from(".projectsContainer",{opacity:0,x:-100, duration:0.2,delay:1.2},"start")
    timeLine.to(".projectsContainer",{visibility:"visible",delay:1.2},"start")
    timeLine.to(".projectBox",{opacity:1,duration:0.1,delay:1.2},"start")
    timeLine.from(".spanBck", {opacity:0,y:10,delay:1.5, duration:0.1,},"start")


    setTimeout(() => {
        cursor.textContent="|"
        const cursorAnimation = () => {

         cursor.classList.toggle('active');
     }
 
     setInterval(cursorAnimation, 400);
 }, 3500);

}
