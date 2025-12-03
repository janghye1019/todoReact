import { useState } from 'react'

function TodoInput({ onAdd }) {
    //변수선언: nextext는 베이스 변형가능하게 setnewtext다 'set(설정)' 
    // 'useState':너를 관찰하고 변형하면 반영한다
    const [newText, setNewText] = useState("");


    //추가 버튼을 눌렀을때 실행되는 함수선언
    // addNewText는 추가 '버튼'을 누를 때 실행되는 이벤트

    //새로운 텍스트가 입력될때 
    function addNewText() {
        // trim():빈 내용을 추가하지 않기 위한 방지
        // 무조건'==="빈 내용을 방지하기 위한 trim을 붙임
        if (newText.trim() === "") {
            //그리고 반환한다'초기화값으로'.
            return setNewText("")
        }
        //클릭시 onAdd(새로운텍스트); 실행하고,
        onAdd(newText);
        //다시 초기화한다
        setNewText("");
    }
    // keypress,keyDown,keyUp
    // enter를 누루면 발생하는 이벤트정의
    function KeyDown(e) {
        //이벤트 발생하는 키가 '엔터'일때, 텍스트가 넣어진다.
        if (e.key === 'Enter') {
            addNewText()
        }
    }


    return (
        <div >
            <h2 className='list-title'>할 일 추가</h2>
            <div className='input-wrap'>
                {/* 사용자가 newText를 바꿀때마다 갱신된다. */}
                <input type="text" placeholder='할 일을 입력해주세요' value={newText} onChange={(e) => setNewText(e.target.value)} className='input-add' onKeyDown={(KeyDown)} />
                <button onClick={addNewText} className='btn'>추가</button>
            </div>
        </div >
    )
}

export default TodoInput 