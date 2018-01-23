import { combineReducers } from 'redux'
import { FETCH_STORES, FETCH_STORES_ERROR } from '../action-types'

const stores = (state = { }, action) => {
  switch(action.type) {
    case FETCH_STORES: 
      return action.stores  
    default: 
      return state
  }
}

const error = (state = {}, action) => {
  switch(action.type) {
    case FETCH_STORES_ERROR:
      return {
        error: action.error
      }
    default: 
      return state
  }
}

export default combineReducers({
  stores, 
  error
})
