import gsap from 'gsap'



export const hoverEffects = ()=>
{
    const space = document.querySelector(".menuSpace p")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const icons = document.querySelectorAll(".icon")

    const texts = ["PROJECTS", "ABOUT ME", "CONTACT", "SOCIAL"]
    icons.forEach((item, id) => {
        item.addEventListener("mouseover", () => {
            box1.classList.add("white")
            box2.classList.add("white")
            space.classList.add("animationInfo")
            space.textContent = texts[id]
            

        })
        item.addEventListener("mouseout", () => {
            box1.classList.remove("white")
            box2.classList.remove("white")
            space.textContent = ""
        })
    })
}
export const animationsOnMount = () => {

const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })
const icons = document.querySelectorAll(".icon")


    timeLine.add("start",)
    timeLine.from(".header", { y:100,opacity:0,duration:0.7,delay:0.1 }, "start")
    timeLine.from(".box1", { translateX: "-50vw", duration: 1, opacity: 0 }, "start")
    timeLine.from(".box2", { translateX: "50vw", duration: 1, opacity: 0 }, "start")
    timeLine.to(".box1", { rotate: 45, delay: 1, duration: 0.5 }, "start")
    timeLine.to(".box2", { rotate: -45, delay: 1, duration: 0.5 }, "start")
    timeLine.to(".box1", { width: "95%", borderRadius: "50px", delay: 1.5 }, "start")
    timeLine.to(".box2", { width: "95%", borderRadius: "50px", delay: 1.5 }, "start")
    icons.forEach(item =>{
        timeLine.to(item, { visibility:"visible",opacity:1,duration:0.5,delay:1.8 },"start")
    })
}

export const animationsOnNextMount = ()=>
{
    const icons = document.querySelectorAll(".icon")
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    timeLine.to(".box1",{rotate:45,width:"1px", height:"1px", duration:0})
    timeLine.to(".box2",{rotate:-45, width:"1px", height:"1px", duration:0})
    timeLine.from(".header", { y:-100,opacity:0,duration:0.7 }, "start")
    timeLine.to(".box1", { width: "95%",height:"8vh", borderRadius: "50px",duration:0.8 }, "start")
    timeLine.to(".box2", { width: "95%",height:"8vh", borderRadius: "50px",duration:0.8}, "start")
    icons.forEach(item =>{
        timeLine.to(item, { visibility:"visible",opacity:1,delay:0.5},"start")
    })

}

export const animationsOnUnMount = () => {

    const space = document.querySelector(".menuSpace p")
    const icons = document.querySelectorAll(".icon")
    space.style.visibility = "hidden"
    

    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })
 
    timeLine.add("start",)
    
    icons.forEach(item =>{
        timeLine.to(item, {  opacity:0,duration:0.2 },"start")
    })
    timeLine.to(".box1", { width:"0px", height:"0px",duration:0.3 }, "start")
    timeLine.to(".box2", { width:"0px", height:"0px",duration:0.3 }, "start")
    timeLine.to(".header", { y:-100,opacity:0,duration:0.3 }, "start")
   
}

export const showSocialIcons = ()=>{
    const icons = document.querySelectorAll(".icon")
    const timeLine = gsap.timeline({ defaults: { ease: 'power1.ease' } })

    timeLine.to(".box1", { rotate:0, duration:0.5}, "start")
    timeLine.to(".box2", {rotate:0 , duration: 0.5 }, "start")
    timeLine.to(".menuSpace", {visibility:'hidden' , duration: 0.1 }, "start")
    icons.forEach(item =>{
        timeLine.to(item, { visibility:"hidden",opacity:0,duration:0.2 },"start")
    })
   
        timeLine.to(".box2", {backgroundColor:"white", duration: 0.2,delay:0.5 }, "start")
   
}

export const hideSocialIcons = ()=>{
    const icons = document.querySelectorAll(".icon")
    const timeLine = gsap.timeline({ defaults: { ease: 'power1.ease' } })

    timeLine.to(".box1", { rotate:45, duration:0.5}, "start")
    timeLine.to(".box2", {rotate:-45 , duration: 0.5 }, "start")
    timeLine.to(".menuSpace", {visibility:'visible' , duration: 0.1 }, "start")
    timeLine.to(".box2", {backgroundColor:"", duration: 0.2, }, "start")
    icons.forEach(item =>{
        timeLine.to(item, { visibility:"visible",opacity:1,duration:0.1 },"start")
    })
   
        
   
}
