import React from 'react';
import { connect } from 'react-redux';

import './topNav.css';
import { toggleModal } from '../../../actions/gameSession';

export class TopNav extends React.Component {
  onClick() {
    this.props.dispatch(toggleModal());
  }

  render() {
    return (
      <nav>
        <ul className='topNav'>
          <li>
            <button
              className='modalToggle'
              onClick={() => this.onClick()}
            >
              ?
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(TopNav);