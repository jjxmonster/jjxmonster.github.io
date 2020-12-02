import gsap from 'gsap'

export const animationsOnMount = ()=>
{
 document.querySelector('body').style.overflow="hidden"

 const form = document.querySelector(".contactForm form").childNodes
 const title = document.querySelector(".welcomeContact h1")
 const secondTitle = document.querySelector(".welcomeContact h2")
 const cursor = document.querySelector(".welcomeContact span")

 const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

 timeLine.from(".contactPage", { height:0, duration:1} ,"start")
 timeLine.from(".spanBck",{opacity:0, y:10, delay:4.5, duration:0.1},"start")
 timeLine.from(".contactText",{opacity:0, y:100, delay:3.8, duration:0.5},"start")

 form.forEach((item, id)=>{
    timeLine.from(item,{opacity:0,y:100, delay:`4.${id}`, duration:0.5},"start")
 })
 

 let number = 0;
 let numberh2 = 0;
 const texth1 = "IF YOU WANT"
 const h2 = "CONTACT ME"

 setTimeout(() => {

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
    
 }, 2200);

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
    console.log("out")
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    timeLine.to(".spanBck", {opacity:0, duration:0.2,ease: 'none',},"start")
    timeLine.to(".contactHeader", {y:-100,opacity:0, duration:0.5} ,"start")
    timeLine.to(".contactWrapper", {y:-100,opacity:0,delay:0.2, duration:0.5} ,"start")
    timeLine.to(".contactPage", { height:0,delay:0.7, duration:1} ,"start")
     document.querySelector('body').style.overflow="visible"
}
