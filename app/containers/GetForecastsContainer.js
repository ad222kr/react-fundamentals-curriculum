import React, { Component, PropTypes } from "react";
import GetForecasts from "../components/GetForecasts";
import { getCurrentWeather, getFiveDayForecast } from "../utils/api";

class GetForecastsContainer extends Component {
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
    const { city } = this.state;
    const { router } = this.context;
    this.setState({
      city: ""
    });

    router.push(`/forecast/${city}`);
  }

  handleChange(e) {
    this.setState({
      city: e.target.value,
    });
  }

  render() {
    const { isRow } = this.props;
    return (
      <GetForecasts
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        value={this.state.city}
        isRow={isRow}
      />
    )
  }
}

GetForecastsContainer.propTypes = {
  isRow: PropTypes.bool,
};

GetForecastsContainer.defaultProps = {
  isRow: false,
};

GetForecastsContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default GetForecastsContainer;
