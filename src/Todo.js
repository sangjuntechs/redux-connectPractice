import React from "react";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>삭제</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
