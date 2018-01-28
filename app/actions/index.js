import { 
  FETCH_STORES, 
  FETCH_ITEMS,
  ADD_ITEM, 
  UPDATE_ITEM,
  REMOVE_ITEM,
  FETCH_ERROR } from '../action-types'
import { fetchStores, fetchItems } from '../utils/api'

export const fetchStoresAction = () => async dispatch => {
  const stores = await fetchStores()
  const { error } = stores
  if(error) {
    dispatch({ type: FETCH_ERROR, error })
  } else {
    dispatch({ type: FETCH_STORES, stores })
  }
}

export const fetchItemsAction = (storeId, fn) => async dispatch => {
  
  const items = await fetchItems(storeId)
  const { error } = items
  
  if(error) {
    dispatch({ type: FETCH_ERROR, error })
  } else {
    dispatch({ type: FETCH_ITEMS, items })
    fn();
  }
}

export const addItemAction = item => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const updateItemAction = (id, value) => {
  return {
    type: UPDATE_ITEM,
    id,
    value
  }
}

export const removeItemAction = id => {
  return {
    type: REMOVE_ITEM, 
    id
  }
}
