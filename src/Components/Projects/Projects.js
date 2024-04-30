import React from 'react';
import './Projects.css'
import { withContext } from '../../ContextAPI/Context_HOC'
import ProjectList from './Projects_List'
import IndividualProject from './IndividualProject'

function Projects(props) {
    // console.log('state', this.state)
    return (
        <div className={`projects-container ${props.context.fadeEffect}`}>
            <div className="projects-header">
                <div className='title'>PROJECTS</div>
                <div style={{height: 30}}></div>
                <h2>MICHAEL KERR</h2>
                <span>SOFTWARE ENGINEER</span>
            </div>

            <div className="projects-body">
                {ProjectList.map(project => <IndividualProject project={project} key={project.id} />
                )}
            </div>
        </div>
    );
}

export default withContext(Projects)