import React, { Component } from 'react';
import { withContext } from '../../ContextAPI/Context_HOC';
import '../Slider/Slider.css'
import name from '../Slider/Media/MK-Logo.png'

const skills = ['Redux', 'JavaScript', 'CSS', 'Context API', 'Node', 'Express', 'PostgreSQL', 'Cypress', 'Enzyme', 'Jest', 'Chai','SASS', 'Git', 'Redis', 'React']

class TopHome extends Component {
    state = {
        skills: 'React',
        transitionClass: '',
    }

    componentDidMount() {
        this.skillSwitch = setInterval(this.switchSkill, 2500)
    }

    switchSkill = () => {
        let index = skills.indexOf(this.state.skills)
        skills.length === index + 1 ?
            this.setState({skills: skills[0], transitionClass: 'text'})
        :
            this.setState({skills: skills[index + 1]})
    }

    componentWillUnmount() {
        clearInterval(this.skillSwitch)
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
                        <div className={this.state.transitionClass}>
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