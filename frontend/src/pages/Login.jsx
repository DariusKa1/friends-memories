import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login, reset } from "../features/auth/authSlice"
import { 
  RegisterStyled, 
  RegisterHeading, 
  HeadingH1, 
  HeadingP, 
  RegisterForm, 
  FormInput, 
  FormButton
} from "./Register.styled"
import Spinner from "../components/Spinner/Spinner"


const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if(isError){
      alert(message)
      dispatch(reset())
    }

    if(isSuccess || user){
      navigate("/")
      dispatch(reset())
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if(isLoading) return <Spinner />

  return (
    <RegisterStyled>
      <RegisterHeading>
        <HeadingH1>
          <FaSignInAlt />Login
        </HeadingH1>
        <HeadingP>Please login to an account.</HeadingP>
      </RegisterHeading>

      <RegisterForm onSubmit={onSubmit}>
        <FormInput 
          type="text" 
          id="email" 
          name="email" 
          value={email} 
          placeholder="Enter your email" 
          onChange={onChange}
        />
        <FormInput 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          placeholder="Create your password" 
          onChange={onChange}
        />
        <FormButton type="submit">Log in</FormButton>
      </RegisterForm>
    </RegisterStyled>
  )
}

export default Login