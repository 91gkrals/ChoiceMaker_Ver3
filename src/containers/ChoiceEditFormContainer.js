import React, { Component } from 'react';
import ChoiceEditFormView from '../views/ChoiceEditFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator'

@inject('choiceStore')
@autobind //이걸 붙여준 클래스 내에서의 바인드는 신경을 안 써도 됨. 순서는 inject담에 와야됨. 
@observer
class ChoiceEditFormContainer extends Component {


  onSetRateProps(name, value) {
    this.props.choiceStore.setRateProps(name, value);
  }

  onAddRate() {
    let { todo } = this.props.choiceStore;
    todo = { ...todo, id: generateId(5) }
    this.props.choiceStore.addRate(todo);
  }

  onUpdateRate() {
    this.props.choiceStore.updateRate();
  }

  onRemoveRate() {
    this.props.choiceStore.removeRate();
  }

  onSubmitDecision() {
    this.props.choiceStore.submitDecision();
  }



  render() {
    const { choiceStore } = this.props;
    //const { test } = this.props.choiceStore; 이렇게 적어도 된다.


    return (
      <ChoiceEditFormView
        todo={choiceStore.todo}
        onSetRateProps={this.onSetRateProps}
        onAddRate={this.onAddRate}
        onUpdateRate={this.onUpdateRate}
        onRemoveRate={this.onRemoveRate}
        onSubmitDecision={this.onSubmitDecision}
        resultNum={choiceStore.resultNum}
      />
    )
  }
}

export default ChoiceEditFormContainer;