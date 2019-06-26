import React, {Component} from 'react'
import './Projects.css'
import PictureSlider from './PictureSlider'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class IndividualProduct extends Component {
    state = {
        selected: false
    }

    toggleSelected = () => {
        this.setState(prevState => (
            {selected: !prevState.selected}
        ))
    }
    
    render () {
        const { project } = this.props
        const { selected } = this.state
        const picDivs = project.images.map((image, index) => {
            return (
                <div className='carousel-image' key={index}>
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
                        {project.github &&
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <button className="link">
                                View on GitHub
                            </button>
                        </a>
                        }
                    </div>
                    <div className="project-description">
                        {project.description}
                    </div>
                    <div className='expandable' onClick={() => this.toggleSelected()}>
                        <div className={`arrow ${selected && 'rotate'}`}>▼</div>
                        {selected && 
                            <div className="technologies">
                                <div className="technologies-header">
                                    Featured Technologies
                                </div>
                                <div className="technologies-container">
                                    {project.technologies.map((tech, index) => {
                                        return (
                                            <div className='tech' key={index}>
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
    }
}