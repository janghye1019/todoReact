import { useEffect, useState } from "react"

function Box({ boxStyle }) {

    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('박스 스타일 업테이트');
        setStyle(boxStyle())
    }, [boxStyle]);
    return (
        <>
            <div style={style}></div>
        </>
    )
}

export default Box