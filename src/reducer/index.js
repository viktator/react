import {combineReducers} from 'redux'
import couneterReducer from './counter'

export default combineReducers({
    count: couneterReducer
})