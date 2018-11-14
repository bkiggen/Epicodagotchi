import React from 'react';
import Welcome from './Welcome';
import Game from './Game';

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameVisibleOnPage: true,
      name: 'Student Name',
      masterLevelList: [{
        name: 'Coffee',
        level: 90,
        key: 0
      },
      {
        name: 'Sleep',
        level: 90,
        key: 1
      },
      {
        name: 'Work',
        level: 90,
        key: 2
      }]
    };
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.gameInterval = this.gameInterval.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleNameEntry(name) {
    this.setState({gameVisibleOnPage: true});
    let newName = name.name;
    this.setState({name: newName});
  }

  handleLevelChange(id) {
    let newLevelList = JSON.parse(JSON.stringify(this.state.masterLevelList));
    newLevelList[id].level += 1;
    this.setState({
      masterLevelList: newLevelList
    });
  }

  timer() {
    let newLevelList = JSON.parse(JSON.stringify(this.state.masterLevelList));
    for(let i=0; i < 3; i++){
      newLevelList[i].level -= 1;
    }
    this.setState({
      masterLevelList: newLevelList
    });
  }

  gameInterval() {
    let interval = setInterval(this.timer, 1000);
  }

  componentWillMount() {
    this.gameInterval();
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.gameVisibleOnPage) {
      currentlyVisibleContent = <Game
        name={this.state.name}
        masterLevelList={this.state.masterLevelList}
        onLevelChange={this.handleLevelChange}
      />;

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
