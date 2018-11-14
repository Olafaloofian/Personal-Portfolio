import React from 'react';
import { withContext } from '../../ContextAPI/Context_HOC'
import profile from '../Slider/Media/home-photo.jpg'
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
                    <img src={profile} alt="Profile"/>
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
                    <p><span>Innovation</span> and <span>creation</span> are my two most important traits. Nothing makes me happier than working on completely <span>unique</span> ways to solve a problem. The feeling of <span>success</span> that comes after finishing an <span>unprecedented</span> project is the driving force in my life. I strive to maintain a forward-facing <span>focus</span>, always thinking about the next steps I should take to <span>accomplish</span> newer and greater things.</p>
                </div>
                <div className={`vertical-divider ${props.context.isAtBottom && 'animate-height'}`}></div>
                <div className="info-panel">
                    <h3>About</h3>
                    <p>After trying my hand in several industries, I decided to learn <span>web development</span>. From the moment I wrote my first <span>JavaScript</span> function, I knew that I had made the right choice. Attending a programming school taught me all the technologies I need for <span>full stack web development</span> - including React, Node, and SQL. My <span>goal</span> is to use these new skills to help people in any way I can.</p>
                </div>
            </div>
        </div>
    );
};

export default withContext(BottomHome);