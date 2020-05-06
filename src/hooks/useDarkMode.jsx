import { useEffect } from 'react'

import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (darkModeKey, initialValue) => {
     const [darkMode, setDarkMode] = useLocalStorage(darkModeKey, initialValue)
     const body = document.querySelector('body')
     
     useEffect(() => {
               if(darkMode === true){
                    body.classList.add('dark-mode')
               } else {
                    body.classList.remove('dark-mode')
               }
          }
     , [body.classList, darkMode, darkModeKey])


return [darkMode, setDarkMode]
}