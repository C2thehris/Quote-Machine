import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadQuotes, randomQuote } from './GenerateQuote'
import twitterLogo from './iconmonstr-twitter-1.svg'
import tumblrLogo from './tumblr-logo-svgrepo-com.svg'
import { updateColor } from './Background'

const Quote = () => {
  const dispatch = useDispatch();

  const quotesListStatus = useSelector((state) => state.quotesList.status);

  useEffect(() => {
    if (quotesListStatus === 'idle') {
      dispatch(loadQuotes());
      dispatch(randomQuote());
      dispatch(updateColor());
    }
  }, [quotesListStatus, dispatch]);

  const quote = useSelector((state) => (state.quote));
  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div>

        <div id="author">{quote.author}</div>
        <div id="buttons">
          <a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet">
            <button className="button" type="button">
              <img src={twitterLogo} alt="Twitter"></img>
            </button>
          </a>
          <a id="tumblr-quote" href="">
            <button className="button" type="button">
              <img src={tumblrLogo} alt="Tumblr"></img>
            </button>
          </a>
          <button id="new-quote" className="button" type="button" onClick={(event) => {event.preventDefault(); dispatch(randomQuote()); dispatch(updateColor())}}>New Quote</button>
      </div>
      </div>
    </div>
  );
}

export default Quote;