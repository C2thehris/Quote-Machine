import { configureStore, combineReducers } from '@reduxjs/toolkit'
import quoteReducer from './GenerateQuote'
import colorReducer from './Background'

const allReducers = {
  quoteReducer,
  colorReducer
}

export default configureStore({reducer: quoteReducer});