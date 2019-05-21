import React, { Component } from 'react';
import '../App.css';
class Weatherman extends Component {


    showmedata(arr){
      return (<div>
        {arr.map((category, index) =>
    <div key={category}>
      <h4 key={index}>{category.first}</h4>
      <h4 key={index}>{category.second}</h4>
      <h4 key={index}>{category.third}</h4>
    </div>
      )}
      </div>);
  }

  render() {
    return (
      <div>
      {this.showmedata()}
      </div>
    );
  }
}

export default Weatherman;
