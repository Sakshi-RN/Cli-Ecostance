// ** Redux, Thunk & Root Reducer Imports
import { combineReducers, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {configureStore, Tuple} from '@reduxjs/toolkit'
import authReducer from '../features/authReducer'
import countryCodeReducer from '../features/countryCodeReducer'
import  productReducer  from '../features/getProductsReducer'
import userReducer from '../features/userReducer'
import carbonReducer from '../features/carbonReducer'
import cartReducer from '../features/cartReducer'
import profileReducer from '../features/profileReducer'


const reducer = combineReducers({
    auth:authReducer,
    country: countryCodeReducer,
    product: productReducer,
    user:userReducer,
    carbon:carbonReducer,
    cart:cartReducer,
    profile:profileReducer 
})

// const middleware = [...getDefaultMiddleware(), thunkMiddleware];

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
//     // middleware: [thunk, logger]
// })

// export { store }

// Combine your reducers
// const store = configureStore({
//     auth: rootReducer,
//     middleware: [thunk, logger]
//     // Add more reducers here if needed
// });
  
  // Create your Redux store
// const store = createStore(rootReducer);
// configureStore({
//     reducer: rootReducer,
//     middleware: () => new Tuple(additionalMiddleware, logger),
//   })

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    enhancers: (getDefaultEnhancers) =>
      getDefaultEnhancers({
        autoBatch: false,
      })
  })
  
export default store;
