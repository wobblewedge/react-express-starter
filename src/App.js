import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      weather: '',
      currently: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentWeather = this.currentWeather.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/api/weather?location=${encodeURIComponent(this.state.location)}`)
      .then(response => response.json())
      .then(data => this.setState({currently:data}))
  }

    currentWeather = ()=>{
    return (<section>
               {
                 this.state.currently.map((item, index) => <div key={index}>{item}</div>)}
               
        </section>);
      }
  
  render() {
    if(this.state.requestFailed)return <h2>NOPE</h2>
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
          <p>{this.state.weather}</p>
        </header>
        <div>
          {this.state.currentWeather}
        </div>
      </div>
    );
  }
}

export default App;
