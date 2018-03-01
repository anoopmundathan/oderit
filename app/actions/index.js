import { 
  FETCH_STORES, 
  FETCH_ITEMS,
  ADD_ITEM, 
  UPDATE_ITEM,
  REMOVE_ITEM,
  CLEAR_BASKET,
  FETCH_ERROR,
  ORDER_CONFIRMATION
} from '../action-types'

import { fetchStores, fetchItems } from '../utils/api'
import { letStoreOwnerKnowAboutOrder } from '../utils/cloud-func'
import firebase from 'firebase'

export const fetchStoresAction = () => async dispatch => {

  // Fetch store information from firebase
  firebase.database().ref().child('users')
  .on('value', snapshot => {
    const snap = snapshot.val()

    const storesArray = []

    Object.keys(snap).map(user => {  
      Object.keys(snap[user].stores).map(store => {
        storesArray.push({
          _id: store,
          storeName: snap[user].stores[store].name,
          mobile: snap[user].stores[store].mobile,
          address: snap[user].stores[store].address,
        })
      })
    })
    
    if(storesArray.length > 0) {
      dispatch({ type: FETCH_STORES , stores: storesArray })
    } else {
      dispatch({ type: FETCH_ERROR , error: 'No stores are found' })
    }
  })
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

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET
  }
}

export const orderConfirmation = (data) => async () => {
  const response = await letStoreOwnerKnowAboutOrder(data)
  dispatch( { type: ORDER_CONFIRMATION })
}
