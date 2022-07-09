import { Form, Button, Col, Row } from 'react-bootstrap'
import useForm from '../components/useForm'
import validateInfo from '../components/validateInfo'
import { useState } from 'react'

const Signup = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo)

  return (
    <div className="signup">
      <h1 className="text-center text-dark">Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Form.Group
            className="mb-3 justify-content-md-center"
            as={Col}
            md="6"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Form.Group
            className="mb-3 justify-content-md-center"
            as={Col}
            md="6"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Form.Group
            className="mb-3 justify-content-md-center"
            as={Col}
            md="6"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              id="validationForm"
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Button type="submit" className="btn-primary">
            Register
          </Button>
        </Row>
      </Form>
    </div>
  )
}

export default Signup
