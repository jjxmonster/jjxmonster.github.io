import gsap from 'gsap'

export const AnimationsOnMount = ()=>
{   
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    timeLine.from(".projectPage", { width:0, duration:1 }, "start")
    timeLine.from(".projectHeader h1", { y:-100,opacity:0,scale:0.5,duration:0.5,delay:1.1 }, "start")
    timeLine.from(".aboutProject", {opacity:0,x:50 ,delay:1.5}, "start")
    timeLine.from(".sliderWrapper", {opacity:0,x:50 ,delay:2}, "start")

    setTimeout(() => {
        document.querySelector('body').style.overflow='visible'
    }, 500);
}

export const AnimationsOnUnMount = ()=>
{
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })
    document.querySelector('body').style.overflow='hidden'
  
    timeLine.to(".backToProjects", {y:50,opacity:0,duration:0.2,},'start')
    timeLine.to(".projectHeader h1", { x:100,opacity:0,duration:0.2 }, "start")
    timeLine.to(".aboutProject", {opacity:0,x:100,duration:0.2 }, "start")
    timeLine.to(".sliderWrapper", {opacity:0,x:100,duration:0.2 }, "start")
    timeLine.to(".projectPage", { width:'0%', duration:0.7,delay:0.5,padding:"0" }, "start")
    
}