import {combineReducers} from 'redux'
import couneterReducer from './counter'
import articles from './articles'

export default combineReducers({
    count: couneterReducer,
    articles

})