import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = initialValue => {

    const [ storedValue, setStoredValue ] = useLocalStorage(
        'darkModeToggler', initialValue);

    useEffect(()=>{
        if(storedValue === true){
            return (document.getElementById('container').classList.add('dark-mode'))
        }
        return (document.getElementById('container').classList.remove('dark-mode'))
    }, [storedValue]);
    

    const setValue = e => {
        return setStoredValue(!storedValue)
    };

return[ storedValue, setValue ];
};