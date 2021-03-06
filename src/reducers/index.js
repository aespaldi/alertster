import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AlertsReducer from './alerts_reducer'
import SelectAlertReducer from './select_alert_reducer'
import AuthenticationReducer from './authentication_reducer'
import AuthReducer from './auth_reducer'

// import { FACEBOOK_LOGIN } from '../actions/index'
// export default function(state = [], action){
//   // console.log('action received', action)
//   switch (action.type) {
//   case FACEBOOK_LOGIN:
//     return state
//   default:
//     return state
//   }
// }

const rootReducer = combineReducers({
  alerts: AlertsReducer,
  authenticated: AuthenticationReducer,
  auth: AuthReducer,
  selectAlert: SelectAlertReducer,
  form: formReducer
});

export default rootReducer
