import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users', 'shop'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

const loggerMiddleware = createLogger()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
)


export default store

