import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../Todo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addTodo(text);
  };

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
