import React from "react";

const Header = ({ children }) => {
  return (
    <nav class="nav navbar-inverse">
      <a class="navbar-brand" href="#">Ze app</a>
      {children}
    </nav>
  );
};

export default Header;
