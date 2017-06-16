import React from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {
  state = {
    showModal: false
  };
  handleMenu(event, value) {}
  render() {
    return (
      <div className="noPrint">
        <AppBar
          title={
            <div style={{ cursor: 'pointer' }} onClick={() => this.props.history.push('/')}>
              MUI React App
            </div>
          }
          iconElementLeft={<div />}
          iconElementRight={
            <div>
              <RaisedButton
                primary={true}
                disabled={this.props.location.pathname === '/'}
                style={{ marginRight: 5 }}
                label="Home"
                onTouchTap={() => this.props.history.push('/')}
              />
              <RaisedButton
                style={{ marginRight: 5 }}
                label="Docs"
                disabled={this.props.location.pathname.startsWith('/docs')}
                primary={true}
                onTouchTap={() => this.props.history.push('/docs')}
              />
            </div>
          }
        />
      </div>
    );
  }
}
export default withRouter(Header);
