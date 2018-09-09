import React from 'react';

import './header.css';
import RulesModal from './RulesModal';
import TopNav from './TopNav';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <TopNav />
        <RulesModal />
        <h1>
          <a href='/' className='siteName'>What's the Story?</a>
        </h1>
      </header>
    );
  }
}