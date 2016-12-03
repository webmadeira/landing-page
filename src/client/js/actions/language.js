import { CHANGE_LANGUAGE } from '../constants/ActionTypes'

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language,
})
