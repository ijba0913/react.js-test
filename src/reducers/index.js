import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import PersonReducer from './PersonReducer'

export default combineReducers({
  person: PersonReducer,
  router: routerReducer
})
