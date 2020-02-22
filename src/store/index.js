import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import * as reducers from '../reducers'

export default () => {
  const store = createStore(combineReducers(reducers), applyMiddleware(apiMiddleware))
  return store
}
