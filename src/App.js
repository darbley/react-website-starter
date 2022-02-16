import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/scss/styles.scss';
import useIsMobileView from './hooks/useIsMobileView';
import useGetLang from './hooks/useGetLang';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Example from './pages/Example/Example';


// Move Get Lang to Context Provider
// Wrap App in Context Provider
// Add TranslatableText
// Add translation functions

// Add Lazy loading example
// Add UI stuff, modal, forms 
 
const App = () => {
    const [lang, setLang] = useState();
    const [isMobile, setIsMobile] = useState(true);
    // Use our custom hook for viewports.
    const isMobileView = useIsMobileView();
    // Use our custom hook for language. 
    const getLang = useGetLang();
     
    useEffect(() => {
        // Set language
        setLang(getLang);
        // Set Desktop or Mobile viewport 
        setIsMobile(isMobileView);
       
        return () => {
            console.log('cleanUp App.js');
        }
        
    },[isMobileView, getLang]);

    return (
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home lang={lang} isMobile={isMobile} />}></Route>
                <Route path="/:lang" element={<Home lang={lang} isMobile={isMobile} />}></Route>

                <Route path="/:lang/example" element={<Example lang={lang} isMobile={isMobile} />}></Route>
                <Route path="/:lang/example" element={<Example lang={lang} isMobile={isMobile} />}></Route>
            </Routes>
        </BrowserRouter>

        
    );
}

export default App;
