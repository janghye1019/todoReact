import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// 훅 임포트
// import Effect from "./hook/useEffect"
import Ref from "./hook/useEffect"

// const router = createBrowserRouter([
//   {
//     // pate의 슬래시를 children 애들이 상속 받아서 "하위 녀석은 넣지않는다"
//     path: "/", //경로 접속시 (메인페이지에 들어왔을때) 
//     //해당(main) 컴포넌트를 보여줘
//     element: <Home />,
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   },
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router}> </RouterProvider> */}
    {/* <Effect /> */}
    <Ref />
  </StrictMode>,
)
