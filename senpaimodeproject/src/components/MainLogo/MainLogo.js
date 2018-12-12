import React, { Component } from 'react';
import './MainLogo.css';

class MainLogo extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default MainLogo