import { Link, useNavigate } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <ul>
                    <li>CEO: 홍길동</li>
                    <li>개인정보처리동의</li>
                    <li>coptright@홍길동전장화홍련</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </footer >
        </>
    )
}

export default Footer;