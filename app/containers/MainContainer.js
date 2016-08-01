import React, { PropTypes } from "react";

import Header from "../components/Header";
import GetForecastsContainer from "../containers/GetForecastsContainer";


const MainContainer = (props) => {
  return (
    <div class="container-fluid main-container">
      <div class="row">
        <Header>
          <GetForecastsContainer isRow />
        </Header>
      </div>
      {props.children}
    </div>
  );
};


MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
