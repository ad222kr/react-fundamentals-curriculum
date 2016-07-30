import React, { PropTypes } from "react";

import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";
import home from "../styles/home.css";


const Home = ({ onSumbit, onChange, value }) => {
  return (
    <div class="home row">
      <form onSubmit={onSumbit} class="form weather-form">
        <div class="col-md-4 col-md-offset-4" style={{ textAlign: "center" }}>
          <h1 class="text-center">Enter a City!</h1>
          <div>
            <SearchBox onChange={onChange} value={value} />
          </div>
          <div>
            <SearchButton />
          </div>
        </div>
      </form>
    </div>
  );
};

Home.propTypes = {
  onSumbit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Home;
