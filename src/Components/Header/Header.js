import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    state = {
        toggleMenu: false,
        selectedItem: ''
    }

    render() {
        return (
            <div className='header-container'>
                <div className='menu-top'>
                    <div className="menu-lines" onClick={() => this.setState(prevState => {return { toggleMenu: !prevState.toggleMenu }})}>
                        <div className={this.state.toggleMenu ? 'menux1' : "menuline1"}></div>
                        <div className={this.state.toggleMenu ? 'menux2' : "menuline2"}></div>
                        <div className={this.state.toggleMenu ? 'menux3' : "menuline3"}></div>
                    </div>
                </div>
                <div className='menu-bottom'>
                    <div className={this.state.toggleMenu ? 'navbar-links' : 'navbar-links hidden'}>
                        <div onClick={() => this.setState({toggleMenu: false, selectedItem: ''})} id={this.state.selectedItem === '' && 'glowing'}>Home</div>
                        <div onClick={() => this.setState({toggleMenu: false, selectedItem: 'articles'})} id={this.state.selectedItem === 'articles' && 'glowing'}>Articles</div>
                        <div onClick={() => this.setState({toggleMenu: false, selectedItem: 'projects'})} id={this.state.selectedItem === 'projects' && 'glowing'}>Projects</div>
                        <div onClick={() => this.setState({toggleMenu: false, selectedItem: 'contact'})} id={this.state.selectedItem === 'contact' && 'glowing'}>Contact</div>
                    </div>
                    <div className={this.state.toggleMenu ? 'navbar-flavor hidden' : 'navbar-flavor'}>
                        {this.state.selectedItem === 'articles' &&
                            <div>
                                <div>Article1</div>
                                <div>Article2</div>
                                <div>Article3</div>
                            </div>
                        }
                        {this.state.selectedItem === 'projects' &&
                            <div>
                                <div>Axxion Lifestyle</div>
                                <div>Finder</div>
                                <div>Chuck Norris Facts</div>
                            </div>
                        }
                        {this.state.selectedItem === 'contact' &&
                            <div>
                                Contact me, or download my resume
                            </div>
                        }
                    </div>
                </div>
            </div> 
        );
    }
}