import React, { PropTypes } from "react";

const MainContainer = (props) => {
  return (
    <div class="container-fluid main-container">
      {props.children}
    </div>
  );
};


MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
