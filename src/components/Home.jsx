import { useEffect, useContext, useState } from 'react';
import DelayLink from 'react-delay-link';
import { AppContext } from '../context/context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faUser, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import '../styles/home.css'
import { animationsOnMount, animationsOnNextMount, animationsOnUnMount, hoverEffects, showSocialIcons, hideSocialIcons } from '../gsap/homePageBoxesAnimations.js'
import SocialIcons from './SocialIcons';


const Home = () => {
    const { isUserMovingForward, handleSetDefaultisProjectChecked } = useContext(AppContext)
    const [mountSocialIcons, setMountSocialIcons] = useState(false)

    const handleMountSocialIcons = () => {
        showSocialIcons()
        setTimeout(() => {
            setMountSocialIcons(true)
        }, 500);
    }

    const handleUnMountSocialIcons = () => {
        hideSocialIcons()
        setMountSocialIcons(false)
    }


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

                    <FontAwesomeIcon className="icon4 icon" onClick={ handleMountSocialIcons } icon={ faEllipsisH } />


                    <div className="menuSpace"><p></p></div>
                    <div className="box1"></div>
                    <div className="box2">{ mountSocialIcons ? <SocialIcons handleUnMountSocialIcons={ handleUnMountSocialIcons } /> : null }</div>

                </div>

            </div>
            <footer>&copy; Copyright 2020 by Jakub Tarabasz. All Rights Reserved.</footer>
        </div >


    );
}



export default Home;

