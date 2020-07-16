import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <div className='app-container'>
     
          <Route
            exact
            path='/'
            component={Landing}>
          </Route>

      </div>
    )
  }
}
