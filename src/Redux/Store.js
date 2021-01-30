import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({})

let storeEnchance

if (process.env.NODE_ENV !== 'production') {
  storeEnchance = compose(composeWithDevTools(applyMiddleware(thunk)))
} else {
  storeEnchance = applyMiddleware(thunk)
}

export const store = createStore(reducer, storeEnchance)
