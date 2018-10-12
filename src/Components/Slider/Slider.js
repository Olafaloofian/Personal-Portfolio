import React from 'react';
import './Slider.css'
import BottomHome from '../Home/BottomHome'
import withStars from '../Tilt/TiltStar_HOC'
import { withContext } from '../../ContextAPI/Context_HOC'
import Articles from '../Articles/Articles';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import TopHome from '../Home/TopHome'

const Slider = (props) => {
    return (
        <div className='home-container'>

            <div className="top-half">
                <TopHome />

                <div className={`component-container ${props.context.moveDirection}`}>
                    {props.context.activeComponent === 'articles' && 
                        <Articles />
                    }
                    {props.context.activeComponent === 'projects' && 
                        <Projects />
                    }
                    {props.context.activeComponent === 'contact' && 
                        <Contact />
                    }
                </div>
            </div>

            <BottomHome />
        </div>
    );
}

export default withContext(withStars(Slider))