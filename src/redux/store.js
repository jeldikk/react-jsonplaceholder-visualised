import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from "./root_reducer"

const middleware = [];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

middleware.push(thunk)

export default createStore(rootReducer, applyMiddleware(...middleware))