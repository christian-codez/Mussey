import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import MusicPlayer from './containers/MusicPlayer';
import ControlArea from './components/control-area/ControlArea';

const App = () => {
  return (
    <div className='container mussey-app'>
      <HeaderComponent />
      <div className='row'>
        <div className='col'>
          <Switch>
            <Route exact path='/' component={MusicPlayer} />
            <Route exact path='/:id' component={MusicPlayer} />
          </Switch>
        </div>
      </div>
      <ControlArea />
    </div>
  );
};

export default App;
