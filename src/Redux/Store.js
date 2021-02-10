import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import { addToCartReducer } from './Reducers/Cart'
import { getProductId, ProductsList } from './Reducers/Product'

const reducer = combineReducers({
  products: ProductsList,
  productId: getProductId,
  cart: addToCartReducer,
})

let storeEnchance

if (process.env.NODE_ENV !== 'production') {
  storeEnchance = compose(composeWithDevTools(applyMiddleware(thunk)))
} else {
  storeEnchance = applyMiddleware(thunk)
}

const persistConfig = {
  key: 'x-state',
  storage,
  blacklist: ['user', 'articles'],
}
const persistedReducer = persistReducer(persistConfig, reducer)
// 1 reducer 2 state 3 middleware
const store = createStore(persistedReducer, storeEnchance)
const persistor = persistStore(store)

export { store, persistor }
