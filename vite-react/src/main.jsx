import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'


// hook 
// import Effect from './hook/useEffect'
// import Ref from './hook/useRef'
// import Context from './hook/useContext/Main'
// import UseMemo from './hook/useMemo'
// import useCounter from './hook/customhook/customHook'
import CustomHook from './hook/customhook/customHook'

import './App.css'


// const router = createBrowserRouter([
//   {
//     path: "/",  //어떠한 url 경로로 접속했을 때
//     // element: <div>메인페이지</div> //해당 컴포넌트를 보여줘
//     element: <App />,
//     children: [
//       {
//         path: "",  
//         // element: <div>회사소개 페이지</div> 
//         element: <Home />
//       },
//       {
//         path: "about",  
//         // element: <div>회사소개 페이지</div> 
//         element: <About />
//       },
//         {
//         path: "contact",  
//         // element: <div>contact 페이지</div>
//         element: <Contact /> 
//       }
//     ]
//   },
// ])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    {/* <App /> */}
    {/* <RouterProvider router={router}></RouterProvider> */}

    {/* hook  */}
    {/* <Effect /> */}
    {/* <Ref /> */}
    {/* <Context /> */}
    {/* <UseMemo /> */}
    {/* <useCounter /> */}
    <CustomHook />
    {/* </StrictMode>, */}

  </>
)
