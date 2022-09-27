import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { RegisterStyled, Register__heading, Heading__h1, Heading__p, Register__form, Form__input, Form__button} from "./Register.styled"


const Login = () => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <RegisterStyled>
      <Register__heading>
        <Heading__h1>
          <FaSignInAlt />Login
        </Heading__h1>
        <Heading__p>Please login to an account.</Heading__p>
      </Register__heading>

      <Register__form onSubmit={onSubmit}>
        <Form__input 
          type="text" 
          id="email" 
          name="email" 
          value={email} 
          placeholder="Enter your email" 
          onChange={onChange}
        />
        <Form__input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          placeholder="Create your password" 
          onChange={onChange}
        />
        <Form__button type="submit">Log in</Form__button>
      </Register__form>
    </RegisterStyled>
  )
}

export default Login