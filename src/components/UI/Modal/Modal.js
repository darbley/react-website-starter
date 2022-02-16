import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    const {showBackdrop} = props;
    const ModalContent = <div className="card">{props.children}</div>;
    //const ModalContent = <div className=""></div>

    return (
        <>
            {showBackdrop && ReactDOM.createPortal(<Backdrop {...props} />, document.getElementById('body'))}
            {ReactDOM.createPortal(<>{ModalContent}</>, document.getElementById('modal-wrapper'))}
        </>

    )
}
export default Modal;