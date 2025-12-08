import { useState } from "react"

function useInput() {
    //내가 작성한거, > value 값을 사용해야해요,
    const [name, setName] = useState(initialValue = '');
    const changeName = (e) => { setName(e.target.value) }
    const resetName = () => { setName(initialValue) };
    // -----------------------------------------------나이
    const [age, setAge] = useState(5);
    const changeAge = (e) => { setAge(e.target.value) }
    const resetAge = () => { setAge(5) };

    return { name, changeName, resetName }
    return { age, changeAge, resetAge }
}

export default useInput