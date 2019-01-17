import React, { Component } from 'react';
import { withContext } from '../../ContextAPI/Context_HOC';
import '../Slider/Slider.css'
import name from '../Slider/Media/MK-Logo.png'
import { TimelineLite } from 'gsap'

const skills = ['Redux', 'JavaScript', 'CSS', 'Context API', 'Node', 'Express', 'PostgreSQL', 'Cypress', 'Enzyme', 'Jest', 'Chai','SASS', 'Git', 'Redis', 'React', 'AWS', 'Socket.io']

class TopHome extends Component {
    constructor() {
        super()
        this.state = {
            skills: 'React'
        }
        this.element = null
        this.myTween = new TimelineLite({paused: true})
    }

    componentDidMount() {
        this.myTween.set(this.element, { autoAlpha: 0 })
        .to(this.element, 0.8, { autoAlpha: 1 })
        .to(this.element, 0.4, { autoAlpha: 1 })
        .to(this.element, 0.8, { autoAlpha: 0 })
        this.myTween.play()
        this.skillFade = setInterval(() => { this.myTween.restart(); this.switchSkill() }, 2000)
    }

    switchSkill = () => {
        let index = skills.indexOf(this.state.skills)
        skills.length === index + 1 ?
            this.setState({skills: skills[0]})
        :
            this.setState({skills: skills[index + 1]})
    }

    componentWillUnmount() {
        clearInterval(this.skillFade)
    }

    render() {
        return (
            <div className={`${this.props.context.isAtBottom ? 'bottom' : 'top'}  ${this.props.context.moveDirection} ${this.props.context.moveDirection === 'up' ? 'up-fast' : ''} home-upper`}>
                <div className="flex-container">
                    <div className='title-text'>
                        <img src={name} alt="Name"/> 
                    </div>
                </div>
                <div className='flex-container flex-center'>
                    <div className="statement-card">
                        <div ref={ thisDiv => this.element = thisDiv }>
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
        );
    }
}

export default withContext(TopHome)