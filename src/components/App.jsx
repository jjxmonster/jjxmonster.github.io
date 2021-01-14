import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { AppContext, defaultObject } from '../context/context.js';

import Home from './Home'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import Contact from './Contact'
import ProjectCheck from './ProjectCheck'

import '../styles/App.css';
import { useState } from "react";



const App = () => {
  const [isUserMovingForward, setisUserMovingForward] = useState(defaultObject.isUserMovingForward)
  const [isUserCheckProject, setisUserCheckProject] = useState(defaultObject.isUserCheckProject)

  const handleChangeIsProjectChecked = () => {
    setisUserCheckProject(true)
  }
  const handleMoveChange = () => {
    setisUserMovingForward(true)
  }
  const handleSetDefaultisProjectChecked = () => {
    setisUserCheckProject(false)
  }

  return (
    <Router basename={ process.env.PUBLIC_URL } >
      <div className="app">
        <AppContext.Provider value={
          {
            isUserMovingForward,
            isUserCheckProject,
            handleMoveChange,
            handleChangeIsProjectChecked,
            handleSetDefaultisProjectChecked,
          }
        }>
          <Switch>
            <Route path="/about" component={ () => <AboutPage /> } />
            <Route path="/projects" component={ () => <ProjectsPage /> } />
            <Route path="/project/:name" component={ ProjectCheck } />
            <Route path="/contact" component={ Contact } />
            <Route path="/" component={ () => <Home /> } />
          </Switch>

        </AppContext.Provider >
      </div >
    </Router >
  );

}



const RootApp = () => {
  return (
    <App />
  );
}

export default RootApp






