import React from 'react'

export const AppContext = React.createContext()

export default class ContextProvider extends React.Component {
    state = {
        moveDirection: '',
        activeComponent: 'home',
        isAtBottom: false,
        fadeEffect: 'visible',
        // Methods to control where Slider component translates to
        methods: {
            moveLateral: (direction) => {
                if(this.state.isAtBottom) {
                    this.setState({ moveDirection: 'up', isAtBottom: false })
                    setTimeout( () => {
                        this.setState({ moveDirection: direction })
                    }, 750)
                } else {
                    this.setState({ moveDirection: direction })
                }
            },
            setComponent: (name) => {
                this.setState({ fadeEffect: 'invisible' })
                setTimeout( () => {
                    this.setState({ activeComponent: name })
                }, 300)
                setTimeout( () => {
                    this.setState({ fadeEffect: 'visible' })
                }, 600)
            },
            toggleBottomStatus: () => {
                this.setState( prevState => {
                    return { isAtBottom: !prevState.isAtBottom}
                })
            }
        }
    }

    // Routing for typed-in URLs
    componentDidMount() {
        const path = window.location.pathname
        if(path === '/about') {
            this.setState({ isAtBottom: true })
        }
        if(path === '/articles' || path === '/contact' || path === '/projects') {
            const componentName = path.split('').slice(1).join('')
            this.setState({ moveDirection: 'right', activeComponent: componentName})
        }
    }

    // Routing for user navigation
    componentDidUpdate(prevProps, prevState) {
        if(this.state.activeComponent !== prevState.activeComponent || this.state.isAtBottom !== prevState.isAtBottom || this.state.moveDirection !== prevState.moveDirection) {
            if(this.state.isAtBottom) {
                window.history.pushState('Home Lower', 'About', '/about')
            } else if(!this.state.isAtBottom) {
                if(this.state.activeComponent !== 'home') {
                    window.history.pushState(`${this.state.activeComponent}`, `${this.state.activeComponent}`, `/${this.state.activeComponent}`)
                } else {
                    window.history.pushState('Home Top', 'Home', '/')
                }
            }
        }
    }

    render() {
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}