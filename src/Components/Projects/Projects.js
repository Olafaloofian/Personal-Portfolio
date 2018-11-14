import React, { Component } from 'react';
import './Projects.css'
import { withContext } from '../../ContextAPI/Context_HOC'
import ProjectList from './Projects_List'
import PictureSlider from './PictureSlider'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Projects extends Component {
    state = {
        selectedProject: -1
    }

    setSelected = (id) => {
        this.state.selectedProject === id ?
            this.setState({ selectedProject: -1 })
        :
            this.setState({ selectedProject: id })
    }

    render() {
        // console.log('state', this.state)
        return (
            <div className={`projects-container ${this.props.context.fadeEffect}`}>
                <div className="projects-header">
                    <div className='title'>PROJECTS</div>
                    <h2>MICHAEL KERR</h2>
                    <span>WEB DEVELOPER</span>
                </div>

                <div className="projects-body">
                    {ProjectList.map(project => {
                        console.log('project', project)
                        const picDivs = project.images.map(image => {
                            return (
                                <div className='carousel-image' >
                                    <img src={require(`./Media/${image}`)} alt='' />
                                </div>
                            )
                        })
                        return (
                        <div className='project'>
                            <div className={`carousel-box ${project.imageSize === 'large' && 'large'}`}>
                                <PictureSlider pictures={picDivs} />
                            </div>
                            <div className="project-info">
                                <div className="project-title">
                                    {project.name}
                                </div>
                                <div className="buttons">
                                    {project.link && 
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button className='link'>
                                            Go to Live Project
                                        </button>
                                    </a>}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <button className="link">
                                            View on GitHub
                                        </button>
                                    </a>
                                </div>
                                <div className="project-description">
                                    {project.description}
                                </div>
                                <div className='expandable' onClick={() => this.setSelected(project.id)}>
                                    <div className={`arrow ${this.state.selectedProject === project.id && 'rotate'}`}>▼</div>
                                    {this.state.selectedProject === project.id && 
                                        <div className="technologies">
                                            <div className="technologies-header">
                                                Featured Technologies
                                            </div>
                                            <div className="technologies-container">
                                                {project.technologies.map(tech => {
                                                    return (
                                                        <div className='tech'>
                                                            {tech}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    }
                                </div> 
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withContext(Projects)