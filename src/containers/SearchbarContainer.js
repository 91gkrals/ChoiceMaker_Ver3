import React, { Component } from 'react';
import { TextField, InputAdornment, Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('choiceStore')
@autobind
@observer
class SearchbarContainer extends Component {


  onChangeSearchText(searchText) {
    this.props.choiceStore.setSearchText(searchText);
  }



  render() {

    return (
      <div>
        <TextField
          label="평가항목 검색"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(event) => this.onChangeSearchText(event.target.value)}
        />

      </div>
    )
  }
}

export default SearchbarContainer;