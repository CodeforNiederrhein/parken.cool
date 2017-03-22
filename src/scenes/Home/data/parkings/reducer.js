import { FETCH_LIST } from './actions'

import { normalize, schema } from 'normalizr'

const parkingSchema = new schema.Entity('parking')
const parkingListSchema = [ parkingSchema ]

const initialState = {
  byId: {},
  all: [],
  timestamp: '',
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_LIST}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false
      }
    case `${FETCH_LIST}_FULFILLED`:
      const normalizedData = normalize(action.payload.parkings, parkingListSchema)
      return {
        ...state,
        byId: {
          ...state.byId,
          ...normalizedData.entities.parking
        },
        all: normalizedData.result,
        timestamp: action.payload.timestamp,
        loading: false,
        error: false
      }
    case `${FETCH_LIST}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const getAllParkings = (state) => state.scenes.home.data.parkings.all.map(id => state.scenes.home.data.parkings.byId[id])
export const getLoading = (state) => state.scenes.home.data.parkings.loading
export const getError = (state) => state.scenes.home.data.parkings.error

export default reducer
