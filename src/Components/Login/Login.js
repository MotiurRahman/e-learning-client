import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";

const Login = () => {
  const { loginUser, setLoader } = useContext(AuthUserContext);
  const [msg, setMessage] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const accountLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          toast("Please verify your email first");
        } else {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        toast(errorMessage);
      })
      .finally(() => {
        setLoader(false);
      });
    console.log(email, password);
  };
  return (
    <div className="mt-5">
      <h2>Please login to your account.</h2>
      <Form onSubmit={accountLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" className="mx-auto" type="submit">
          Submit
        </Button>
        <p className="text-danger">{msg}</p>
      </Form>
    </div>
  );
};

export default Login;
