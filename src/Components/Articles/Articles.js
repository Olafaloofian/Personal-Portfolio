import React, { Component } from 'react';
import './Articles.css'
import { withContext } from '../../ContextAPI/Context_HOC'

class Articles extends Component {
    render() {
        return (
            <div className={`articles-container ${this.props.context.fadeEffect}`}>
                <div className="articles-head">
                    Articles
                </div>
                <div className="articles-list">
                </div>
            </div>
        );
    }
}

export default withContext(Articles)