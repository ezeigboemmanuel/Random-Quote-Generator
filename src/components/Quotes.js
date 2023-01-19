import React from "react";
import '../App.css';

function Quote(props){
    let randomNumber = Math.floor(Math.random() * props.data.length);
    const [quote, setQuote] = React.useState(props.data[randomNumber]);

    function handleClick(){
        let randomNumber = Math.floor(Math.random() * props.data.length);
        setQuote(props.data[randomNumber])
    }

    return (
        <div id="quote-box">
            <h1 id="text">"{quote.quote}"</h1>
            <h4 id="author">~{quote.author}</h4>
            <div id = "quote-div">
                <button id="new-quote" onClick = {handleClick}>New Quote</button>
                <a href = "https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">Tweet</a>
            </div>
            
        </div>
    )
}

export default Quote;