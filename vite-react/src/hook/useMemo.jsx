// useMemo

// 메모이제이션 
// 동일한 값을 리턴하는 함수를 반복 호출할 때, 이전에 계산된 값을 저장을 해두고, 필요할 때마다 또 다시 계산 하지 않고 메모리에서 꺼내서 재사용하는 기법 
// 더 쉽게 말해 맨처음에 랜더링할 때 캐싱해두고, 그 값이 필요할 때마다 캐시해서 꺼내서 사용함 
//데이터 사용하는게 느릴 때, 업그레이드 하고 싶을 때 사용함

import { useState, useEffect, useMemo, useCallback } from 'react';

function calculate(num) {
    console.log('연산 진행중...');
    for (let i = 0; i < 1000000000; i++) { }  //복잡한 연산 시뮬레이션
    return num + 10000
}

function calculate02(num) {
    console.log('빠른 연산 진행중...');
    return num + 1
}

function UseMemo() {
    // const [number, setNumber] = useState(1);
    const [EzNumber, setEzNumber] = useState(1);

    const [isCheolsoo, setIsCheolsoo] = useState(true);

    // const sum = calculate(number);
    // useMemo 로 사용 
    // const sum = useMemo(()=> {
    //     return calculate(number)
    // },[number]);

    const sum02 = calculate02(EzNumber);

    const student = useMemo(() => {
        console.log('학생 정보 객체 만듬!')
        return {
            name: isCheolsoo ? "철수" : "영희"
        }
    }, [isCheolsoo])

    useEffect(() => {
        console.log('학생 이름이 변경됨:', student.name);
    }, [student])


    return (
        <>
            {/* <div>
            <h2>계산기</h2>
            <input 
            type="number"
            value={number}
            onChange={(e)=>{setNumber(parseInt(e.target.value))}} //parseInt 문자열을 숫자로 변환
            />
            <span>+ 10000 = {sum}</span>
        </div> */}

            <div>
                <h2>빠른 계산기</h2>
                <input
                    type="number"
                    value={EzNumber}
                    onChange={(e) => { setEzNumber(parseInt(e.target.value)) }} //parseInt 문자열을 숫자로 변환
                />
                <span>+ 1 = {sum02}</span>
            </div>

            <br />
            <div>
                <h2>학생 이름</h2>
                <div>
                    <p>이름 : {student.name}</p>
                    <button onClick={() => setIsCheolsoo(!isCheolsoo)}>이름 변경</button>
                </div>
            </div>
        </>
    )
}

export default UseMemo

// 문자열, 숫자 불리언
// const num01 =  "철수";
// const num02 =  "철수";

// num01 === num02  //true


// // 객체 형체로 담을 때 : 변수가 값이 바로 나오는게 아니라 주소가 매번 새로 생겨서 값이 출력
// const student01 = {
//         name: "철수"
//     }
// const student02 = {
//         name: "철수"
//     }

//     student01 === student02 // false