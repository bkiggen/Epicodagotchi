import React from 'react';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import Game from './Game';

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameVisibleOnPage: true,
      name: 'Student Name',
      coffeeLevel: 90,
      sleepLevel: 90,
      workLevel: 90
    };
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleCoffeeLevelChange = this.handleCoffeeLevelChange.bind(this);
    this.handleWorkLevelChange = this.handleWorkLevelChange.bind(this);
    this.handleSleepLevelChange = this.handleSleepLevelChange.bind(this);
    this.gameInterval = this.gameInterval.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleNameEntry(name) {
    this.setState({gameVisibleOnPage: true});
    let newName = name.name;
    this.setState({name: newName});
  }

  handleCoffeeLevelChange() {
    let newCoffeeLevel = this.state.coffeeLevel;
    newCoffeeLevel += 5;
    this.setState({coffeeLevel: newCoffeeLevel});
  }

  handleSleepLevelChange() {
    let newSleepLevel = this.state.sleepLevel;
    newSleepLevel += 5;
    this.setState({sleepLevel: newSleepLevel});
  }

  handleWorkLevelChange() {
    let newWorkLevel = this.state.workLevel;
    newWorkLevel += 5;
    this.setState({workLevel: newWorkLevel});
  }

  timer() {
    let newCoffeeLevel = this.state.coffeeLevel - 1;
    let newSleepLevel = this.state.sleepLevel - 1;
    let newWorkLevel = this.state.workLevel - 1;
    this.setState({coffeeLevel: newCoffeeLevel, sleepLevel: newSleepLevel, workLevel: newWorkLevel});
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
        coffeeLevel={this.state.coffeeLevel}
        sleepLevel={this.state.sleepLevel}
        workLevel={this.state.workLevel}
        onCoffeeLevelChange={this.handleCoffeeLevelChange}
        onWorkLevelChange={this.handleWorkLevelChange}
        onSleepLevelChange={this.handleSleepLevelChange}
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
