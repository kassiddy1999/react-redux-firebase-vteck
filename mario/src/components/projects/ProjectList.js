import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    // if there is any project, then map through the projects
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={ project } key={ project.id } />
        )
      }
    )
  }  
    </div>
  )
}

export default ProjectList