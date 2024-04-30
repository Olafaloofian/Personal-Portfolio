import React from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Tilt.css'

export default class Tilt extends React.Component {
    componentDidMount() {
        VanillaTilt.init(this.rootNode, {
            max: 30,
            speed: 400,
            reset: false
        })
    }
    render() {
        return (
            <div className='tilt-wrapper'>
                <div id='stars2'></div>
                <div ref={node => (this.rootNode = node)} className="tilter" >
                    <div id='stars3'></div>
                    <div id='stars'></div>
                </div>
            </div>
        )
    }
} 