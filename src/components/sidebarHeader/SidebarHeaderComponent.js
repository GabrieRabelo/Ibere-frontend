import React, { Component } from 'react';

import { IconButton, Box, Typography, Divider, AppBar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

class SidebarHeader extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <AppBar color='default'>
                <Box display='flex' style={{margin:'10px'}}>
                    <IconButton>
                        <MenuIcon onClick={this.props.open}/>
                    </IconButton>
                    <Box style={{paddingLeft:'16px'}}>
                        <Typography variant='h6' style={{marginBottom:'-5px'}}>
                            Mapas Culturais
                        </Typography>
                        <Typography color='textSecondary' variant='subtitle1'>
                            Fundação Iberê Camargo
                        </Typography>
                    </Box>
                </Box>
            </AppBar>
        );
    }
}

export default SidebarHeader    