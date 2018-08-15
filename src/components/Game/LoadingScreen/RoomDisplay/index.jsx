import React from 'react';
import { connect } from 'react-redux';

import './roomDisplay.css';

export function RoomDisplay(props) {
  return (
    <div className='roomDisplay'>
      <h2 className='roomCode'>Code: {props.roomCode}</h2>
      <span>(Share this code so others can join!)</span>
    </div>
  );
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode
});

export default connect(mapStateToProps)(RoomDisplay);