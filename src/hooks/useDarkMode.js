import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = initialValue => {

    const [ storedValue, setStoredValue ] = useLocalStorage(
        'darkModeToggler', initialValue);


    useEffect(()=>{
        if(storedValue === true){
            return document.getElementById('navbar').classList.add('dark-mode', 'navbar')
        }
        return document.getElementById('navbar').classList.remove('dark-mode', 'navbar')
    }, [storedValue]);
    

    const setValue = e => {
        return setStoredValue(!storedValue)
    };

return[ storedValue, setValue ];
};