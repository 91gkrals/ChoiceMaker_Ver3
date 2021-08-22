import React, { Component } from 'react';
import TodoEditFormContainer from './containers/TodoEditFormContainer';
import TodoListContainer from './containers/TodoListContainer';

import { Box, Container } from '@material-ui/core';
import SearchbarContainer from './containers/SearchbarContainer';

import ErrorBoundary from './ErrorBoundary';
//If export config is default, you don't need braces around your import component name e.g. {ErrorBoundary}. Otherwise it throws error.

class App extends Component {
  render() {
    return (
      <Container >
        <ErrorBoundary>
          <Box m={3}><TodoEditFormContainer /></Box>
          <Box m={3}>
            <SearchbarContainer />
            <TodoListContainer />
          </Box>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;
