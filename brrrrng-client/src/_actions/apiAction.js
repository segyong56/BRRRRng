import { GET_STATIONS } from './types'
import axios from 'axios'

const API_URL = "https://api.brrrrng.ga"

export const getStations = (data) => {
  
   const request = axios.post(`${API_URL}/charge/search`, data).then(response => response.data.response.body.items.item)

   return {
     type: GET_STATIONS,
     payload: request
   }
}