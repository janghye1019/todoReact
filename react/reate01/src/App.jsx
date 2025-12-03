// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Btn from './compoments/button'
import Header from './compoments/Header'
import Footer from './compoments/Footer'
import Main from './compoments/Main'



function Bio() {

  let title = "타이틀영역입니다"
  let info = { name: "홍길동", age: 25 };


  // 변수 담기 데이터 바인딩
  return (
    <>
      <div className="intro">
        {/* 변수를 넣을 때 중괄호{ }로 감싸줌 */}
        {/* <h2>{title}</h2> */}
        <h2 className={title}>{title}</h2>

        {/* 클래스 명도 변수 값으로 할 수 있다 */}
      </div>

      {/* 변수가 개체일때 작성하기 */}
      <div className="intro">
        {/* <h1>Welcome to my website!</h1> */}
      </div>

      <p className="summary" style={{ color: 'red', }}>
        {info.name}의 나이는 {info.age}살 입니다.
        <br /><br />
        <b>And <i>pictures</i></b>of scientists!
      </p>

    </>
  );

}

function TodoList() {

  let person = {
    name: '김영수',
    age: 30,
    jod: '개발자',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  return (
    <>
      <div>
        <div style={person.theme}>
          <h1>{person.name}'s Todos</h1>
          <img
            className="poster"
            src="../src/assets/포스터.jpg"
            alt="포스터이미지"
          />
          <ul>
            {/* 한번에 몰아서 쓰기 */}
            <li>{person.name + '는' + person.jod + '이고 올해' + person.age + '살 입니다'}</li>
            {/* 따로쓰기 */}
            <li>따로쓰기 :{person.name}는 {person.jod}이고, 올해 나이{person.age} 입니다</li>
          </ul>
        </div>
      </div>
    </>
  );
}

//함수 선언 후 한꺼번에 내보내는 방법 
function App() {
  return (
    <>
      <Header />
      <Main />
      <Bio />
      <TodoList />
      <Footer />

    </>
  )
}
// 함수가 여러 개 선언한 걸 넣을 경우
// export {Header, Main , Bio, TodoList}
export default App
