import React from "react";
import { Link } from "react-router-dom";
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <LoginLink profile={profile} /> : <LogoutLink />;
  return (
    <nav className="nav-wrapper purple darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FireBlog
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
