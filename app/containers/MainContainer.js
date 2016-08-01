import React, { PropTypes } from "react";

import Header from "../components/Header";
import GetForecastsContainer from "../containers/GetForecastsContainer";


const MainContainer = ({ children }) => {
  return (
    <div class="container-fluid main-container">
      <div class="row">
        <Header>
          <GetForecastsContainer isRow />
        </Header>
      </div>
      {children}
    </div>
  );
};


MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
