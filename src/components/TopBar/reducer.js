import { CLOSE_MENU, OPEN_MENU } from './actions'

const initialState = {
  menuOpen: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        menuOpen: false
      }
    case OPEN_MENU:
      return {
        ...state,
        menuOpen: true
      }
    default:
      return state
  }
}

export default reducer

export const isMenuOpen = (state) => state.components.TopBar.menuOpen
