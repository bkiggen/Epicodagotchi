import React from 'react';
import Welcome from './Welcome';
import Game from './Game';
import GameOver from './GameOver';

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      happy: true,
      gameVisibleOnPage: false,
      alive: true,
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

  checkAlive(i) {
    let newLevelList = JSON.parse(JSON.stringify(this.state.masterLevelList));
    if (newLevelList[i].level > 99 || newLevelList[i].level < 1) {
      this.setState({
        alive: false
      });
    }
  }

  checkHappy(i) {
    let newLevelList = JSON.parse(JSON.stringify(this.state.masterLevelList));
    if (newLevelList[0].level < 11 || newLevelList[0].level > 90 || newLevelList[1].level < 11 || newLevelList[1].level > 90 || newLevelList[2].level < 11 || newLevelList[2].level > 90) {
      this.setState({
        happy: false
      }
    );
  } else {
    this.setState({
      happy: true
    })
  }
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
    this.checkAlive(id);
    this.checkHappy(id);
  }

  timer() {
    let newLevelList = JSON.parse(JSON.stringify(this.state.masterLevelList));
    for(let i=0; i < 3; i++){
      newLevelList[i].level -= .1;
      this.checkAlive(i);
      this.checkHappy(i);
    }
    this.setState({
      masterLevelList: newLevelList
    });

  }

  gameInterval() {
    let interval = setInterval(this.timer, 100);
  }

  componentWillMount() {
    this.gameInterval();
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.gameVisibleOnPage) {
      if (this.state.alive) {
        currentlyVisibleContent = <Game
          happy={this.state.happy}
          name={this.state.name}
          masterLevelList={this.state.masterLevelList}
          onLevelChange={this.handleLevelChange}
          />;
      } else {
        currentlyVisibleContent = <GameOver/>
      }
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
