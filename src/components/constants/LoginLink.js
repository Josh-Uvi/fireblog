import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authAction";

const LoginLink = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Post</NavLink>
      </li>
      <li>
        <a onClick={props.logOut}>Logout</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginLink);
