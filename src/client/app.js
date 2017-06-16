import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppComponent from './components/index.js';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={AppComponent} />
        </Switch>
      </div>
    );
  }
}
