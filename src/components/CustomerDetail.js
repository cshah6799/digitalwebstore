import { useState } from 'react'

const CustomerDetail = ({ data }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('')

  fetch('')
    .then((res) => {
      return res.json()
    })
    .then((users) => {
      console.log(users)
      users.forEach((element) => {
        console.log(element)
        if (element.email == data) {
          setFirstName(element.firstName)
          setLastName(element.lastName)
          setRole(element.role)
        }
      })
    })

  return (
    <div className="CustomerDetail text-center text-dark">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {data}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default CustomerDetail
