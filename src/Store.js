import { configureStore, combineReducers } from '@reduxjs/toolkit';
import quoteReducer from './GenerateQuote';
import colorReducer from './Background';

const allReducers = combineReducers({
  quote: quoteReducer,
  color: colorReducer
});

export default configureStore({ reducer: allReducers });
