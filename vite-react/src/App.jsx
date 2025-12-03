
import './App.css'
// import Box1 from './compoments/Box1'
// import Box2 from './compoments/Box2'
import { Outlet } from 'react-router-dom'
import Header from './compoments/Header.jsx'
import Footer from './compoments/Footer.jsx'

function App() {

  return (
    <>
     {/* <Box1 />
     <br />
     <br />
     <Box2 /> */}
     <Header />

     <Outlet />

     <Footer />
    </>
  )
}

export default App
