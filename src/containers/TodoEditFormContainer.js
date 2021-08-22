import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator'

@inject('choiceStore')
@autobind //이걸 붙여준 클래스 내에서의 바인드는 신경을 안 써도 됨. 순서는 inject담에 와야됨. 
@observer
class TodoEditFormContainer extends Component {


  onSetTodoProps(name, value) {
    this.props.choiceStore.setTodoProps(name, value);
  }

  onAddTodo() {
    let { todo } = this.props.choiceStore;
    todo = { ...todo, id: generateId(5) }
    this.props.choiceStore.addTodo(todo);
  }

  onUpdateTodo() {
    this.props.choiceStore.updateTodo();
  }

  onRemoveTodo() {
    this.props.choiceStore.removeTodo();
  }

  onSubmitDecision() {
    this.props.choiceStore.submitDecision();
  }



  render() {
    const { choiceStore } = this.props;
    //const { test } = this.props.choiceStore; 이렇게 적어도 된다.


    return (
      <TodoEditFormView
        todo={choiceStore.todo}
        onSetTodoProps={this.onSetTodoProps}
        onAddTodo={this.onAddTodo}
        onUpdateTodo={this.onUpdateTodo}
        onRemoveTodo={this.onRemoveTodo}
        onSubmitDecision={this.onSubmitDecision}
        resultNum={choiceStore.resultNum}
      />
    )
  }
}

export default TodoEditFormContainer;