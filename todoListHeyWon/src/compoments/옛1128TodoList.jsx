// import './App.css'
import { useState } from "react";

//자식이 받아들인 변수들
function TodoList({ todos, Delete, onToggle, onEdit, onUpdate }) {

    // 필터영역 추가 (전체/미완료/완료)
    const [filter, setFilter] = useState("전체");
    const [editText, setEditText] = useState("");

    function filterTodos() {
        if (filter === "전체") {
            return todos;
        } else if (filter === "미완료") {
            return todos.filter(todo => !todo.done); //미완료일 때 
        } else if (filter === "완료") {
            return todos.filter(todo => todo.done); //완료일 때
        }
    }
    //필터 투드를 변수에 담아준다 : 왜? :
    const todosShow = filterTodos(); //필터링된 할일 목록
    //삼학연산자로 했을때 : 필터버튼에 'active'를 추가하거나 빼려는 명령어
    // <button className={`filter-btn ${filter === "전체" ? "active" : ""}`}



    return (
        // --------------1121 버튼생성함
        <div>
            <h2 className='list-title'>할일 목록</h2>
            <div className="filter-wrap">
                <button
                    className={`filter-btn ${filter === "전체" ? "active" : ""}`}
                    // 기본 버튼 이름에, 맞으면 활동을 추가하고 틀리면 넣을 값이 없다
                    onClick={() => setFilter("전체")}>전체</button>
                <button
                    className={`filter-btn ${filter === "미완료" ? "active" : ""}`}
                    onClick={() => setFilter("미완료")}>미완료</button>
                <button
                    className={`filter-btn ${filter === "완료" ? "active" : ""}`}
                    onClick={() => setFilter("완료")}>완료</button>
            </div>


            {/* 리스트가 없을 때 '아직 할일이 없어요' 출력  */}
            {/* 할일목록 배열에 하나 있으면 찐 없으면 false */}
            {
                todosShow.length > 0 ?
                    <ul className='todo-list'>
                        {/*찾아서 사용한다:(배열의 실제값, 값의 순서) */}
                        {todosShow.map((item) => {

                            const edit = item.isEditing;

                            {/* 수정중 목록 화면  */ }
                            {/* 수정 중 목록 화면  찐일 때 수정중 화면이 나오고*/ }
                            const editView = (
                                <li key={item.id} id={item.id}>
                                    <input type="text"
                                        className="edit-input"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button className="save-btn" onClick={() => { onUpdate(item.id, editText) }}>저장</button>
                                    {/* 취소버튼은 기존 수정중 화면으로 돌려줘야함 */}
                                    <button className="cancel-btn" onClick={() => { onEdit(item.id) }}>취소</button>
                                </li>
                            )

                            {/* 출력 목록 화면  */ }
                            {/* 출력 목록 화면  거짓이면 체크상태 화면이 나온다.const nomal view*/ }
                            const normalView = (
                                <li key={item.id} id={item.id}>
                                    <input
                                        type="checkbox"
                                        checked={item.done}
                                        onChange={() => onToggle(item.id)} />
                                    {/* 조건문, 삼항연산자형식  */}

                                    {/* 완료 안되었을 때  */}
                                    {/* {item.text}  */}

                                    {/* 완료되었을 때  */}
                                    {/* <del>{item.text} </del>  */}

                                    {item.done ? (<del>{item.text} </del>) : item.text}

                                    {/* 수정 버튼 추가  */}
                                    <button className="edit-btn"
                                        onClick={
                                            () => {
                                                onEdit(item.id); //수정중 화면으로 전환 (isEditing -> true)
                                                setEditText(item.text); //수정할 때 기존 텍스트를 입력창에 넣기
                                            }
                                        }
                                    >수정</button>
                                    <button className="delete-btn" onClick={() => Delete(item.id)}>X</button>
                                </li>
                            );

                            return (edit ? editView : normalView);
                        })}
                    </ul>
                    :
                    <p className='empty-list'>아직 할일이 없어요</p>
            }
        </div>

    )
}

export default TodoList