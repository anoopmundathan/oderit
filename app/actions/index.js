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
  try {
    firebase.database().ref().child('users')
    .on('value', snapshot => {

      const snap = snapshot.val()
      const storesArray = []

      if (snap) {
        Object.keys(snap).map(user => {  
          Object.keys(snap[user].stores).map(store => {
            storesArray.push({
              _id: store,
              user,
              storeName: snap[user].stores[store].name,
              mobile: snap[user].stores[store].mobile,
              address: snap[user].stores[store].address,
            })
          })
        })
        dispatch({ type: FETCH_STORES , stores: storesArray })
      } else {
        dispatch({ type: FETCH_ERROR , error: 'No stores found' })
      }
    })
  }
  catch(err) {
    console.log(err)
  }

}

export const fetchItemsAction = (userId, fn) => async dispatch => {
  
  try {
    firebase.database().ref().child(`users/${userId}/items`)
    .on('value', snapshot => {

      const snap = snapshot.val()
      const itemsArray = []

      if (snap) {
        Object.keys(snap).map(item => {
          itemsArray.push({
            _id: item,
            name: snap[item].name,
            price: snap[item].price
          })
        })
        dispatch({ type: FETCH_ITEMS, items: itemsArray })
      } else {
        dispatch({ type: FETCH_ITEMS, items: null })
      }
      fn();
    })
  } catch(error) {
    dispatch({ type: FETCH_ERROR, error })
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
