import { combineReducers } from 'redux'
import { 
  SELECT_STORE,
  FETCH_STORES, 
  FETCH_ITEMS, 
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  CLEAR_BASKET,
  FETCH_ERROR,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL
 } from '../action-types'

const auth = (state = { }, action) => {
  switch(action.type) {
    case FB_LOGIN_SUCCESS:
      return { 
        token: action.payload,
        name: action.name
      }
    case FB_LOGIN_FAIL:
      return { token: null }
    default: 
      return state
  }
}

const stores = (state = {}, action) => {
  switch(action.type) {
    case FETCH_STORES: 
      return action.stores
    default: 
      return state
  }
}

const basket = (state = [], action) => {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, action.item]
    case UPDATE_ITEM:
      const updateItem = state.map((item) => {
        if(item._id === action.id) {
          return {
            ...item,
            qty: item.qty + action.value
          }
        }
        return item
      })    
      return updateItem
    case REMOVE_ITEM:
      return state.filter(item => item._id !== action.id)
    case CLEAR_BASKET:
      return []
    default: 
      return state
  }
}

const items = (state = {}, action) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return action.items
    default: 
      return state
  }
}

const selectedStore = (state = {}, action) => {
  const { user } = action
  switch(action.type) {
    case SELECT_STORE:
      return { user }
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
  selectedStore,
  stores,
  items, 
  basket,
  error,
  auth
})
