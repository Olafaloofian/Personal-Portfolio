import React from 'react'

export const AppContext = React.createContext()

export default class ContextProvider extends React.Component {
    state = {
        homeScrollPosition: '',
        methods: {
            setScrollUp: () => {
                this.setState({ homeScrollPosition: 'top' })
            },
            setScrollDown: () => {
                this.setState({ homeScrollPosition: 'bottom' })
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