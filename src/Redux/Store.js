import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ProductsList } from './Reducers/Product'

const reducer = combineReducers({
  products: ProductsList,
})

let storeEnchance
const initialState = {}
if (process.env.NODE_ENV !== 'production') {
  storeEnchance = compose(composeWithDevTools(applyMiddleware(thunk)))
} else {
  storeEnchance = applyMiddleware(thunk)
}

export const store = createStore(reducer, initialState, storeEnchance)
