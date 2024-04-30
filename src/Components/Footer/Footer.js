import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                {/* Get current year from date */}
                Copyright Michael Kerr {new Date().getFullYear().toString().slice(-2)}
            </div>
        );
    }
}