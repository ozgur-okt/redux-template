import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions/todosActions';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
