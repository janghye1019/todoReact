
import './App.css'
import { useState } from 'react';





// useState : 상태(자료)를(카운터)를 저장해주는 저장소
//state: 상태라는 뜻

function State() {
    //(0):초깃값 / let count = 0;
    // 초깃값을 담는 변수 count / (클릭) 변경되는 함수를 담는 setCount
    //[함수, 변경될 함수]  
    const [Count, setCount] = useState(0);
    const [Name, setName] = useState(''); // 변형되는 값이라서 비어있는 칸으로 남겨두기
    const [Plus, setHi] = useState('안녕하세요');


    let counter = 1;

    // ---------1 올리는 함수
    function Click() {
        counter++;
        // console.log(counter)
    }

    function Click() {
        // setCount(5); //숫자만
        // setCount('안녕하시게')//문자
        setCount(Count + 1)//기본 + 1 : 클릭 행위시에 1이 추가된다
    }
    // -----------------------------------여기까지만 분석작성함1110ㄴ
    return (
        <>
            <h2>숫자열</h2>
            {/* <button onClick={Click}>카운터 버튼{Count}</button> */}

            {/* 함수 입력한거 담는 방법 */}
            {/* <button onClick={function Click() { setCount(Count + 1) }}>카운터 버튼{Count}</button> */}

            {/* <p>현재 숫자: {Count}</p> */}
            {/* 화살표 함수로 담는 방법 */}
            <button onClick={() => setCount(Count + 1)}>+1 올리기 버튼{Count}</button>
            <button onClick={() => setCount(Count - 1)}>-1 내리기 버튼{Count}</button>

            {/* 초기화 버튼 */}
            <button onClick={() => { setCount(0) }}>초기화{Count}</button>

            <br />
            <br />
            <br />

            <h2>문자열</h2>
            <div>
                <input type="text" value={Name} placeholder='이름을 입력해주세요'
                    onChange={function (e) { setName(e, target, value) }}
                />
                <p>안녕하세요.{Name}</p>
                {/* 삼학연산자,조건문 찾기 */}
                <p>안녕하세요.{Name ? Name : '아직 이름이 없네요'}</p>

            </div>

            <br />
            <br />
            <br />
            {/* 버튼 클릭시, 클릭때마다 안녕하시오 문구 게속 출력 */}
            <button onClick={() => { setHi(Plus + '안녕하세요') }}>문장추가</button>
            <p>{Plus}</p>


        </>
    )
}

export default State
