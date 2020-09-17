import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Log from '../Log/Log';
import Landing from '../Landing/Landing';
import Metric from '../Metric/Metric';
import Trace from '../Trace/Trace';
import DummydogContext from '../../context/dummydog-context';
import Event from '../Event/Event';

export default class App extends React.Component {
  render() {
    return (
      <DummydogContext.Provider value={this.state}>
        <div className='app-container'>

            <Route
              exact
              path='/'
              component={Landing}>
            </Route>

            <Route
              exact
              path='/landing'
              component={Log}>
            </Route>

            <Route
              exact
              path='/metric'
              component={Metric}>
            </Route>

            <Route
              exact
              path='/event'
              component={Event}>
            </Route>

            <Route
              exact
              path='/trace'
              component={Trace}>
            </Route>

        </div>
      </DummydogContext.Provider>
    )
  }
}
