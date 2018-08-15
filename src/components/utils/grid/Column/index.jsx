import React from 'react';

export default function Column(props) {

  const columnWidth = props.columnWidth;
  return (
    <div className={columnWidth}>
      {props.children}
    </div>
  );
}