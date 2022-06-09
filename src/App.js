import React from 'react';
import Quote from './Quote.js';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateColor } from './Background.js';

const App = () => {
  const background_color = useSelector((state) => (state.background));
  useDispatch(updateColor);

  return (
      <div className="App" style={{backgroundColor: background_color}}>
        <Quote />
      </div>
)};

export default App;
