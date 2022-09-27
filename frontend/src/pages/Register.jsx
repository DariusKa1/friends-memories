import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { RegisterStyled, Register__heading, Heading__h1, Heading__p, Register__form, Form__input, Form__button} from "./Register.styled"


const Register = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

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
          <FaUser /> Register
        </Heading__h1>
        <Heading__p>Please create an account.</Heading__p>
      </Register__heading>

      <Register__form onSubmit={onSubmit}>
        <Form__input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          placeholder="Enter your name" 
          onChange={onChange}
        />
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
        <Form__input 
          type="password" 
          id="password2" 
          name="password2" 
          value={password2} 
          placeholder="Confirm your password" 
          onChange={onChange}
        />
        <Form__button type="submit">Create account</Form__button>
      </Register__form>
    </RegisterStyled>
  )
}

export default Register