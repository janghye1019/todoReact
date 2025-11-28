import './App.css'
//불러오기 연습1
// import Box1 from './component/box1'
// import Box2 from './component/box2'
// import { Outlet } from 'react-router-dom'
// import Header from './component/header'
// import Footer from './component/footer'
function App() {

  return (
    <>
      {/* <Box1 />
      <br />
      <br />
      <Box2 />
 */}

      {/* <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul> */}
      <Header />
      <Footer />
      <Effect />
      <Outlet />
    </>
  )
}

export default App
