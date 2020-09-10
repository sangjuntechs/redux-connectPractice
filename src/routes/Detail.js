import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function Detail({ toDo, onBtnClick }) {
  return (
    <div>
      <h1>Detail page</h1>
      <p>TEXT: {toDo?.text}</p>
      <p>ID: {toDo?.id}</p>
      <Link to='/'><button onClick={onBtnClick}>삭제</button></Link>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () =>
      dispatch(actionCreators.deleteTodo(parseInt(ownProps.match.params.id))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
