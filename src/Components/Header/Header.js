import React, { Component } from 'react';
import { withContext } from '../../ContextAPI/Context_HOC'
import './Header.css'

class Header extends Component {
    state = {
        toggleMenu: false,
        selectedItem: ''
    }

    componentDidMount() {
        const path = window.location.pathname.split('').slice(1).join('')
        path === '' || path === 'about' ?
            this.setState({ selectedItem: 'home' })
        :
            this.setState({ selectedItem: path })
    }

    clicky = (direction, name) => {
        this.setState({toggleMenu: false, selectedItem: name})
        this.props.context.methods.moveLateral(direction)
        this.props.context.methods.setComponent(name)
    }

    render() {
        // console.log(window.location)
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
                        <div onClick={() => this.clicky('left', 'home')} id={this.state.selectedItem === 'home' && 'glowing'}>HOME</div>
                        <div onClick={() => this.clicky('right', 'articles')} id={this.state.selectedItem === 'articles' && 'glowing'}>ARTICLES</div>
                        <div onClick={() => this.clicky('right', 'projects')} id={this.state.selectedItem === 'projects' && 'glowing'}>PROJECTS</div>
                        <div onClick={() => this.clicky('right', 'contact')} id={this.state.selectedItem === 'contact' && 'glowing'}>CONTACT</div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default withContext(Header)