import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing'
import config from '../../config'
import DummydogContext from '../../context/dummydog-context'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(resJSON => {
      console.log(resJSON)
      this.setState({
        test: resJSON
      })
    })
  }

  render() {
    return (
      <DummydogContext.Provider value={this.state}>
        <div className='app-container'>
     
            <Route
              exact
              path='/'
              component={Landing}>
            </Route>

        </div>
      </DummydogContext.Provider>
    )
  }
}
