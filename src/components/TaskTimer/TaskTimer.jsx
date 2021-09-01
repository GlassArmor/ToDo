/* eslint-disable */
import React, { Component } from 'react';
import './TaskTimer.css';

import play from './icon_play.png';
import stop from './icon_stop.png';

export default class TaskTimer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      timerMinutes: this.props.minutes,
      timerSeconds: this.props.seconds
    };

    this.tick = () => {
      let { timerMinutes, timerSeconds, paused } = this.state;
      if (paused) return;
      if ( timerSeconds > 58 ) {
        this.setState( {
          timerMinutes: timerMinutes+1,
          timerSeconds: 0
        } );
      } else {
        this.setState( {
          timerMinutes: timerMinutes,
          timerSeconds: timerSeconds+1
        } );
      }
    };

    this.counter;

    this.componentDidMount = () => {
      this.counter = setInterval( this.tick, 1000);
    };

    this.componentWillUnmount = () => {
      clearInterval(this.counter);
    };

    this.pause = () => {
      this.setState({ paused: true });
    };

    this.play = () => {
      this.setState({ paused: false });
    };

  };

  render() {

    let { timerMinutes, timerSeconds } = this.state;
    if (timerMinutes < 10) timerMinutes = `0${timerMinutes}`;
    if (timerSeconds < 10) timerSeconds = `0${timerSeconds}`;

    return (
      <div className='timer'>
        <button className='' onClick={this.play}><img className='timer_button' src={play} alt='Resume timer'/></button>
        <button className='button_pause' onClick={this.pause}><img className='timer_button' src={stop} alt='Pause timer'/></button>
        <div className='timer_text'>{ `${timerMinutes}:${timerSeconds}` }</div>
      </div>
    );
  };

}
