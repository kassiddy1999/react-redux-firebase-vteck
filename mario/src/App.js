import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import React, { Component } from 'react'

export default class App extends Component {
  // the BrowserRouter ensures that you navigate to a particular link without refreshing the page
  // the switch ensures that only one link is loaded at a time
  render() {
    return (
      <BrowserRouter>
          <div className = "App">
              <Navbar />
              <switch>
                  <Route exact path = '/' component = { Dashboard } />
                  <Route path = '/project/:id' component = { ProjectDetails } />
                  <Route path = '/signin' component = { SignIn } />
                  <Route path = '/signup' component = { SignUp } />
                  <Route path = '/create' component = { CreateProject } />
              </switch>
          </div>
      </BrowserRouter>
    )
  }
}
