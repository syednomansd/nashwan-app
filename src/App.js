import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store';
import navStack from './nav'

const store = configureStore()
const NavStack = navStack()

const App = () => (
  <Provider store={store}>
    <NavStack />
  </Provider>
)

export default App
