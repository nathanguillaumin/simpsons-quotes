import React from 'react';
import Quotecard from './components/QuoteCard';
import './App.css';
import axios from 'axios';

const sampleQuote = {
  quote: 'Yeah. Call this an unfair generalization if you must.. but old people are no good at everything',
  character: 'Moe Szyslak',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411',
  characterDirection: 'Right'
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      simpson: sampleQuote
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote () {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  }

  render () {
    return (
      <div className='App'>
        <Quotecard simpson={this.state.simpson} />
        <button type='button' onClick={this.getQuote}>Get a new quote</button>
      </div>
    );
  }
}

export default App;
