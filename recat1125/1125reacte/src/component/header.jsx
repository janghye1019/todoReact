// import { Navigate, useNavigate } from "react-router-dom"; //01 불러오기
// import { Link, useNavigate } from "react-router-dom"; //02 Link 사용하기
import { NavLink, useNavigate } from "react-router-dom"; //03 Link 사용하기
// 메뉴 추가방법
// 1.useNavigate


// function Header() {
//     const Navigate = useNavigate();
//     return (
//         <>
//             <header>

//                 <ul>
//                     <li onClick={() => Navigate('/')}> HOME</li>
//                     <li onClick={() => navigator('/about')} >ABOUT</li>
//                     <li onClick={() => navigator('/contact')} > CONTACT</li>
//                 </ul>
//             </header >
//         </>
//     )
// }
// ------------------------------------------------------------------------------

// <link>를 사용하여 컴포넌트
// function Header() {
//     const Navigate = useNavigate();
//     return (
//         <>
//             <header>

//                 <ul>
//                     <li>
//                         <Link to="/">
//                             HOME
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="About">
//                             ABOUT
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="Contact">
//                             CONTACT
//                         </Link>
//                     </li>
//                 </ul>
//             </header >
//         </>
//     )
// }
// ----------------------------------------------------------------------------------
// 03.NavLink
function Header() {

    return (
        <>
            <header>

                <ul>
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) => { return isActive ? "on" : "" }}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="About"
                            className={({ isActive }) => { return isActive ? "on" : "" }}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="Contact"
                            className={({ isActive }) => { return isActive ? "on" : "" }}>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </header >
        </>
    )
}





export default Header;