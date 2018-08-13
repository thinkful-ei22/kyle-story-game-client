import React from 'react';

export default function Sentence(props) {
  return (
    <section className='sentence'>
      <p>{props.text}</p>
    </section>
  );
}