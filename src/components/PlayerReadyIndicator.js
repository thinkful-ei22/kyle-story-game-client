import React from 'react';

export default function PlayerReadyIndicator(props) {
  return (
    <span>{ props.readyState ? 'Ready' : '...' }</span>
  );
}