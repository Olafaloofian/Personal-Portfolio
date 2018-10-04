import React from 'react'
import { timingSafeEqual } from 'crypto';

export const AppContext = React.createContext()

export default class ContextProvider extends React.Component {
    state = {
        moveDirection: '',
        activeComponent: 'home',
        isAtBottom: false,
        methods: {
            moveLateral: (direction) => {
                if(this.state.isAtBottom) {
                    this.setState({ moveDirection: 'up', isAtBottom: false })
                    setTimeout( () => {
                        this.setState({ moveDirection: direction })
                    }, 1500)
                } else {
                    this.setState({ moveDirection: direction })
                }
            },
            setComponent: (name) => {
                this.setState({ activeComponent: name })
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