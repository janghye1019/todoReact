// useRef 
// 컴포넌트에서 변경 가능한 값을 저장하고 관리할 수 있게 함 

import { useState, useRef, useEffect } from "react";

function Ref(){

    // 1. useState와 useRef 차이점

    // const [count, setCount] = useState(0);

    // const countRef = useRef(0);

    // const counter = ()=> {
    //     setCount(count + 1)
    // }

    // console.log(countRef);
    // // console.log('카운트되는중...')

    // const counterRef = ()=> {
    //     countRef.current = countRef.current + 1;
    //     console.log("ref:", countRef.current);
    // }
    // //ref 객체는 current라는 프로퍼티를 가지고있으며, 실제로 우리가 저장하고자 하는 값을 담고있음.
    // // 때문에 해당 값에 접근하거나 변경할 때에는 useRef.current 형태로 접근해야 함 

    // return (
    //     <>
    //         <div>
    //             <p>count: {count}</p>
    //             <p>Ref: {countRef.current}</p>
    //             <button onClick={counter}>state 버튼</button>
    //             <button onClick={counterRef}>Ref 버튼</button>
    //         </div>
    //     </>
    // )



    // // 2. useRef와 변수 차이점 

    // //Ref 는 랜더링 될 때마다, 랜더링 된 이후에도 값이 유지됨.
    // //변수는 랜더링될 때마다 초기화됨.
    // // 이유는 useRef는 리액트에서 관리하는 객체임. 때문에 값이 변경돼도 컴포넌트가 다시 랜더링 되지 않고 값을 유지함. 

    // const countRef = useRef(0);
    // let countVar = 0;

    // const [render, setRender] = useState(0);

    // const handleRef = ()=> {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref:', countRef.current);
    // }
    // const handleVar = ()=> {
    //     countVar = countVar + 1;
    //     console.log('Var:', countVar);
    // }

    // return(
    //     <>
    //         <div>
    //             <p>Ref: {countRef.current}</p>
    //             <p>Var: {countVar}</p>
    //             <button onClick={()=> {setRender(render + 1)}}>랜더링</button>
    //             <button onClick={handleRef}>Ref 카운트</button>
    //             <button onClick={handleVar}>Var 카운트</button>
    //         </div>
    //     </>
    // )



    // input focus 되게 
    const inputRef = useRef();

    useEffect(()=> {
        // console.log(inputRef);
        inputRef.current.focus(); //인풋창 포커스 주기
    },[]);

    const login = ()=> {
        alert('하이,' + inputRef.current.value);
        inputRef.current.value = ""; //입력값 초기화
        inputRef.current.focus(); //포커스 다시 주기

    }

    return (
        <>
            <div>
                <input ref={inputRef} type="text" placeholder="usename" />
                <button onClick={login}>로그인</button>
            </div>
        </>
    )

}

export default Ref

