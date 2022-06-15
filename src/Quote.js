import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuotes, randomQuote } from './GenerateQuote';
import { updateColor } from './Background';
import twitterLogo from './iconmonstr-twitter-1.svg';
import tumblrLogo from './tumblr-logo-svgrepo-com.svg';

const Quote = () => {
  const dispatch = useDispatch();

  const quotesListStatus = useSelector((state) => state.quote.quotesList.status);

  useEffect(() => {
    if (quotesListStatus === 'idle') {
      dispatch(loadQuotes());
      dispatch(randomQuote());
      dispatch(updateColor());
    }
  }, [quotesListStatus, dispatch]);

  const quote = useSelector((state) => (state.quote));
  return (
    <div id='quote-box'>
      <div id='text'>{quote.text}</div>
      <div>

        <div id='author'>{quote.author}</div>
        <div id='buttons'>
          <a id='tweet-quote' target='_blank' href='https://twitter.com/intent/tweet' rel='noreferrer'>
            <button className='button' type='button'>
              {/* <TwitterLogo /> */}
              <img src={twitterLogo} alt='Tweet' />
            </button>
          </a>
          <a id='tumblr-quote' href=''>
            <button className='button' type='button'>
              {/* <TumblrLogo /> */}
              <img src={tumblrLogo} alt='Tumblr' />
            </button>
          </a>
          <button id='new-quote' className='button' type='button' onClick={(event) => { event.preventDefault(); dispatch(randomQuote()); dispatch(updateColor()); }}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
