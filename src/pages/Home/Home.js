import React, {useState} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import useToggle from '../../hooks/useToggle';

const Home = (props) => {
    const {lang, isMobile} = props;
    //const [showModal, setShowModal] = useState(false);
    const [isToggled, toggle] = useToggle(false);

    
    console.log('home props ', props);

    return (
        <div>
                <h1>Home Page</h1>
                <p>This is the paragraph text.</p>
                <p>This is my lang: {lang}</p>
                <p>Is Mobile viewport: {isMobile ? 'Yes' : 'No'}</p>

                {isToggled && <Modal showBackdrop={true} hideBackdrop={toggle}>
                    <p>Here is the modal content</p>
                </Modal>}

                <button onClick={toggle}>
                    Show the Modal
                </button>
        </div>

    )
}
export default Home;