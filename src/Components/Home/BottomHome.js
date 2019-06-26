import React from 'react';
import { withContext } from '../../ContextAPI/Context_HOC'
import profile from '../Slider/Media/home-photo.jpg'
import image from '../Slider/Media/profile-photo.jpg'
import github from '../Slider/Media/github.png'
import linkedin from '../Slider/Media/linkedin.png'
import '../Slider/Slider.css'

const BottomHome = (props) => {    
    return (
        <div className={`${props.context.isAtBottom ? 'bottom' : 'top'} ${props.context.moveDirection === 'up' ? 'up-fast' : ''} home-lower`}>
            <div className={`up-arrows zoom ${!props.context.isAtBottom && 'invisible'}`} onClick={() => props.context.methods.toggleBottomStatus()}>
                <svg className="arrows">
                    <path d="M0 30 L30 0 L60 30"></path>
                    <path d="M0 50 L30 20 L60 50"></path>
                </svg>
            </div>
            <div className='short-profile'>
                <figure>
                    <img src={image} alt="Profile"/>
                </figure>
                <div className="profile-text">
                    <h1>MICHAEL KERR</h1>
                    <h2>WEB DEVELOPER</h2>
                    <div className="profile-icons">
                        <a href='https://github.com/Olafaloofian' target="_blank" rel="noopener noreferrer"><img className='zoom' src={github} alt=""/></a>
                        <a href='https://www.linkedin.com/in/michaelmkerr/' target="_blank" rel="noopener noreferrer"><img className='zoom' src={linkedin} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className={`horizontal-divider ${props.context.isAtBottom && 'animate-length'}`}></div>
            <div className="about-lower">
                <div className="info-panel">
                    <h3>Philosophy</h3>
                    <p>There is no feeling more <span>intensely pure</span> than crafting the <span>perfect solution</span> to a problem. <span>Innovation</span> and <span>discovery</span> are essential pieces of any <span>revolutionary change</span>, on whatever the scale that change may be. <span>Uniqueness</span> should not be sacrificed in favor of practicality or efficiency until an <span>honest</span> attempt is made. A <span>forward-facing focus</span> on success ensures <span>unrivaled accomplishment</span>.</p>
                </div>
                <div className={`vertical-divider ${props.context.isAtBottom && 'animate-height'}`}></div>
                <div className="info-panel">
                    <h3>About</h3>
                    <p>From a young age, I've always felt a calling to <span>create</span> and <span>explore</span>. These internal forces combined with a mindset of <span>thoughtful precision</span> eventually led me to programming. Currently, I work as a <span>software engineer</span> for worldwide company Cubic. Our small team performs <span>web development</span> from a remote position in Arizona. With every day that passes, I'm trying to <span>improve</span> the world through my <span>ideas</span> and <span>code</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default withContext(BottomHome);