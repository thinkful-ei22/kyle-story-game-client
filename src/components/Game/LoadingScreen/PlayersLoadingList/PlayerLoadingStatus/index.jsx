import React from 'react';

import PlayerReadyIndicator from './PlayerReadyIndicator';

export default function PlayerLoadingStatus(props) {
  return (
    <li className='playerLoading' key={props.id}>
      <span>(img)</span>
      <span> {props.name} </span>
      <PlayerReadyIndicator readyState={props.readyState}/>
    </li>
  );
}