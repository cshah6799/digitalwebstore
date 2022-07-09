import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

const useForm = (validateInfo) => {
  const history = useHistory()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    role: 'user',
    username: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateInfo(values))
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        alert('You have successfully registered!')
        history.push('/login')
      } else {
        alert('This email is already been used. Please choose another email!')
      }
    })
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
