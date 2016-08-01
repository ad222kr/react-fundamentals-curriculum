import React, { Component, PropTypes } from "react";
import { getFiveDayForecast } from "../utils/api";
import ForecastList from "../components/ForecastList";

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: true,
      forecasts: [],
    };
  }

  componentDidMount() {
    const { city } = this.props.routeParams;
    getFiveDayForecast(city)
      .then(response => {
        const { list } = response.data;
        this.setState({
          isLoading: false,
          forecasts: list,
          city,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    const { city } = nextProps.routeParams;
    getFiveDayForecast(city)
      .then(response => {
        const { list } = response.data;
        this.setState({
          isLoading: false,
          forecasts: list,
          city,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleClick(forecast) {
    const { router } = this.context;
    const { city } = this.props.routeParams;
    router.push({
      pathname: `/details/${city}`,
      state: {
        forecast,
      },
    });
  }

  render() {
    const { isLoading, forecasts, city } = this.state;
    return (
      <ForecastList
        isLoading={isLoading}
        forecasts={forecasts}
        city={city}
        onClick={this.handleClick}
      />
    );
  }

}

ForecastContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
};

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ForecastContainer;
