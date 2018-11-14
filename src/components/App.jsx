import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import GameControl from './GameControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><GameControl />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }


}

export default App;
