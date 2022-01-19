import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initState = {}
const middleware = [thunk]

let store = createStore(
    rootReducer, 
    initState, 
    compose(applyMiddleware(...middleware))
);

// if (window.navigator.userAgent.includes("Chrome")) {
//     store = createStore(
//         rootReducer, 
//         initState, 
//         compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     )
// } else {
//     store = createStore(
//         rootReducer, 
//         initState, 
//         compose(applyMiddleware(...middleware))
//     )
// }

export default store;