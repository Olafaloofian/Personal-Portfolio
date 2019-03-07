import React, { Component } from 'react';
import './Contact.css'
import email from './Media/email.png'
import linkit from './Media/linkit.png'
import phone from './Media/phone.png'
import number from './Media/number.png'
import { withContext } from '../../ContextAPI/Context_HOC'
import resume from './Media/Michael-Kerr-Resume.pdf'

class Contact extends Component {
    state = {
        showPhoneNumber: false
    }

    render() {
        return (
            <div className={`contact-container ${this.props.context.fadeEffect}`}>
                <div className="contact">
                    <div className="contact-header">
                        CONTACT
                    </div>
                    <div className="contact-icons">
                        <div className="circles">
                            <div>
                            {this.state.showPhoneNumber ?
                                <img src={number} alt="Phone Number"/>
                            :
                                <img src={phone} alt="Phone" onClick={() => this.setState({ showPhoneNumber: true })}/>
                            }
                            </div>
                            <a href='https://www.linkedin.com/in/michaelmkerr/' target="_blank" rel="noopener noreferrer"><img src={linkit} alt="LinkedIn"/></a>
                            <a href='mailto:bulluffalo@gmail.com'><img src={email} alt="Email"/></a>
                        </div>
                        <div className='resume'>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <button>DOWNLOAD RESUME</button>
                                </a>
                        </div>
                    </div>
                    <div className="contact-footer">
                        <div className='larger-text'>MICHAEL KERR</div>
                        <div>WEB DEVELOPER</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withContext(Contact)