import React from 'react';
import { connect } from 'react-redux';

export class NewGame extends React.Component {
  
  render() {
    return (
      <div className='newGame'>
        <h1>What's the Story?</h1>
        <h2>This is the NewGame component</h2>
        <form>
          <input type='text' />
          <button className='join'>Join Game</button>
        </form>
        <form>
          <button className='new'>New Game</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewGame);