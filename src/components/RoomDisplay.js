import React from 'react';
import { connect } from 'react-redux';

export function RoomDisplay(props) {
  return (
    <div className='roomDisplay'>
      <h2 className='roomCode'>Code: {props.roomCode}</h2>
      <p>(Share this code so others can join!)</p>
    </div>
  );
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode
});

export default connect(mapStateToProps)(RoomDisplay);