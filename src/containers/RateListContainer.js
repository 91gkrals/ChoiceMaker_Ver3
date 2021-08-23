import React, { Component } from 'react';
import RateListView from '../views/RateListView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('choiceStore')
@autobind
@observer
class RateListContainer extends Component {


  onSelectedRate(todo) {
    this.props.choiceStore.selectedRate(todo);
  }

  onSetRateProps(name, value) {
    this.props.choiceStore.setRateProps(name, value);
  }


  render() {

    let { todos, searchText, todo } = this.props.choiceStore;
    //console.log(todos);

    todos = todos.filter((todo) => todo.gachi === undefined ? this.onSetRateProps('gachi', '') : todo.gachi.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    //console.log(todos);


    return (
      <RateListView
        todo={todo}
        todos={todos}
        onSelectedRate={this.onSelectedRate}
      />
    )
  }
}

export default RateListContainer;