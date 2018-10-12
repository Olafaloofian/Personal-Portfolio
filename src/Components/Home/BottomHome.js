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
                    <p><span>Innovation</span> and <span>creation</span> are the at the center of my every action. Nothing makes me happier than working on completely <span>unique</span> ways to solve a problem, and the feeling of <span>success</span> I achieve after completing an unprecedented project is the driving force in my life. I maintain a forward-facing <span>focus</span>, always thinking about the next steps I have to take to get where I want to go.</p>
                </div>
                <div className={`vertical-divider ${props.context.isAtBottom && 'animate-height'}`}></div>
                <div className="info-panel">
                    <h3>About</h3>
                    <p>After trying my hand at several different jobs, I decided to change direction and learn how to <span>code</span>. From the moment I wrote my first <span>JavaScript</span> function, I knew that I had made a good choice. I entered a programming school and learned all the ins and outs of <span>full stack web development</span> - including React, Node, and SQL. I’m ready to charge into the <span>future</span>, armed with my newly found skills and deep <span>passion</span> for coding.</p>
                </div>
            </div>
        </div>
    );
};

export default withContext(BottomHome);