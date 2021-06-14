import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import "bootstrap/dist/css/bootstrap.css"
import { configureFakeBackend } from './_helpers/fake-backend'
import { Provider } from 'react-redux'
import store from './_helpers/store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/lib/persistStore'

configureFakeBackend()

const persistor = persistStore(store)

ReactDOM.render(
     <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
               <App />
          </PersistGate>
     </Provider>,
     document.getElementById('root')
)


