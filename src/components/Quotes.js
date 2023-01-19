import React from "react";
import '../App.css';

function Quote(props){
    const [quote, setQuote] = React.useState([]);
    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(response => setQuote(response))
        .catch(err => console.error(err));
    }, [])
    // let randomNumber = Math.floor(Math.random() * props.data.length);
    // const [quote, setQuote] = React.useState(props.data[randomNumber]);

    function handleClick(){
        // let randomNumber = Math.floor(Math.random() * props.data.length);
        // setQuote(props.data[randomNumber])
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(response => setQuote(response))
        .catch(err => console.error(err));
    }

    return (
        <div id="quote-box">
            <h1 id="text">"{quote.content}"</h1>
            <h4 id="author">~{quote.author}</h4>
            <div id = "quote-div">
                <button id="new-quote" onClick = {handleClick}>New Quote</button>
                <a href = {`https://twitter.com/intent/tweet?text="${quote.quote}"%20by%20${quote.author}`} id="tweet-quote" target="_blank">Tweet</a>
            </div>
            
        </div>
    )
}

export default Quote;