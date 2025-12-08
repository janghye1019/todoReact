import { useState } from "react"
import useCounter from "./useCounter"; //훅만 들고 가져오기
import useInput from "./useInput";

function CustomHook() {

    // const [count, setCount] = useState(0);
    // const plusCount = () => { setCount(count + 1); }
    // const minusCount = () => { setCount(count - 1); }
    // const resetCount = () => { setCount(0); }

    // const firstCount = useCounter(0);

    // const [Seconcount, setSeconCount] = useState(0);
    // const seconPlusCount = () => { setCount(count + 2); }
    // const seconMinusCount = () => { setCount(count - 2); }
    // const seconResetCount = () => { setCount(0); }

    // const secondCount = useCounter(0);

    // ==================================================================

    // input 예제
    // const [name, setName] = useState("");

    // const changeName = (e) => {
    //     setName(e.target.value)
    // }

    // const resetName = () => { setName('') };
    const InputName = useInput('');

    // 나이 입력--------------------------------------------
    // const [age, setAge] = useState(5);

    // const changeAge = (e) => {
    //     setAge(e.target.value)
    // }
    // const resetAge = () => { setAge(5) };

    const InputAge = useInput(0);

    return (
        <>

            {/* <div>
                <h2>카운터 예제</h2>
                <p>첫번째 카운터: {count}</p>
                <button onClick={plusCount}>증가+1</button>
                <button onClick={minusCount}>감소-1</button>
                <button onClick={resetCount}>초기화</button>
            </div> */}

            {/* 내가 만든 훅 응용하기 */}
            {/* <div>
                <h2>카운터 예제</h2>
                <p>첫번째 카운터: {firstCount.count}</p>
                <button onClick={firstCount.plusCount}>증가+1</button>
                <button onClick={firstCount.minusCount}>감소-1</button>
                <button onClick={firstCount.resetCount}>초기화</button>
            </div> */}



            {/* <div>
                <h2>카운터 예제</h2>
                <p>두번째 카운터: {Seconcount}</p>
                <button onClick={seconPlusCount}>증가+2</button>
                <button onClick={seconMinusCount}>감소-2</button>
                <button onClick={seconResetCount}>초기화</button>
            </div> */}
            {/* <div>
                <h2>카운터 예제</h2>
                <p>두번째 카운터: {secondCount.Seconcount}</p>
                <button onClick={secondCount.PlusCount}>증가+2</button>
                <button onClick={secondCount.MinusCount}>감소-2</button>
                <button onClick={secondCount.ResetCount}>초기화</button>
            </div> */}

            <br /><br />

            <div>
                <h2>입력 관리 예제</h2>
                <div>
                    <label>이름:</label>
                    <input
                        type="text"
                        value={InputName.name}
                        onChange={InputName.changeName}
                        placeholder="이름을 입력해주세요" />
                    <button onClick={InputName.resetName}>리셋</button>
                </div>
                <div>
                    <label>나이:</label>
                    <input
                        type="number"
                        value={InputAge.age}
                        onChange={InputAge.changeAge}
                    />
                    <button onClick={InputAge.resetAge}>리셋</button>
                </div>

                <div>
                    <p>

                        이름 : {InputName.name}
                        <br />
                        나이 : {InputAge.age}
                    </p>
                </div>
            </div>
        </>
    )
}
export default CustomHook