import { useState } from 'react';
import TodoList from './compoments/TodoList';
import TodoInput from './compoments/TodoInput';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    // newTodo 같은 메신저 :매개변수,파라미

    //무조건 원본은 그대로 두고, 변형하기
    // function addTodo(newTodo) {
    //   setTodos([...todos, newTodo])
    // }

    // -----------------------todo done
    // [
    //   {
    //     text:"자바스크랩트 공부",
    //     done: true /false
    //   }
    // ]

    // text: 할일 내용, done: 완료 여부 
    function addTodo(newTodo) {
        setTodos([...todos, { text: newTodo, done: false }]);
        // 새항목 추가시 완료상태는 false(미완료)
    }

    //할일 완료 상태 이벤트(체크박스)
    function ToggleTodo(indexToToggle) {
        const newTodos = todos.map((item, index) => {
            if (index === indexToToggle) { //해당 index가 내가 클릭한 index면
                //원래 값들은 그대로 두고, 끝내면 반대로 바꿀꺼야
                return { ...item, done: !item.done }
            }
            return item;
        });
        setTodos(newTodos)//새 배열로 상태 업데이트
    }

    // function DeleteTodo(deleteIndex) {
    // const newTodos = [...todos]
    // //기존배열을(원본)을 복사를 한다
    //딜리트인덱스를 하나 삭제할 것이다. :기존 배열에서 빼준다(Splice) 
    // newTodos.splice(deleteIndex, 1)
    // setTodos(newTodos)//배열을 재배치 업데이트 한다@
    // }

    function DeleteTodo(deleteIndex) {
        //filter:배열을 하나씩 훑고 조건에 맞는 것만 새 배열로 전환
        //아이템들 중에서 골른 것들 중에서 클릭 안한 애는 다시 필터로 담아서 넣겠다. 
        // const newTodos = todos.filter((item,index) => index !== deleteIndex);
        // setTodos(newTodos)

        //윗글을 한줄로 작성하면
        // setTodos(todos.filter((item, index) => index !== deleteIndex));
        // > item > _ 로 바꾼이유: 값이 존재하지만, 우린 item을 안 쓸거예요.
        // (item)값은 필요없고, 순서만(index)만 필요해요. 
        setTodos(todos.filter((_, index) => index !== deleteIndex));
    }

    return (
        <div className='app'>
            <h1 className='title'>To do List</h1>
            <div className='contents'>
                {/* 인풋 영역 */}
                {/* 투두인풋의 onadd(메서드) */}
                <TodoInput onAdd={addTodo} />
                {/* 목록 영역 */}
                <TodoList todos={todos} Delete={DeleteTodo} onToggle={ToggleTodo} />
            </div>
        </div>
    )
}
export default App
