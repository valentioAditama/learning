import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import animation from '../image/39476-login-screen.gif';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
      <div className="row">
        <div className="col-auto">
        <h5 className="text-center">Reset Password</h5>
        <Form>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Enter Password" style={{width: "60vh"}} required/>
          </Form.Group>
          <Button type="submit" block>Reset</Button>
        </Form>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;