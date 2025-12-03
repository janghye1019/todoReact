// 리액트 훅이란 ?? 
// 리액트 컴포넌트에서 상태관리 및 생명주기 기능을 사용할 수 있게 해주는 특수한 함수
// 쉽게 말하면 컴포넌트에서 리액트 기능을 연결 할 수 있게 해주는 특별한 함수 

// Hook 사용 규칙 
// 1.최상위에서만 호출할 것 
// 2.리액트 함수 컴포넌트 또는 커스텀 훅 내에서만 호출 


// ====================================================================


// useEffect 란??
// 화면에 첫 랜더링 되었을 때(마운트)
// 다시 랜더링 될 때 (업데이트)
// 화면에서 사라질 때 (언마운트) 
// 특정 작업을 처리할 코드를 실행시켜주고 싶을 때 


import {useState, useEffect } from "react";

function Effect() {

    // // 카운트 
    // const [count, setCount] = useState(0);
    // // 이름 입력 
    // const [name, setName] = useState("");

    // 카운트 함수
    // const counter = ()=> {
    //     setCount (count + 1);
    // }

    // 이름 입력 함수 
    // const handleInput = (e)=> {
    //     setName(e.target.value)
    // }


    // useEffect(()=> {
    //     console.log('핼로')
    // }, []);
    
    // 특정 값이 변경될 때마다 실행 (이름 입력할 때마다)
    // useEffect(()=> {
    //     console.log('이름 바뀜')
    // }, [name]);


    
    // 타이머 (cleanUp 함수 사용)
    const [showTimer, setShowTimer] = useState(false);
    const handleTimer = ()=> {
        setShowTimer(!showTimer)
    }

    const Timer = ()=> {

        useEffect(()=>{
            const timer = setInterval(()=> {
                console.log('타이머 돌아감ing...')
            }, 1000);

            return()=> {
                clearInterval(timer);
                console.log('멈춰!')
            }

        }, []); //빈 배열을 넣어줘야 타이머가 한개만 생성

        return (
            <div>
                <p>타이머 시작!</p>
            </div>
        )
    }



    return (

        <>
            {/* <div>
                <span>count: {count} </span>
                <button onClick={counter}>카운트</button>
            </div>

            <br /><br />
            <div>
                <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={handleInput} />
                <p>이름: {name}</p>
            </div> */}

            <div>
                {/* showTimer가 true 일 때만 Timer 컴포넌트 보여줘!  */}
                {showTimer && <Timer />}
                <button onClick={handleTimer}>타이머 버튼</button>
            </div>
        </>
    )
}

export default Effect

