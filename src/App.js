import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      weather: '',
      data: [],
      test: [{first: 1,second:2,third:3,fourth:4,fifth:5},
      {first: "one", second: "two", third: "three"}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/api/weather?location=${encodeURIComponent(this.state.location)}`)
      .then(response => response.json())
      .then(data=> {
        console.log(data)
        this.setState({data: data})})
      

      }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </header>
        <div className="App-Body">
        <div>{(typeof this.state.data)}</div>
      </div>
      </div>
    );
  }
}

export default App;
