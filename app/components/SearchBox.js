import React, { PropTypes } from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      type="text"
      class="form-control search-box"
      placeholder="Kalmar, Sverige"
      onChange={onChange}
      value={value}
    />
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBox;
