import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Layout from './layout/index.js';
import { Helmet } from 'react-helmet';
import Home from './home/index.js';
import Docs from './docs/index.js';

export default class admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s">
          <title>MUI React App</title>
        </Helmet>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/docs" component={Docs} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
