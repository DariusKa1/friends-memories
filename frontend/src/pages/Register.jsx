import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner/Spinner"
import { 
  FormButton, 
  FormInput, 
  HeadingH1, 
  HeadingP, 
  RegisterForm, 
  RegisterHeading, 
  RegisterStyled 
} from "./Register.styled"



const Register = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if(isError){
      alert(message)
    }

    if(isSuccess || user){
      navigate("/")
      dispatch(reset())
    }
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      alert("Password do not match")
    }else{
      const userData = {
        name, 
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) return <Spinner />
  
  return (
    <RegisterStyled>
      <RegisterHeading>
        <HeadingH1>
          <FaUser /> Register
        </HeadingH1>
        <HeadingP>Please create an account.</HeadingP>
      </RegisterHeading>

      <RegisterForm onSubmit={onSubmit}>
        <FormInput 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          placeholder="Enter your name" 
          onChange={onChange}
        />
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
        <FormInput 
          type="password" 
          id="password2" 
          name="password2" 
          value={password2} 
          placeholder="Confirm your password" 
          onChange={onChange}
        />
        <FormButton type="submit">Create account</FormButton>
      </RegisterForm>
    </RegisterStyled>
  )
}

export default Register