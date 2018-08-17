import React from 'react';

import './sentence.css';

export default function Sentence(props) {
  return (
    <section className='sentence'>
      <p>{props.text}</p>
    </section>
  );
}