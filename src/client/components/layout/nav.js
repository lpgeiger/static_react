import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ListIcon from 'material-ui/svg-icons/action/list';
import Subheader from 'material-ui/Subheader';
import { withRouter } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <Drawer width={300} open={true} containerClassName="drawer-nav">
        <MenuItem>
          Documenation
        </MenuItem>
        <Subheader>Table of content</Subheader>
        <MenuItem
          onTouchTap={() => {
            this.props.history.push('/docs');
          }}
          leftIcon={<ListIcon />}>
          Documenation home
        </MenuItem>
      </Drawer>
    );
  }
}
export default withRouter(Nav);
