import React from 'react';
// the props add some properties which you can access
export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
            <div className = "card-content">
            <span className = "card-title">Project Title - { id } </span>
            <p>Lorem ipsum dolor sit amet conectaur adipsicing elit . amperntaur copui. This is my house. welcoume to my house</p>
            </div>
               <div className = "card-action grey-text">
                    <div>Posted by Vteck Corporations</div>
                    <div>10th June, 10am</div>
               </div> 
            </div>
        </div>
    )
}
