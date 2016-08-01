import React, { PropTypes } from "react";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const GetForecasts = ({ onSubmit, onChange, value, isRow }) => {
  const formClass = isRow ? "navbar-form navbar-right" : "form";
  return (
    <form onSubmit={onSubmit} class={formClass}>
        <SearchBox onChange={onChange} value={value} />
        <SearchButton />
    </form>
  )
};

GetForecasts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isRow: PropTypes.bool,
};


export default GetForecasts;
