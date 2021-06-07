import gsap from 'gsap'
 

export const animationsOnMount = ()=>
{
   
  
    const app = document.querySelector('.app')
    const h1Abt = document.querySelector('.welcome div h1')
    const h2Abt = document.querySelector('.welcome div h2')
    const cursor = document.querySelector(".welcome div span")
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })
    
   
    app.style=" overflow: visible"
    timeLine.from(".aboutPage", { height:0, duration:1} ,"start")
    timeLine.to(".aboutHeader", { visibility:'visible',delay:0.5} ,"start")
    timeLine.to(".aboutContent", { visibility:'visible',delay:0.5} ,"start")
    timeLine.from(".imageSpace", {delay:4.5, y:-100,opacity:0, duration:0.5}, "start")
    timeLine.from( ".textSpace #top", {x:-50,opacity:0,delay:4.5, duration:0.3},"start")
    timeLine.from(".textSpace #bottom" , {x:-50,opacity:0,delay:4.7, duration:0.3},"start")
    timeLine.from(".skillsTitle h1",{y:50,opacity:0, delay:5, duration:0.5},"start")
    timeLine.from(".mainSkills",{opacity:0, y:-100, delay:5, duration:0.5},"start")
    timeLine.from(".otherSkills",{opacity:0, y:-100, delay:5.2, duration:0.5},"start")
    timeLine.from(".langSkills",{opacity:0, y:-100, delay:5.4, duration:0.5},"start")
    timeLine.from(".spanBck",{opacity:0, y:10, delay:5.4, duration:0.2},"start")
    
    let number = 0;
    let numberh2 = 0;
    const texth1 = "HELLO, MY NAME IS"
    const name = "JAKUB"
    
    setTimeout(() => {
        const addLetter = () => {

            h1Abt.textContent += texth1[number];
            number++;
            if (number === texth1.length) clearInterval(indexTyping);
        }
      
        const indexTyping = setInterval(addLetter, 100);     
    }, 1000);
   

    setTimeout(() => {


        const addLetter2 = () => {
            h2Abt.textContent += name[numberh2];
            numberh2++;
            if (numberh2 === name.length) clearInterval(indexTyping1);
        }
       const indexTyping1 = setInterval(addLetter2, 100);
       
    }, 2750);

    setTimeout(() => {
           cursor.textContent="|"
           const cursorAnimation = () => {

            cursor.classList.toggle('active');
        }
    
        setInterval(cursorAnimation, 400);
    }, 4000);

    
   

    if(window.innerWidth<1200){
        timeLine.fromTo(".aboutPage", { height:0, duration:1},{height:"200%"} ,"start")
}
}

export const animationsOnUnMount = ()=>{
 
    const app = document.querySelector('.app')
    const welcome = document.querySelector(".welcome")
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    app.style=" overflow: hidden"
    welcome.classList.add("rollWelcome")
    
    timeLine.to(".spanBck", {opacity:0, duration:0.2}, "start")
    timeLine.to(".aboutHeader", {y:-100,opacity:0, duration:0.5}, "start")
    timeLine.to(".aboutContent", {y:-100,opacity:0,delay:0.3, duration:0.5}, "start")
    timeLine.to(".mainSkills",{opacity:0, y:-100, duration:0.5},"start")
    timeLine.to(".otherSkills",{opacity:0, y:-100, delay:.2, duration:0.5},"start")
    timeLine.to(".langSkills",{opacity:0, y:-100, delay:.4, duration:0.5},"start")
    timeLine.to(".aboutPage",{height:0, delay:0.7,duration:1},"start")
}
