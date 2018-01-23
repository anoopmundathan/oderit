import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { createLogger } from 'redux-logger'

const store = createStore( 
  reducer, 
  {}, 
  compose(applyMiddleware(thunk, createLogger()))
)

export default store
