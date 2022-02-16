import React from 'react';
import './style.scss';
import Modal from '../../components/UI/Modal/Modal';
import useToggle from '../../hooks/useToggle';

const Example = (props) => {

    const [isToggled, toggle] = useToggle(false);

    return (
        <>
            <div className="blockwrap ">
                <h1>Example Page</h1>
                <p>This page has examples of the components and UI included.</p>
            </div>

            <div className="blockwrap ">
                <h1>Modal Example</h1>
                <p>The {`\<Modal />`} component can be easily included. </p>
                <p>Use the useToggle custom hook to toggle a 'hide' or 'show' state.</p>
                <p>Pass the Modal component the props <span>showBackdrop</span>, a boolean and <span>hideBackdrop</span>, a function. {`\<Modal showBackdrop={true} hideBackdrop={toggle} />`}</p>
                {isToggled && <Modal showBackdrop={true} hideBackdrop={toggle} >My modal content</Modal>}
                <button onClick={toggle}>Show Modal</button>
            </div>
        </>

    )
}
export default Example;