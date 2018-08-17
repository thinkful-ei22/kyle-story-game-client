import React from 'react';

import './playerReadyIndicator.css';
import image from '../../../../../../images/_ionicons_svg_md-checkmark.svg';

export default function PlayerReadyIndicator(props) {
  return (
    <span>{ props.readyState ? 'Ready' : <img src={image} alt='ready' className='ready' /> }</span>
  );
}