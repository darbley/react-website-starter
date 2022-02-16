import React from 'react';
import './style.scss';

const Backdrop = (props) => {
//console.log('backdrop ', props);
    return (
        <div className="backdrop" onClick={props.hideBackdrop}>
              
        </div>

    )
}
export default Backdrop;