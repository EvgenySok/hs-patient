import React from 'react'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// import configureStore, { history } from './redux/configStore'

import Home from './components/Home'

// const store = configureStore()

const Root = () => {
  return (
    // <Provider store={store}>
    //   <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route component={() => <Home />} />
          </Switch>
        </BrowserRouter>
    //   </ConnectedRouter>
    // </Provider>
  )
}

export default Root
