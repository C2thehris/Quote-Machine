import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import quotesFile from './quotes.txt'

export const initialState = {
  quote: {
    author: '',
    text: '',
  },
  quotesList: {
    quotes: [],
    status: 'idle',
    error: null
  },
  color: ''
};

export const loadQuotes = createAsyncThunk('loadQuotes', async () => {
  const response = await fetch(quotesFile);
  let quotes = await response.text();
  quotes = quotes.split('\n\n');
  const quoteObjects = quotes.map((raw) => {
    const lines = [...raw.split('\n')];
    const quoteObject = {
      author: lines.pop(),
      text: lines.join(' '),
    }
    return quoteObject;
  });
  return quoteObjects;
})

const counterSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    randomQuote: (state, action) => {
      if (state.quotesList.quotes.length !== 0) {
        const selection = state.quotesList.quotes[Math.floor(state.quotesList.quotes.length * Math.random())];
        state.quote.author = selection.author;
        state.quote.text = selection.text;
      }
      return state;
    }
  },
  extraReducers(builder) {
      builder
        .addCase(loadQuotes.pending, (state, action) => {
          state.quotesList.status = 'loading'
        })
        .addCase(loadQuotes.fulfilled, (state, action) => {
          state.quotesList.status = 'succeeded'
          state.quotesList.quotes = [...action.payload];
        })
        .addCase(loadQuotes.rejected, (state, action) => {
          state.quotesList.status = 'failed'
          state.quotesList.error = action.error.message
        })
  }
})

// Action creators are generated for each case reducer function
export const { randomQuote } = counterSlice.actions

export default counterSlice.reducer