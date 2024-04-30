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
                    <h2>SOFTWARE ENGINEER</h2>
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
                    <p>Crafting custom <span>solutions</span> unlocks a special <span>nirvana</span> for me. I love <span>collaborating</span> with people in this same <span>wavelength</span> and helping others <span>find their way</span> along this path.
                    Each of us possess unique <span>abilities</span>, and our collective progress is driven fastest when we selflessly <span>help&nbsp;each&nbsp;eachother</span>.</p>
                </div>
                <div className={`vertical-divider ${props.context.isAtBottom && 'animate-height'}`}></div>
                <div className="info-panel">
                    <h3>About</h3>
                    <p>Currently, I work as a <span>lead instructor</span> partnering with <span>universities</span> that offer software development <span>courses</span>. I also work at <span>Life360/Tile/Jiobit</span> as a Lifecycle Marketing  Developer. With every day that passes, I'm trying to <span>improve</span> the world through my <span>ideas</span>, <span>designs</span>, and <span>code</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default withContext(BottomHome);