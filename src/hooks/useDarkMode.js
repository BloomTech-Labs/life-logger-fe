import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = initialValue => {

    const [ storedValue, setStoredValue ] = useLocalStorage(
        'darkModeToggler', initialValue);


    useEffect(()=>{
        console.log(storedValue);
        if(storedValue === true){
            return document.body.classList.add('dark-mode');
        }
            return document.body.classList.remove('dark-mode');
    }, [storedValue]);
    

    const setValue = e => {
        return setStoredValue(!storedValue)
    };

return[ storedValue, setValue ];
};