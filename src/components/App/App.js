import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import RealLanding from '../RealLanding/RealLanding';
import Resource from '../Resource/Resource';
// import config from '../../config';
import DummydogContext from '../../context/dummydog-context';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     template: []
  //   }
  // }

  // componentDidMount() {
  //   fetch(`${config.TEMPLATE_ENDPOINT}`, {
  //     method: 'GET'
  //   })
  //   .then(res => res.json())
  //   .then(resJSON => {
  //     this.setState({
  //       template: resJSON
  //     })
  //   })
  // }

  render() {
    return (
      <DummydogContext.Provider value={this.state}>
        <div className='app-container'>

            <Route
              exact
              path='/'
              component={RealLanding}>
            </Route>

            <Route
              exact
              path='/landing'
              component={Landing}>
            </Route>

            <Route
              exact
              path='/resource'
              component={Resource}>
            </Route>

        </div>
      </DummydogContext.Provider>
    )
  }
}
