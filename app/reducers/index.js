import { combineReducers } from 'redux'
import { 
  FETCH_STORES, 
  FETCH_ITEMS, 
  FETCH_ERROR } from '../action-types'

const stores = (state = { }, action) => {
  switch(action.type) {
    case FETCH_STORES: 
      return action.stores  
    default: 
      return state
  }
}

const items = (state = { }, action) => {
  switch(action.type) {
    case FETCH_ITEMS: 
      return action.items
    default: 
      return state
  }
}

const error = (state = { }, action) => {
  switch(action.type) {
    case FETCH_ERROR:
      return {
        error: action.error
      }
    default: 
      return state
  }
}

export default combineReducers({
  stores,
  items, 
  error
})
