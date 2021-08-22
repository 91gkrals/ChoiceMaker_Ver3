import React, { PureComponent } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { observer } from 'mobx-react'

import moment from 'moment';





const styles = theme => ({
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "purple"
    }
  },
  tableCell: {
    "$selected &": {
      color: "yellow"
    }
  },
  selected: {}
})



@observer
class TodoListView extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    //const sample = [{id: 1, title:'title1', date:'date1'}, {id: 2, title:'title2', date:'date2'}]
    const { todos, todo, onSelectedTodo } = this.props;
    let selectedID = this.state.selectedID;

    console.log('아래는 todoObj');
    console.log(todo);

    const { classes } = this.props;

    const rowSelectedHander = (todo) => {
      this.setState({ selectedID: todo.id })
      onSelectedTodo(todo);
      //console.log(this.state.selectedID);
      console.log('클릭 후 todoObj 모습');
      console.log(todo);
    }


    return (
      <TableContainer component={Paper} >
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>평가목록</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {

              Array.isArray(todos) && todos.length ?
                todos.map((todoItem) => (
                  <TableRow
                    key={todoItem.id}
                    hover
                    onClick={() => rowSelectedHander(todoItem)}
                    selected={todo.id === todoItem.id}
                  >
                    <TableCell>평가항목:{todoItem.gachi || ""} / 점수:{todoItem.scoreScale || 5} / 가산점:{todoItem.extraScore || 0}</TableCell>

                  </TableRow>
                ))
                :
                <TableRow>
                  <TableCell>Empty</TableCell>
                </TableRow>
            }
            {console.log('todos객체 변화가 있을 경우 updated된 todos 모습▼')}
            {console.log(this.props.todos)}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default withStyles(styles)(TodoListView);




{/* LEGACY


<TableCell>{moment(todo.date).format('YYYY-MM-DD HH:mm')}</TableCell>


*/}