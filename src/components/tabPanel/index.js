import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export class TabPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instituicoes: [],
      value: null,
      index: null,
      children: null
    };
  }

  render() {
    const { value, index, children } = this.props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
}

export default TabPanel;
