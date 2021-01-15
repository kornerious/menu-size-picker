import { UPDATE_FILTER, REMOVE_FILTER } from './types'

function updateFilter(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_FILTER,
      payload,
    })
  }
}

function removeFilter(catalogField) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FILTER,
      payload: catalogField,
    })
  }
}

export { updateFilter, removeFilter }
