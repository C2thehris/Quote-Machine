import { createSlice } from '@reduxjs/toolkit';
import './quotes.txt';

const initialState = {
  color: '0, 0, 0'
};

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    updateColor: (state) => {
      const r = Math.floor(Math.random() * 255.999);
      const g = Math.floor(Math.random() * 255.999);
      const b = Math.floor(Math.random() * 255.999);

      state.color = `${r}, ${g}, ${b}`;
      return state;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateColor } = backgroundSlice.actions;

export default backgroundSlice.reducer;
