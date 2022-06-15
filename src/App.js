import React from 'react';
import Quote from './Quote.js';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const backgroundColor = useSelector((state) => (state.color));

  document.querySelector('body').style.backgroundColor = `rgb(${backgroundColor.color})`;
  document.querySelector('body').style.color = `rgb(${backgroundColor.color})`;
  document.querySelectorAll('button').forEach((button) => {
    button.style.backgroundColor = `rgb(${backgroundColor.color})`;
  });
  return (
      <div className="App" style={{ backgroundColor }}>
        <Quote />
      </div>
  );
};

export default App;
