import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/product/productSlice.js'
import formReducer from './features/form/formSlice.js'
 
 const store = configureStore({
  reducer: {
    counter:counterReducer,
    product:productReducer,
    form: formReducer,
  },

})
export default store;