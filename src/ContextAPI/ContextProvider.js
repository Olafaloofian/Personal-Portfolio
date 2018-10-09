import React from 'react'

export const AppContext = React.createContext()

export default class ContextProvider extends React.Component {
    state = {
        moveDirection: '',
        activeComponent: 'home',
        isAtBottom: false,
        fadeEffect: 'visible',
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
                }, 400)
                setTimeout( () => {
                    this.setState({ fadeEffect: 'visible' })
                }, 800)
            },
            toggleBottomStatus: () => {
                this.setState( prevState => {
                    return { isAtBottom: !prevState.isAtBottom}
                })
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