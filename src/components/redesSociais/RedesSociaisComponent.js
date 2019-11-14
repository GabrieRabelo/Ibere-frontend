import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

import './RedesSociaisComponent.css';

class RedesSociaisComponent extends Component {
    render() {
        return (
            <Grid container className="container-social-media">
                <Grid className="titulo-social-media">
                    <Typography variant="subtitle1" className="social-media">
                        Redes sociais
                    </Typography>
                </Grid>
                {this.props.social_media.map(r => {
                    return (
                        <Grid container className="rede" key={r} >
                            <Grid >
                                <Typography variant="body2">
                                    {r}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        );  
    }
}

export default RedesSociaisComponent;