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
  const [isUserMovingForward, setisUserMovingForward] = useState(false)
  const [isUserCheckProject, setisUserCheckProject] = useState(false)

  const handleChangeIsProjectChecked = () => {
    setisUserCheckProject(true)
  }
  const handleMoveChange = () => {
    setisUserMovingForward(true)
  }

  return (
    <Router>
      <div className="app">
        <AppContext.Provider value={
          {
            isUserMovingForward: isUserMovingForward,
            isUserCheckProject: isUserCheckProject,
            handleMoveChange: handleMoveChange,
            handleChangeIsProjectChecked: handleChangeIsProjectChecked,
          }
        }>
          <Switch>

            <Route path="/about" component={ () => <AboutPage changeUserMove={ handleMoveChange } /> } />
            <Route path="/projects" component={ () => <ProjectsPage isUserCheckProject={ isUserCheckProject } changeUserMove={ handleMoveChange } /> } />
            <Route path="/project/:name" component={ ProjectCheck } />
            <Route path="/contact" component={ Contact } />
            <Route path="/" component={ () => <Home isUserMovingForward={ isUserMovingForward } /> } />

          </Switch>
        </AppContext.Provider>
      </div >
    </Router>
  );

}







export default App

