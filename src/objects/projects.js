import weatherApp from '../styles/images/weatherapp.jpg'
import weatherApp2 from '../styles/images/weatherapp2.jpg'
import weatherApp3 from '../styles/images/weatherapp3.jpg'
import weatherApp4 from '../styles/images/weatherapp4.jpg'
import redifire from '../styles/images/redfire.jpg'
import redifire1 from '../styles/images/redfire1.jpg'
import redifire2 from '../styles/images/redfire2.jpg'
import note1 from '../styles/images/note1.jpg'
import note2 from '../styles/images/note2.jpg'
import note3 from '../styles/images/note3.jpg'
import todoapp from '../styles/images/todoapp.jpg'


export const projects = [
{
    id:1, 
    name:"Weather App",
    linkName:"weatherapp",
    images:[weatherApp,weatherApp2,weatherApp3,weatherApp4],
    description:"React application using free weather API, gets with fetch(). With smooth animations using GSAP. User is able to know the current temperature, humadity, pressure and wind speed.",
    technology:"React, React Hooks, GSAP, CSS, API",
    github:"https://github.com/jjxmonster/React-Weather-App"
},
{
    id:2, 
    name:"REDFIRE",
    linkName:"redfire",
    images:[redifire,redifire1, redifire2],
    description:"React application with user and tournaments database about CS:GO tournaments. With login and register and of course user panel. Back-end made by Alan Adamczyk.",
    technology:"React, JavaScript, GSAP, CSS, API, JSON",
    github:""
},
{
    id:3, 
    name:"Note",
    linkName:"note",
    images:[note1,note2,note3],
    description:"React application using Redux when user can add notes, check them out and edit. Project is Single Page Application.",
    technology:"React, Redux, Styled Components,",
    github:""
},
{
    id:4, 
    name:"To Do App",
    linkName:"todoapp",
    images:[todoapp],
    description:"Very simple React To do App, where user can give date untill he want to do some taks and check when it's important and it's will have red color. When user done some task, he will see it in list in bottom.",
    technology:"React, JavaScript, CSS",
    github:""
},

]
