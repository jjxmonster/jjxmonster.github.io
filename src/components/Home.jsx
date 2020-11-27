import { useEffect, useContext } from 'react';
import DelayLink from 'react-delay-link';
import { AppContext } from '../context/context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faUser, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


import '../styles/home.css'
import { animationsOnMount, animationsOnNextMount, animationsOnUnMount, hoverEffects } from '../gsap/homePageBoxesAnimations.js'


const Home = () => {
    const { isUserMovingForward, handleSetDefaultisProjectChecked } = useContext(AppContext)

    useEffect(() => {
        { isUserMovingForward ? animationsOnNextMount() : animationsOnMount() }
        hoverEffects()
        handleSetDefaultisProjectChecked()
    }, [])

    return (
        <div className="homePage">
            <div className="header">
                <h1>Jakub Tarabasz</h1 >
                <p>Front-End React Developer</p>

            </div>
            <div className="main">
                <div className="menu">

                    <DelayLink delay={ 1000 } to="/projects" replace={ false }>
                        <FontAwesomeIcon onClick={ animationsOnUnMount } className="icon1 icon" icon={ faProjectDiagram } />
                    </DelayLink>
                    <DelayLink delay={ 1000 } to="/about" replace={ false }>
                        <FontAwesomeIcon onClick={ animationsOnUnMount } className="icon2 icon" icon={ faUser } />
                    </DelayLink>
                    <DelayLink delay={ 1000 } to="/contact" replace={ false }>
                        <FontAwesomeIcon onClick={ animationsOnUnMount } className="icon3 icon" icon={ faEnvelope } />
                    </DelayLink>
                    <DelayLink delay={ 1000 } to="/social" replace={ false }>
                        <FontAwesomeIcon className="icon4 icon" icon={ faEllipsisH } />
                    </DelayLink>

                    <div className="menuSpace"><p></p></div>
                    <div className="box1"></div>
                    <div className="box2"></div>

                </div>

            </div>

        </div >


    );
}



export default Home;

