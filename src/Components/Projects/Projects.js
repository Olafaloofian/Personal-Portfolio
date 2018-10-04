import React, { Component } from 'react';
import './Projects.css'
import { withContext } from '../../ContextAPI/Context_HOC'

class Projects extends Component {
    render() {
        return (
            <div className={`projects-container ${this.props.context.fadeEffect}`}>Projects</div>
        );
    }
}

export default withContext(Projects)