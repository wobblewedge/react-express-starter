import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      weather: "",
      data: undefined,
      test: [
        { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 },
        { first: "one", second: "two", third: "three" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `http://localhost:3001/api/weather?location=${encodeURIComponent(
        this.state.location
      )}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
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
          {this.state.data && (
            <div style={{ color: "#fff", fontSize: "2em" }}>
              <div>apparentTemperature:</div>
              <div>{this.state.data.currently.apparentTemperature}</div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
