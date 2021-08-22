import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('choiceStore')
@autobind
@observer
class TodoListContainer extends Component {


  onSelectedTodo(todo) {
    this.props.choiceStore.selectedTodo(todo);
  }

  onSetTodoProps(name, value) {
    this.props.choiceStore.setTodoProps(name, value);
  }


  render() {

    let { todos, searchText, todo } = this.props.choiceStore;
    //console.log(todos);

    todos = todos.filter((todo) => todo.gachi === undefined ? this.onSetTodoProps('gachi', '') : todo.gachi.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    //console.log(todos);


    return (
      <TodoListView
        todo={todo}
        todos={todos}
        onSelectedTodo={this.onSelectedTodo}
      />
    )
  }
}

export default TodoListContainer;