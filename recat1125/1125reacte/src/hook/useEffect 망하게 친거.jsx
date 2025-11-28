// 훅? : 리액트 컴포넌트에서 상태관리 및 생명주기 기능을 할 수 있게 해주는 특수한 함수
// 컴포넌트에서 리액트 기능을 연결 해주는 특별한 함수

// 1. 최상위에서만 호출이 가능하다
// 2. 리액트 함수 컴포넌트 또는 커스텀 푹 내에서만 호출 >> 제일 첫번째로 쓴 함수 안에 함수 안에는 안됀다

//useEffect : 첫 랜더링 됐을 때(마운트), 다시 랜더링 될 떄(업데이트),
// 화면에서 사라질 때(언마운트) >>> 위의 상황이 발생할때 , 특정작업 처리할 코드를 싱행시켜주고 싶을 때, 

import { useState, useEffect } from "react";

function Effect() {

    const [count, setCount] = useState(0);
    const counter = () => { setCount(count + 1); }
    //이름입력 : 응 놓쳤쥬
    const [name, setName] = useState("");

    const handleInput = (e) => { setName(e.target.value) };

    // useEffect(() => {
    //     console.log('할수있따')
    // }, []); //빈 배열을 넣으면 업데이트를 중단을 할수가 있다 

    useEffect(() => {
        console.log('할수있따')
    }, [name]); // 특정값(현재 작성한 이름값)이 변경될 때마다  

    return (
        <>
            <div>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>카운트1</button>
                <button onClick={counter}>카운트2</button>
            </div>

            <br />
            <br />

            <div>
                <input type='text' placeholder="이름을 입력해주세요" value={name} onChange={handleInput}>
                    <p>이름:{name}</p>
                </input>
            </div>
        </>
    )
}

export default Effect;




///////////////민재꺼에서 변형 ing //////////////////////////

// 훅? : 리액트 컴포넌트에서 상태관리 및 생명주기 기능을 할 수 있게 해주는 특수한 함수
// 컴포넌트에서 리액트 기능을 연결 해주는 특별한 함수

// 1. 최상위에서만 호출이 가능하다
// 2. 리액트 함수 컴포넌트 또는 커스텀 푹 내에서만 호출 >> 제일 첫번째로 쓴 함수 안에 함수 안에는 안됀다

//useEffect : 첫 랜더링 됐을 때(마운트), 다시 랜더링 될 떄(업데이트),
// 화면에서 사라질 때(언마운트) >>> 위의 상황이 발생할때 , 특정작업 처리할 코드를 싱행시켜주고 싶을 때, 

import { useState, useEffect } from "react";
function Effect() {
    // 카운트
    // const [count, setCount] = useState(0);
    // 이름 입력
    // const [name, setName] = useState("");
    //  카운트 함수
    // const counter = () => {
    // setCount(count + 1);
    // }
    // 이름 함수
    // const handleInput = (e) => {
    // setName(e.target.value)
    // }
    // 처음에만 실행
    /*
    useEffect(()=> {
        console.log('ㅎㅇ');
    }, []);
    */
    // 특정 값이 변경될 때마다 실행
    // useEffect(() => {
    //     console.log('ㅎㅇ');
    // }, [name]);


    // ----------타이머 돌아가는 기능 (cleanUP 함수 사용)
    const [showTimer, setShowTimer] = useState(false);
    //셋쇼타이머가 아닐때 쇼타이머로 바꿔줘라
    const handleTimer = () => {
        setShowTimer(!showTimer)
    }

    //타이머
    const Timer = () => {
        useEffect(() => {
            const timer = setInterval(() => {
                console.log('시간돌아가는중')
            }, 1000);

            //버튼클힐할때 멈춰주는 기능
            return () => {
                clearInterval(timer);
                console.log('stop-!')
            }

        }, []) //빈 배열을 넣어야 한번씩 돌아감 안그럼 두번 돈다.
        return (
            <>
                <div>
                    <p>타이머시작</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <span>count:{count}</span>
                <button onClick={() => setCount(count + 1)}>카운트</button>
            </div>
            <br /><br />
            <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={handleInput} />
            <p>이름:{name} </p>

            <div>
                <Timer />
                {/* //버튼클릭시 타이머 시작  */}
                {/* //타이머가 찐일때만 타이머를 보여줘  */}
                {showTimer && <Timer />}
                <button onClick={handleTimer} >타이머버튼</button>
            </div>
        </>
    )
}
export default Effect