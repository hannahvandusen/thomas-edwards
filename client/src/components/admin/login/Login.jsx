import React, { useRef } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"

function Login({ updateToken }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    let bodyObj = JSON.stringify({ email, password })

    const url = `http://localhost:4000/admin/login`
    const headers = new Headers({
      "Content-Type": "application/json",
    })

    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()

      console.log(data)

      if (data.admin) {
        console.log(data)
        localStorage.setItem("token", `${data.token}`)
        localStorage.setItem("subscriber", `${data.token}`)
        window.location.reload(false)
      } else {
        alert(`${data.error}. Try again!`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{height: "80vh"}}>
      <h1 style={{color: "white", fontFamily: "Georgia, serif"}}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup style={{color: "white"
        }}>
          <Label>Email</Label>
          <Input innerRef={emailRef} type="email" />
        </FormGroup>
        <FormGroup style={{color: "white"
        }}>
          <Label>Password</Label>
          <Input innerRef={passwordRef} type="password" />
        </FormGroup>
        <Button
          type="submit"
          style={{ backgroundColor: "#ffcd51", color: "black" }}
        >
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
