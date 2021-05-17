import React , { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import animation from '../image/39476-login-screen.gif';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email, 
      password
    });
    setToken(token);
  }
  return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter Email" style={{width: "70vh"}} required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter Password" style={{width: "70vh"}} required/>
                </Form.Group>
                <Form.Group>
                  <div className="row">
                    <div className="col-6">
                      <Form.Check type="checkbox" label="Remember me"/>
                    </div>
                    <div className="col-6">
                      <Link to="/forgotpassword" className="d-flex justify-content-end">
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                </Form.Group>
                <Button type="submit" block>Login</Button>
                <p className="mt-2">Don't have an account?  
                  <a href="" className="text-decoration-none">
                      <Link to="/register">Register</Link>
                  </a>
                </p>
              </Form>
            </div>
            <div className="col-6">
              <Image src={animation} fluid />
            </div>
          </div>
        </div>
      </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
