import { FETCH_STORES, FETCH_STORES_ERROR } from '../action-types'
import { fetchStores } from '../utils/api'

export const fetchStoresAction = () => async dispatch => {
  const stores = await fetchStores()
  const { error } = stores
  if(error) {
    dispatch({ type: FETCH_STORES_ERROR, error })
  } else {
    dispatch({ type: FETCH_STORES, stores })
  }
}
