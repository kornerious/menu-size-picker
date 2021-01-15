import { UPDATE_FILTER, REMOVE_FILTER } from './types'

export default function updateFilter(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_FILTER,
      payload,
    })
  }
}

export function removeFilter(catalogField) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FILTER,
      payload: catalogField,
    })
  }
}
