import { FETCH_STORES, FETCH_STORES_ERROR } from '../action-types'

const stores = (state = { }, action) => {
  switch(action.type) {
    case FETCH_STORES: 
      return action.stores  
    default: 
      return state
  }
}

export default stores
