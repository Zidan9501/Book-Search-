import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Explore and Discover Your Perfect Book
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Welcome to our immersive book discovery platform, where the joy of
            reading meets the thrill of exploration Begin your journey with us
            today and discover the perfect book to ignite your imagination and
            touch your heart.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
