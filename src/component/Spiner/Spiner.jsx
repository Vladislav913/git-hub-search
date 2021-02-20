import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './spiner.scss'

 function CircularIndeterminate() {

    return (
        <div className="spiner-box">
            <CircularProgress size={90} color="secondary" />
        </div>
    );
}

export default CircularIndeterminate