import { CHANGE_LANGUAGE } from '../constants/ActionTypes'

export default function (state = { current: 'en' }, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, current: action.language }
    default:
      return state
  }
}
