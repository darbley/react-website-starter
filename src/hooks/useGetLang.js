import { useEffect, useState } from 'react';

// SET DEFAULT LANG
const defaultLang = 'en';

const useGetLang = () => {
    const [lang, setLang] = useState(defaultLang);

    useEffect(() => {
        // Run once, set lang.
        // Default to en
        let language = defaultLang;
        let m = null;
        if ((m = /^\/([a-z]{2})[\/.*]?/.exec(document.location.pathname)) !== null) {
            language = m[1];

            // If is not EN or FR, hardcode to EN to ensure some text displays. 
            // Add or adjust for more languages. 

            if (language !== 'fr'){
                language = 'en'
            }
        }
        setLang(language);
    },[]);

    return lang;
}

export default useGetLang;