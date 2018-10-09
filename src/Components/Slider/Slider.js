import React, { Component } from 'react';
import './Slider.css'
import profile from './Media/home-photo.jpg'
import github from './Media/github.png'
import linkedin from './Media/linkedin.png'
import withStars from '../Tilt/TiltStar_HOC'
import { withContext } from '../../ContextAPI/Context_HOC'
import Articles from '../Articles/Articles';
import Projects from '../Projects/Projects';
import name from './Media/MK-Logo.png'
import Contact from '../Contact/Contact';

const skills = ['React', 'Redux', 'JavaScript', 'CSS', 'Context API', 'Node', 'Express', 'PostgreSQL', 'Cypress', 'Enzyme', 'Jest', 'Chai','SASS', 'Git', 'Redis']

class Slider extends Component {
    state = {
        skills: 'React',
        topOrBottom: '',
        upArrowTransition: 'invisible',
        downArrowTransition: ''
    }

    componentDidMount() {
        this.skillSwitch = setInterval(this.switchSkill, 2500)
    }

    switchSkill = () => {
        let index = skills.indexOf(this.state.skills)
        skills.length === index + 1 ?
            this.setState({skills: skills[0]})
        :
            this.setState({skills: skills[index + 1]})
    }

    componentWillUnmount() {
        clearInterval(this.skillSwitch)
    }

    render() {
        console.log('------------ this.props', this.props)
        return (
            <div className='home-container'>

                <div className="top-half">
                    <div className={`${this.props.context.isAtBottom ? 'bottom' : 'top'}  ${this.props.context.moveDirection} ${this.props.context.moveDirection === 'up' ? 'up-fast' : ''} home-upper`}>
                        <div className="flex-container">
                            <div className='title-text'>
                                <img src={name} alt="Name"/> 
                            </div>
                        </div>
                        <div className='flex-container flex-center'>
                            <div className="statement-card">
                                <div className='text'>
                                    {this.state.skills}
                                </div>
                            </div>
                        </div>
                        <div className="flex-container flex-bottom-center">
                            <div className={`front zoom down-arrows ${this.props.context.isAtBottom && 'invisible'}`} onClick={() => this.props.context.methods.toggleBottomStatus()}>
                                <div>
                                    Click for More
                                </div>
                                <svg className="arrows">
                                    <path d="M0 20 L30 52 L60 20"></path>
                                    <path d="M0 40 L30 72 L60 40"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={`component-container ${this.props.context.moveDirection}`}>
                        {this.props.context.activeComponent === 'articles' && 
                            <Articles />
                        }
                        {this.props.context.activeComponent === 'projects' && 
                            <Projects />
                        }
                        {this.props.context.activeComponent === 'contact' && 
                            <Contact />
                        }
                    </div>
                </div>

                <div className={`${this.props.context.isAtBottom ? 'bottom' : 'top'} ${this.props.context.moveDirection === 'up' ? 'up-fast' : ''} home-lower`}>
                    <div className={`up-arrows zoom ${!this.props.context.isAtBottom && 'invisible'}`} onClick={() => this.props.context.methods.toggleBottomStatus()}>
                        <svg className="arrows">
                            <path d="M0 30 L30 0 L60 30"></path>
                            <path d="M0 50 L30 20 L60 50"></path>
                        </svg>
                    </div>
                    <div className='short-profile'>
                        <figure>
                            <img src={profile} alt="Profile"/>
                        </figure>
                        <div className="profile-text">
                            <h1>MICHAEL KERR</h1>
                            <h2>WEB DEVELOPER</h2>
                            <div className="profile-icons">
                                <a href='https://github.com/Olafaloofian' target="_blank"><img className='zoom' src={github} alt=""/></a>
                                <a href='https://www.linkedin.com/in/michaelmkerr/' target="_blank"><img className='zoom' src={linkedin} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className={`horizontal-divider ${this.props.context.isAtBottom && 'animate-length'}`}></div>
                    <div className="about-lower">
                        <div className="info-panel">
                            <h3>Philosophy</h3>
                            <p><span>Innovation</span> and <span>creation</span> are the at the center of my every action. Nothing makes me happier than working on completely <span>unique</span> ways to solve a problem, and the feeling of <span>success</span> I achieve after completing an unprecedented project is the driving force in my life. I maintain a forward-facing <span>focus</span>, always thinking about the next steps I have to take to get where I want to go.</p>
                        </div>
                        <div className={`vertical-divider ${this.props.context.isAtBottom && 'animate-height'}`}></div>
                        <div className="info-panel">
                            <h3>About</h3>
                            <p>After trying my hand at several different jobs, I decided to change direction and learn how to <span>code</span>. From the moment I wrote my first <span>JavaScript</span> function, I knew that I had made a good choice. I entered a programming school and learned all the ins and outs of <span>full stack web development</span> - including React, Node, and SQL. I’m ready to charge into the <span>future</span>, armed with my newly found skills and deep <span>passion</span> for coding.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withContext(withStars(Slider))