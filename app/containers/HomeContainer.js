import React, { Component } from "react";
import Home from "../components/Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      city: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  handleChange(e) {
    this.setState({
      city: e.target.value,
    });
  }
  render() {
    return (
      <Home
        onSumbit={this.handleSubmit}
        onChange={this.handleChange}
        value={this.state.city}
      />
    );
  }
}

export default HomeContainer;
