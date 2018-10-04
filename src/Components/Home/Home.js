import React, { Component } from 'react';
import './Home.css'
import profile from './Media/home-photo.jpg'
import withStars from '../Tilt/TiltStar_HOC'
import { withContext } from '../../ContextAPI/Context_HOC'
import Articles from '../Articles/Articles';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const skills = ['React', 'Redux', 'JavaScript', 'CSS', 'Context API', 'Node', 'Express', 'PostgreSQL', 'Cypress', 'Enzyme', 'Jest', 'Chai','SASS', 'Git', 'Redis']

class Home extends Component {
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
                    <div className={`${this.props.context.isAtBottom ? 'bottom' : 'top'} ${this.props.context.moveDirection} home-upper`}>
                        <div className="flex-container">
                            <div className='title-text'>
                                Michael Kerr
                                <div className="subtitle-text">
                                    Full Stack Web Developer
                                </div>
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

                <div className={`${this.props.context.isAtBottom ? 'bottom' : 'top'} home-lower`}>
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
                        Michael Kerr
                    </div>
                    <div className="philosophy">
                        <h3>Philosophy</h3>
                        Innovation and creation are the at the center of my every action. Nothing makes me happier than working on completely unique ways to solve a problem, and the feeling of success I achieve after completing an unprecedented project is the driving force in my life. I maintain a forward-facing focus, always thinking about the next steps I have to take to get where I want to go.
                    </div>
                    <div className="about">
                        <h3>About</h3>
                        After trying my hand at several different jobs, I decided to change direction and learn how to code. From the moment I wrote my first JavaScript function, I knew that I had made a good choice. I got into a programming school and learned all the ins and outs of full stack web development - including React, Node, and SQL. I’m ready to charge into the future, armed with my newly found skills and deep passion for coding.
                    </div>
                </div>
            </div>
        );
    }
}

export default withContext(withStars(Home))