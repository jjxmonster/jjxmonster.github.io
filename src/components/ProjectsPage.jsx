import { useEffect, useState } from 'react';
import DelayLink from 'react-delay-link';
import { animationsOnMount, animationsOnUnMount, animationsToProject } from '../gsap/projectsPageAnimations'

import BackButton from './BackButton'
import { projects } from '../objects/projects'

import '../styles/projects.css'

const ProjectsPage = ({ changeUserMove, isUserCheckProject }) => {


    useEffect(() => {
        animationsOnMount()
        changeUserMove()
        console.log(isUserCheckProject)
    }, [])

    return (
        <>
            <div className="projectsPage">
                <div className="projectsHeader">
                    <div className="welcomeProjects">
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            <h2></h2>
                            <span></span>
                        </div>
                    </div>

                </div>
                <div className="projectsContainer">
                    { projects.map(item => <div className="projectBox" key={ item.id }>
                        <img src={ item.images[0] } alt={ item.name } />
                        <DelayLink delay={ 1000 } to={ `/project/${item.linkName}` } replace={ false }>
                            <div onClick={ animationsToProject } className="projectContent">
                                <h3>{ item.name.toUpperCase() }</h3>
                            </div>
                        </DelayLink>
                    </div>) }
                </div>

                <DelayLink delay={ 1500 } to="/" replace={ false }>
                    <BackButton onUnMountFunction={ animationsOnUnMount } />
                </DelayLink>
            </div>

        </>
    );
}

export default ProjectsPage;