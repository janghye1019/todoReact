// useref: 컴포넌트에서 변경 가능한 값을 젖아하고 관리할 수 있게 한다. 
// useState ref 차이점 
import { useState, useRef, useEffect } from "react";

function Ref() {
    // 차이점
    const [count, setCount] = useState(0);
    const countRef = useState(0);
    const counter = () => {
        setCount(count + 1)
    }


    // console.log('카운트되는중...')
    console.log(countRef)

    const counterRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref:", countRef.current);
    }
    // ref 객체는 프로퍼티를 가지고 있으며, 실제로 우리가 저장하고자 하는 값을 담고 있음, 때문에 해당 값을 사용하고 싶다면 current를 사용해야한다. 

    //REF는 랜더링 될 때마다. 랜더링 된 이후에도 값이 유지되
    // 변수는 랜더링 될때마다 초기화
    // 이유는 useref는 리액트에서 관리하는 객체임, 때문에 값이 변경되도,컴포넌트가 다시 랜더링이 되지 않음ㄴ


    const inputRef = useRef();

    useEffect(() => {
        //focus를 작성해야 인풋에 있는 친구를 사용할수 있다
        // console.log(inputRef.current.focus);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`하수이따 , ${inputRef.current.value}`);
        //초기화 시키고 포커스 다시하기
        inputRef.current.value = "";
        inputRef.current.focus();//

    }

    return (
        <>
            {/* <p>count: {count}</p>
            <p>Ref:{countRef.current}</p>
            <button onClick={counter}>state버튼</button>
            <button onClick={counterRef}>state버튼</button> */}

            <div>
                <input ref={inputRef} type="text" placeholder="usename" />
                <button onClick={login}>로그인</button>
            </div>
        </>
    )

    // -------------------------foucu 작성-----------------




}

export default Ref

// ===============================
const countRef = useRef(0);
let countVar = 0;

const [render, setRender] = useState(0);

const handleRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref:', countRef.current);
}

const handleVar = () => {
    countVar = count + 1;
    console.log('Var:', countVar);
}

return (
    <>
        <div>
            <p>Ref:{countRef.current} </p>
            <p>Var:{countVar}</p>

            {/* 랜더링 값은 Ref나오는데 var는 안나오는 이유는 초깃값이 상수 0이라서 다시 랜더링을 해도 0이 나옴  */}
            <button onClick={() => { setRender(render + 1) }}>랜더링</button>
            <button onClick={handleRef}>Ref버튼</button>
            <button onClick={handleVar}>Var버튼</button>
        </div>


    </>
)
