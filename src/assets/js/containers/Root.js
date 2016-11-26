import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from '../containers/App'
import rootReducer from '../reducers'

const Root = () => {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(rootReducer, reduxDevTools)
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
