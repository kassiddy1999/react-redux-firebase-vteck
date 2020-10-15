import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
// a higher order component that connects the redux store to the react application
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        // destructuring to get the projects
        const { projects } = this.props
        // console.log(this.props);
        return (
            <div className = "dashboard container">
                <div className = "row">
                    <div className = "col s12 m6">
                    <ProjectList projects = { projects }/>
                        <div className = "col s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

// map our state to props so the props can have access to the state
const mapStateToProps = (state) =>{
    return{
        projects: state.project.projects
    }
}

// 
export default connect(mapStateToProps)(Dashboard)
