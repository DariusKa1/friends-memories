import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { HeaderLi, HeaderLogo, HeaderStyled, HeaderUl } from "./Header.styled"
const Header = () => {
  return (
    <HeaderStyled>
        <HeaderLogo>
            <Link to="/">FrMemo</Link>
        </HeaderLogo>
        <HeaderUl>
            <HeaderLi>
                <Link to="/login">
                    <FaSignInAlt /> Login
                </Link>
            </HeaderLi>
            <HeaderLi>
                <Link to="/register">
                    <FaUser /> Register
                </Link>
            </HeaderLi>
        </HeaderUl>
    </HeaderStyled>
  )
}

export default Header