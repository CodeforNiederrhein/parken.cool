import { fetchParkingData as fetchParkingDataFromApi } from './api'

export const FETCH_LIST = 'scenes/Home/data/parkings/FETCH_LIST'

export const fetchParkingData = (city) => ({
  type: FETCH_LIST,
  payload: fetchParkingDataFromApi(city)
})
