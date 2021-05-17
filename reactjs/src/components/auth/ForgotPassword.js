import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import animation from '../image/39476-login-screen.gif';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
      <div className="row">
        <div className="col-auto">
        <h5 className="text-center">Forgot Password</h5>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" style={{width: "60vh"}} required/>
          </Form.Group>
          <Button type="submit" block>Submit</Button>
        </Form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;