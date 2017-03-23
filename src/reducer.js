import { combineReducers } from 'redux'
import scenes from './scenes/reducer'
import components from './components/reducer'

const rootReducer = combineReducers({
  scenes,
  components
})

export default rootReducer
