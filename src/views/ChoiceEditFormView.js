import 'date-fns';
import React, { PureComponent } from 'react';
// 머터리얼 UI
import { TextField, Grid, Button, Radio, RadioGroup, Slider, Tooltip, IconButton, Fab } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { InputLabel, InputProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DateFnsUtils from '@date-io/date-fns';
import { observer } from 'mobx-react';

import LineDivider from '../libs/LineDivider';
import styled from 'styled-components';

import logo from '../img/Logo1.png';
import '../GlobalStyle.css';
import { red } from '@material-ui/core/colors';



let Wrapper = styled.div`
  width:100%;
  background-color:lightgray;
`;

let EachBlock = styled.div`
  margin-top:12px;
  margin: 12px 0px;
  padding-bottom:20px;
  color:black;
  background-color:white;
`;

const ValDimension = styled.div`
  font-size:12px;
  line-height: 42px;
  color: black;
`;


let SubmitStyle = styled.div`
  padding-top:10px;
`;

const styles = theme => ({
  root: {
    backgroundColor: 'pink'
  },
  thumb: {
    "& .MuiSlider-markLabel": {
      color: 'skyblue',
      fontSize: 12
    }
  }
});



@observer
class ChoiceEditFormView extends PureComponent {


  getValueText(val, idx) {
    console.log(val);
    console.log(idx);
  }

  getChangedVal(e) {
    console.log(e);
    var sdf = e.touches[0].target.outerText;
    console.log(sdf);

  }




  render() {

    const { todo, onSetRateProps, onAddRate, onUpdateRate, onRemoveRate, resultNum, onSubmitDecision } = this.props;

    const guideTalk1 = `사람은 일상의 매순간 다양한 선택지 중 하나를 선택을 하며 살아갑니다.
                        하지만 뒤돌아서면 과연 옳은 결정이었는지 고민될 때가 많죠.
                        대표적인 난제 중 하나죠. 짜장면 짬뽕을 고민하다 짜장면을 먹었는데 짬뽕의 국물이 그리워지며 미련이 남기도 하죠.
                        아무튼 우린 A와 B 중 하나는 선택해야 합니다.
                        하지만 내가 내린 결정이 최선의 결정이었다고 생각한다면 적어도 미련이 남진 않을 겁니다.
                        이 앱은 특정 결정을 내리기에 앞서 다양한 평가항목을 추가하고, 결정을 점수화하여 수치로서 결정의 품질을 안내합니다.`;
    const guideTalk2 = "가령 음식점을 고를 때 중요하게 생각하는 평가항목이라고 한다면 가격을 예로 들 수 있습니다. 선택 후 점수를 선택해 주세요. 점수가 높을수록 결정에 긍정적으로 작용합니다.";
    const guideTalk3 = "평가항목과 점수를 입력하고 ADD 버튼을 클릭하여 추가합니다. 추가된 항목은 하단 [평가목록]에서 선택 후 UPDATE, DELETE 버튼을 통해 내용을 수정, 삭제할 수 있습니다.";
    const guideTalk4 = `점수와 가산점을 합산하여 평균을 낸 점수입니다. NPS의 지표로는 
    다음과 같이 그룹화할 수 있습니다. 0-6 – 부정 / 7-8 – 중립 / 9-10 – 긍정. 하지만 이 앱은 5점을 보통/중립으로 가정하였기 때문에 5점이상의 척도라면
    긍정적으로 검토하셔도 좋습니다.`


    //슬라이더 라벨
    const marks = [
      {
        value: 0,
        label: '나쁨',
        style: { color: 'red' }
      },
      {
        value: 10,
        label: '좋음'
      }
    ]


    const { classes } = this.props;

    const handleSliderChange = (event, newValue) => {
      onSetRateProps('test', newValue);
    }


    return (

      <form noValidate>

        <Wrapper>
          <EachBlock>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                {/* <h2 className={classes.root}>결정장애 극복 시스템</h2> */}
                <img src={logo} width={260} />
              </Grid>
              <Grid
                item xs={2}
                container justify='center'
                alignItems='center'>
                <Tooltip
                  title={guideTalk1}
                  enterTouchDelay={10}
                  leaveTouchDelay={27000}
                  style={{ width: 10, height: 5 }}
                >
                  <Fab color="primary" style={{ height: 5, width: 20, minHeight: 20 }} >
                    <HelpOutlineIcon style={{ fontSize: 'small' }} />
                  </Fab>
                </Tooltip>
              </Grid>
            </Grid>

          </EachBlock>
          <EachBlock>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                InputProps={{ style: { fontSize: 12 } }}
                placeholder="(예) 점심메뉴: xx냉면집 대신 △△초밥집 어떨까"
                fullWidth
                margin="normal"
                id="outlined-basic"
                label="결정제목"
                variant="standard"
                value={todo && todo.title ? todo.title : ''}
                onChange={(event) => onSetRateProps('title', event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                  InputProps={{ style: { fontSize: 12, color: 'gray' } }}
                  style={{ width: 220 }}
                  margin="normal"
                  id="date-picker-dialog"
                  label="결정기한"
                  placeholder="(예) 2021-08-30"
                  format="yyyy-MM-dd"
                  value={todo && todo.date ? todo.date : null}
                  onChange={(date) => onSetRateProps('date', date.valueOf())}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </EachBlock>

          <EachBlock>
            <Grid container>
              <Grid item xs={5} >
                <TextField
                  InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                  InputProps={{ style: { fontSize: 12, color: 'gray' } }}
                  placeholder="(예) 가성비"
                  margin="normal"
                  fullWidth
                  id="gachi"
                  label="평가항목"
                  value={todo && todo.gachi ? todo.gachi : ''}
                  onChange={(event) => onSetRateProps('gachi', event.target.value)}
                />
              </Grid>
              <Grid
                item xs={1}
                container justify='center'
                alignItems='center'
              >
                <Tooltip
                  title={guideTalk2}
                  enterTouchDelay={10}
                  leaveTouchDelay={20000}
                  style={{ width: 10, height: 5 }}>
                  <Fab color="primary" style={{ height: 5, width: 20, minHeight: 20 }} >
                    <HelpOutlineIcon style={{ fontSize: 'small' }} />
                  </Fab>
                </Tooltip>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <ValDimension>점수</ValDimension>
            </Grid>

            <Grid>
              <Slider
                value={todo && todo.scoreScale ? todo.scoreScale : 5}
                defaultValue={5}
                //getAriaValueText={this.getValueText}
                onChange={(event, newValue) => onSetRateProps('scoreScale', newValue || 5)}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={0}
                max={10}
                className={classes.thumb}
              />
            </Grid>

            <Grid item xs={3}>
              <ValDimension>가산점</ValDimension>
            </Grid>
            <Grid>
              <Slider
                value={todo && todo.extraScore ? todo.extraScore : 0}
                defaultValue={0}
                onChange={(event, newValue) => onSetRateProps('extraScore', newValue || 0)}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={6}
              />
            </Grid>

            <Grid container>
              <Grid>
                <Button variant='contained' color='primary' startIcon={<SaveIcon />} size='small'
                  onClick={onAddRate}>Add</Button>&nbsp;&nbsp;
                <Button variant='contained' color='default' startIcon={<UpdateIcon />} size='small'
                  onClick={onUpdateRate}>Update</Button>&nbsp;&nbsp;
                <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} size='small'
                  onClick={onRemoveRate}>Delete</Button>&nbsp;&nbsp;
              </Grid>
              <Grid
                item xs={1}
                container justify='center'
                alignItems='center'
              >
                <Tooltip
                  title={guideTalk3}
                  enterTouchDelay={10}
                  leaveTouchDelay={20000}
                  style={{ width: 10, height: 5 }}>
                  <Fab color="primary" style={{ height: 5, width: 20, minHeight: 20 }} >
                    <HelpOutlineIcon style={{ fontSize: 'small' }} />
                  </Fab>
                </Tooltip>
              </Grid>
            </Grid>
          </EachBlock>

          <EachBlock>
            <Grid container>
              <Grid>
                <SubmitStyle>
                  <Button variant='contained' color='primary' startIcon={<SaveIcon />}
                    onClick={onSubmitDecision}>결과보기</Button>
                  {isNaN(resultNum) ? "올바르지 않은 값을 입력하였습니다. 평가목록을 확인해 주세요." : `결과점수: ${resultNum}  입니다.`}
                </SubmitStyle>
              </Grid>
              <Grid
                item xs={1}
                container justify='center'
                alignItems='center'
              >
                <Tooltip
                  title={guideTalk4}
                  enterTouchDelay={10}
                  leaveTouchDelay={20000}
                  style={{ width: 10, height: 5 }}>
                  <Fab color="primary" style={{ height: 5, width: 20, minHeight: 20 }} >
                    <HelpOutlineIcon style={{ fontSize: 'small' }} />
                  </Fab>
                </Tooltip>
              </Grid>
            </Grid>
          </EachBlock>

        </Wrapper>

      </form >
    )
  }
}

export default withStyles(styles)(ChoiceEditFormView);


{/* LEGACY

<LineDivider color='gray' /> 



              <RadioGroup row aria-label="gender" name="score_scale" id="radio_scale"
                style={{ display: 'flex' }} onChange={(event) => onSetTodoProps('scoreScale', event.target.value)}
                value={todo && todo.scoreScale ? todo.scoreScale : ''}>
                <FormControlLabel value="-8" control={<Radio />} label="매우나쁨" />
                <FormControlLabel value="-6" control={<Radio />} label="꽤나쁨" />
                <FormControlLabel value="-4" control={<Radio />} label="나쁨" />
                <FormControlLabel value="0" control={<Radio />} label="보통" />
                <FormControlLabel value="3" control={<Radio />} label="좋음" />
                <FormControlLabel value="6" control={<Radio />} label="꽤좋음" />
                <FormControlLabel value="9" control={<Radio />} label="매우좋음" />
              </RadioGroup>

                            <Grid item xs={6}>
                <RadioGroup row label="rd" name="isCore"
                  onChange={(event) => onSetTodoProps('isCore', event.target.value)}
                  value={todo && todo.isCore ? todo.isCore : ''}
                  style={{ display: 'flex' }}>
                  <FormControlLabel value="1" control={<Radio />} label="Yes" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>

*/ }