import React from 'react';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import Game from './Game';

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameVisibleOnPage: false
    };
    this.handleNameEntry = this.handleNameEntry.bind(this);
  }

  handleNameEntry() {
    this.setState({gameVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.gameVisibleOnPage) {
      currentlyVisibleContent = <Game/>;
    } else {
      currentlyVisibleContent = <Welcome onNameEntry={this.handleNameEntry}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }

}

export default GameControl;
