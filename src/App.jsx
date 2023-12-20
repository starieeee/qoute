import './App.css'
import React, { useState, useEffect } from 'react'
function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random
  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
          
        }
      )
  }, []);
  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }
  return (

    <>
      <div className="app">
        <div className="qoute">
          <h2>{quote}</h2>
          <small>~ {author} ~</small>
        </div>
        <br />
        <button className="btn" onClick={fetchNewQuote}>New Quote</button>
      </div>
    </>
  )
}

export default App
