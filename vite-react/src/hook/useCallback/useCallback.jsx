//메모이제이션 역할 // usecallbeck
// 특벙함수가 의존성 배열이d에 명시된 값이 변경될 때만 새로 생성되도록 함
// 불필요한 함수 재생성 방지.....

import Box from "./box"
import { useCallback, useState } from "react"

function UseCallback() {

    const [size, setSize] = useState(100);
    //모드 전환 
    const [isDark, setIsDark] = useState(false);

    // const boxStyle = () => {
    //     return {
    //         width: `${size}px`,
    //         heigth: `${size}px`,
    //         backgroundColor: "pink"
    //     }
    const boxStyle = useCallback(() => {
        return {
            width: `${size}px`,
            heigth: `${size}px`,
            backgroundColor: "pink"
        }
    }, [size]);
}
return (

    <div style={
        backgroundColor: isDark ? 'black' : '#fff',
            padding: 20px,
        }></div >
    <>
        <button onClick={() => setIsDark(!isDark)}>123531</button>
        <button onClick={() => setSize(size + 10)}>박스커짐</button>
        <button onClick={() => setSize(size - 10)}>박스작아짐</button>

        <Box boxStyle={boxStyle} />
    </>
    )
}

export default UseCallback

// USE메모sms 값을 기억하고 :
// use콜백은 함수로 기억함 :  