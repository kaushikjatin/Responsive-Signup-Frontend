import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header.Component';
import React from 'react';


class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
