import React from 'react';

import './playerLoadingStatus.css';
import image from '../../../../../images/_ionicons_svg_md-contact.svg';
import PlayerReadyIndicator from './PlayerReadyIndicator';

export default function PlayerLoadingStatus(props) {
  return (
    <li 
      className='playerLoading'
      key={props.id}
    >
      <span>
        <img
          src={image}
          alt='avatar'
          className='avatar'
        />
        {props.name}
      </span>
      <PlayerReadyIndicator readyState={props.readyState}/>
    </li>
  );
}