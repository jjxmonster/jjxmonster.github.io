import { useEffect, useContext } from 'react'
import { AppContext } from '../context/context.js';
import DelayLink from 'react-delay-link';
import { animationsOnMount, animationsOnUnMount } from '../gsap/aboutPageAnimations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faPhp, faGitAlt, faDev } from '@fortawesome/free-brands-svg-icons'

import BackButton from './BackButton'

import '../styles/about.css'

import image from '../styles/images/me.jpg'


const AboutPage = () => {

    const { handleMoveChange } = useContext(AppContext)
    useEffect(() => {
        animationsOnMount()
        handleMoveChange()
    }, [])

    return (
        <div className="aboutPage">
            <div className="aboutHeader">
                <div className="aboutTitle aboutFlex">
                    <div className="welcome">
                        <div>  <h1></h1></div>
                        <div>
                            <h2></h2>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="aboutImage aboutFlex">
                    <div className="imageSpace">
                        <p className="imageText">yes, it's me!</p>
                        <img src={ image } alt="mejpg" />
                    </div>

                </div>
            </div>
            <div className="aboutContent ">
                <div className="aboutText aboutFlex">
                    <div className="textSpace">
                        <p id="top">I'm React Front-End Developer from Poland. I'm 18 yo and I learn Front-End since april 2018 and React since 2020.</p>
                        <p id="bottom">Besides coding, gym and computer games is my hobby, also i like reading books, I love The Witcher of Sapkowski.</p>
                    </div>
                </div>
                <div className="aboutSkills aboutFlex">
                    <div className="skillsTitle">
                        <h1>SKILLS</h1>
                    </div>
                    <div className="skills">
                        <div className="mainSkills">
                            <div><h2>MAIN</h2>
                            </div>
                            <ul>
                                <li className="beforeReact before">
                                    <p><FontAwesomeIcon className="skillsIcon" icon={ faReact } /></p>
                                </li>
                                <li className="beforeJs before">
                                    <p><FontAwesomeIcon className="skillsIcon" icon={ faJsSquare } /></p>
                                </li>
                                <li><p>Redux</p></li>
                                <li className="beforeCss before">
                                    <p><FontAwesomeIcon className="skillsIcon" icon={ faCss3Alt } /></p>
                                </li>
                            </ul></div>
                        <div className="otherSkills" >
                            <div><h2>OTHERS</h2>
                            </div>
                            <ul>
                                <li className="beforeCpp before">
                                    <p><FontAwesomeIcon className="skillsIcon" icon={ faDev } /></p>
                                </li>
                                <li className='beforeGsap before'><p>GSAP</p></li>
                                <li >
                                    <p className='beforeApi before'>API</p>
                                </li>
                                <li className="beforeGit before">
                                    <p><FontAwesomeIcon className="skillsIcon" icon={ faGitAlt } /></p>
                                </li>
                            </ul>
                        </div>
                        <div className="langSkills">
                            <div className="skillsTitle"><h2>LANGUAGES</h2>
                            </div>
                            <ul>
                                <li><p>Polish</p></li>
                                <li><p>English</p></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <DelayLink delay={ 1500 } to="/" replace={ false }>
                <BackButton onUnMountFunction={ animationsOnUnMount } />
            </DelayLink>
        </div >
    );
}

export default AboutPage;