import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from "./root_reducer"

let composedMiddleware = null;
const middleware = [];


middleware.push(thunk)

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
    composedMiddleware = composeWithDevTools(applyMiddleware(...middleware))
}
else{
    composedMiddleware = applyMiddleware(...middleware)
}





export default createStore(rootReducer, composedMiddleware)