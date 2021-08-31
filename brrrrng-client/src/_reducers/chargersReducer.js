import {
  GET_STATIONS 
} from '../_actions/types'

export default function apiRequest (state = {}, action) {

  switch(action.type) {
    case GET_STATIONS:
      return {
        ...state,
        chargerStations: action.payload
      }
    default: 
    return state
  }
}