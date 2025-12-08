import { useState } from "react"

// 커스텀 만들때는 무조건 USE를 붙여서 사용하세요.
function useCounter(initialValue = 0) {
    // usestate useEffect 등 의 hooK을 사용할 수 있다. 
    // 이니셜벨류 : 기본값을 설정하는 단어 = 0 (아무것도 안 넣으면 0으로 시작함)

    const [count, setCount] = useState(initialValue);
    //count: 현재 숫자값 처음에는 이니셜벨류initialValue값
    const plusCount = () => { setCount(count + 1); }
    const minusCount = () => { setCount(count - 1); }
    const resetCount = () => { setCount(initialValue); }

    const [secondCount, setSeconCount] = useState(0);
    const PlusCount = () => { setCount(count + 2); }
    const MinusCount = () => { setCount(count - 2); }
    const ResetCount = () => { setCount(0); }



    return { count, plusCount, minusCount, resetCount }
    return { secondCount, PlusCount, MinusCount, ResetCount }




}
/////////커스텀 훅 하나 완성~>,,< 
// 1.use000 use000 삭으로 이름 붙이기
// 2.기본값이 없으면 0 , initalValue 값
// 3.

export default useCounter