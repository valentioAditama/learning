import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import animation from '../image/39476-login-screen.gif';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <Form>
                <Form.Group>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" style={{width: "70vh"}} required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" style={{width: "70vh"}} required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={{width: "70vh"}} required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" style={{width: "70vh"}} required/>
                </Form.Group>
                <Button type="submit" block>Register</Button>
                <p className="mt-2">Already have an account?   
                  <a href="" className="text-decoration-none">
                      <Link to="/">Login</Link>
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

export default Register;
