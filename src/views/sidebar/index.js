import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class SidebarView extends Component {
  render() {
    return (
      <div className="some-class">
        <List component="nav" aria-label="main mailbox folders">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
            <ListItem button key={value}>
              <ListItemText primary="Inbox" />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default SidebarView;
