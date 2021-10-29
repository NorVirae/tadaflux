import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const UseRedirectToHttps = () => {
    let location = useLocation()
    useEffect(() => {
        
        if (window.location.protocol!=="https:") {
            window.location.replace("https://www.tadaflux.io"+location.pathname);
        }
    })
};

export default UseRedirectToHttps;