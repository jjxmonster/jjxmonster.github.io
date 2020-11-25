import React, { useEffect } from 'react';
import { projects } from '../objects/projects'
import { AnimationsOnMount } from '../gsap/projectCheckAnimations'
import { AppContext } from '../context/context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import Slider from './Slider'

import '../styles/projectPage.css'





const ProjectCheck = ({ match }) => {

    useEffect(() => {
        AnimationsOnMount()
    })

    const filterProjects = projects.filter(item => item.linkName === match.params.name)
    const currentProject = filterProjects[0]

    return (
        <>
            <AppContext.Consumer>
                { ({ handleChangeIsProjectChecked }) => {
                    handleChangeIsProjectChecked()
                } }
            </AppContext.Consumer>

            <div className="projectPage">
                <div className="projectHeader">
                    <h1>{ currentProject.name }</h1>
                </div>
                <div className="projectWrapper">
                    <div className="aboutProject">
                        <p>{ currentProject.description }</p>
                        <div className="technologies">
                            <p><span>SKILLS = &#91;  </span>{ currentProject.technology } <span>&#93;</span></p>
                        </div>
                    </div>
                    <div className="sliderWrapper">
                        <Slider images={ currentProject.images } />
                    </div>
                </div>
                <div className="projectButtons">
                    <span className="backToProjects"><FontAwesomeIcon icon={ faAngleLeft } id='projectsBackIcon' />PROJECTS</span>

                </div>

            </div>
        </>
    );
}

export default ProjectCheck;