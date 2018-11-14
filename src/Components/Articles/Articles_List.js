const articlesList = [
    {
        id: 0,
        title: "Using React's Context API with a Higher Order Component",
        subtitle: 'A step-by-step process of how to set up global state using Context API and a higher order component.',
        picture: 'https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png',
        body: "## Introduction to Context API\n\nGlobal state management is an important tool for any React project larger than a few components or routes. While Redux works well and remains the most common solution, React recently introduced a built-in alternative called Context API. Using Context API doesn’t add any dependencies, doesn’t require middleware or packages for HTTP requests, and is usually quicker to set up. If this sounds awesome to you, keep reading to learn how to apply it in your projects!\n\nLooking through React’s docs on Context API is helpful, and you may want to refer to them alongside this article when working with it for the first time or two. That being said, the way the docs show and talk about everything can be confusing to some people. This article is meant to provide an alternative, detailed guide on how to enable Context API through the use of a higher order component.\n\n---\n\n## Step 1: Set up Context API folder\n\nChoose where your Context API files should live in your project’s directory. If you’re using create-react-app, the best place for it is inside the pre-built \`src\` folder. Navigate to the desired location and create a new folder with an obvious name (example: ‘ContextAPI’ ).\n\n---\n\n## Step 2: Make the context provider\n\nCreate a file called ContextProvider.js inside of your Context API folder. This is, in essence, a regular stateful React component - so it should look pretty familiar as we build it out. Let’s start coding!\n\n"+`
        import React from 'react'
        
        export const AppContext = React.createContext()
        
        export default class ContextProvider extends React.Component {
          state = {
          // Did you know you can shortcut the constructor and super by writing state like this? Try it out if you haven’t!
            contextKey1 : 'contextValue1',
            contextKey2: 'contextValue2',
            methods: {
              updateKey1: () => {
                this.setState({ contextKey1: 'newValue' })
              }
            }
          }
        
          render() {
            return (
              <AppContext.Provider value={this.state}>
                {this.props.children}
              </AppContext.Provider>
            )
          }
        }
        `+"\n\nA few things here warrant discussion before moving on. The \`createContext()\` statement on line three is what initializes Context API for us. In the return of ContextProvider, we are declaring this component’s state as the context global state by setting it to our newly created context’s ‘value’ prop. This is why we must put any globally accessible functions inside of ContextProvider’s state (in this case on the \`methods\` key).\n\nOther functions and lifecycle methods (for example, componentDidMount) may be used in ContextProvider class as normal, but they will not be accessible through Context API *unless they are in state*. Lastly, we enable the ability to use the context in any component by wrapping \`{this.props.children}\` with AppContext.Provider.\n\nIf you’re new to React, the paragraph above can seem pretty technical. In order to really understand what’s going on here, read it again sentence by sentence while referring to the code we just wrote.\n\n---\n\n## Step 3: Create the higher order consumer component\n\nNext, let’s make a higher order component that will append our global state to a wrapped component’s props. In the same ContextAPI folder you created previously, make a new file called \`Context_HOC.js\`. This one is a lot less typing but a bit more thinking:\n\n"+`
        import React from 'react'
        import { AppContext } from './ContextProvider'
        
        export default function withContext(Component) {
          return function contextComponent(props) {
            return (
              <AppContext.Consumer>
                {context => <Component {...props} context={context} />}
              </AppContext.Consumer>
            )
          }
        }
        `+"\n\nIn the previous step, the global state was configured with \`AppContext.Provider\`. We import the same context in this step so we can set up the consumer. The \`withContext\` function takes a *whole component as its parameter* (there’s the higher order part of this!) and returns another function that takes the *component’s props as a parameter*. This inner function is where the magic happens.\n\n\`contextComponent\` returns our \`AppContext\`, but this time we use \`AppContext.Consumer\`. This tells Context API the wrapped component is a consumer (meaning it has access to global state). Thus, we make the passed-in \`Component\` parameter a child of \`AppContext.Consumer\`, as well as passing it context global state through an arrow function. This context is assigned to a new prop on the component \`context={context}\`. To make sure the component retains its other props, we give them back with \`{...props}\`.\n\n---\n\n## Step 4: Wrap App with ContextProvider\n\nPhew. Still reading? You’re a champion! There’s only one more setup step required. Head into your \`index.js\` file to wrap your whole app with \`<ContextProvider>\`:\n\n"+`
        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';
        import ContextProvider from './ContextAPI/ContextProvider'
        
        ReactDOM.render(
          <ContextProvider>
              <App />
          </ContextProvider>,
        document.getElementById('root'));
        `+"\n\nThis grants the created context to \`<App />\` and all of its children.\n\n---\n\n## Step 5: Testing our work\n\nContext API is now completely set up and ready to use in any component that you wish. Here’s an example of a stateless component using context to display dynamic data: \n\n" +`
        
        import React from 'react';
        import withContext from 'path/to/Context_HOC'
        
        function SomeComponent (props) {
          console.log('CONTEXT', props.context)
          // This should log the whole state from ContextProvider.js:
          // {
          //   contextKey1: 'contextValue1',
          //   contextKey2: 'contextValue2',
          //   methods: {updateKey1: function}
          // }
          return (
            <div>
                <div>
                    SomeComponent
                </div>
                <br/>
        
                <div>
                    contextKey1: {props.context.contextKey1}
                </div>
        
                <div>
                    contextKey2: {props.context.contextKey2}
                </div>
                  
                <div>
                    <button onClick={props.context.methods.updateKey1}>
                        Update Context
                    </button>
                </div>
            </div>
          );
        } 
        
        export default withContext(SomeComponent)
        `+"\n\nKeep in mind - you need to wrap each component that uses context with your higher order component: \`withContext()\`. As we discussed before, this is how context is added to \`props\`.\n\n---\n\n## Conclusion\n\nThere are tons of different ways to set Context API up. Most other tutorials have you use the consumer to wrap in the return of a component. This works, but what if you need to call a context method above (like in a \`componentDidUpdate\`)? Setting up a higher order component allows you to access context anywhere in the component, not just in the return.\n\nContext API is an amazing tool for global state management, and is worth considering adding to any project that needs a centralized pool of manipulatable data. The sky’s the limit as to what you can use it for - get creative and see what you can make!"
    },
    {
        id: 1,
        title: 'Developing and Securing Modern Apps with GraphQL, React, and Apollo',
        subtitle: 'Learn how to develop and secure modern applications with GraphQL, React, Apollo, and Auth0.',
        picture: 'https://cdn.auth0.com/blog/logos/graphql-reactjs-logo.png',
        body: 'https://auth0.com/blog/develop-modern-apps-with-react-graphql-apollo-and-add-authentication/',
        link: true
    },
    {
        id: 2,
        title: 'Create React App 2.0: Babel 7, Sass, and More',
        subtitle: 'Create React App 2.0 is available now, and it brings a year’s worth of improvements in a single dependency update.',
        picture: 'https://ubisafe.org/images/svg-logo-reactjs-4.png',
        body: 'https://reactjs.org/blog/2018/10/01/create-react-app-v2.html',
        link: true
    },
    {
        id: 3,
        title: 'Simplify your JavaScript – Use .map(), .reduce(), and .filter()',
        subtitle: 'Three prototype methods you should know.',
        picture: 'https://cdn-images-1.medium.com/max/2000/1*mG4yPf0dVoBk0R6csThChQ.png',
        body: 'https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d',
        link: true
    }
]

export default articlesList