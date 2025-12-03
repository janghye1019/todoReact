// useContext 란 
// App 안에서 전역적으로 사용되는 데이터들을 여러 컴포넌트들이 쉽게 공유할 수 있도록 도와주는 리액트 기능. 
import { useState } from 'react'
import { ThemeContext } from './ThemeContext';
import Page from './Page'
import './useContext.css'

function Context () {

    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
         <Page isDark={isDark} setIsDark={setIsDark} />
        </ThemeContext.Provider>
    )
}

export default Context