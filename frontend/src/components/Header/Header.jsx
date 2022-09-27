import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { HeaderButton, HeaderLi, HeaderLogo, HeaderStyled, HeaderUl } from "./Header.styled"
import { useSelector, useDispatch } from "react-redux"
import { reset, logout } from "../../features/auth/authSlice"

const Header = () => {
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

   

  return (
    <HeaderStyled>
        <HeaderLogo>
            <Link to="/">FrMemo</Link>
        </HeaderLogo>
        <HeaderUl>
            {user ? 
            (   <>
                    <HeaderLi>{`Dear, ${user.user.name}`}</HeaderLi>
                    <HeaderLi>
                        <HeaderButton onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </HeaderButton>
                    </HeaderLi>
                </>
            )
             : 
            ( 
            <> 
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
            </>
            )}
           
        </HeaderUl>
    </HeaderStyled>
  )
}

export default Header