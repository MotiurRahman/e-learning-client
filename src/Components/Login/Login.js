import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Login = () => {
  const { loginUser, setLoader, signInwithGoogle, signInwithGithub } =
    useContext(AuthUserContext);
  const [msg, setMessage] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login using user name and password
  const accountLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        // if (!result.user.emailVerified) {
        //   toast("Please verify your email first");
        // } else {
        //   navigate(from, { replace: true });
        // }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        toast(errorMessage);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    signInwithGoogle()
      .then((result) => {
        console.log("Google Login", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  // Handle Github Login
  const handleGidhubLogin = () => {
    signInwithGithub()
      .then((result) => {
        console.log("Github Login", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="mt-5 contentWidth mx-auto borderColor">
      <h3>Login</h3>
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
        <div className="d-grid gap-2">
          <Button
            variant="dark"
            size="lg"
            className="mx-auto contentWidth"
            type="submit"
          >
            Login
          </Button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/registration">Create an account</Link>
          </p>
        </div>

        <p className="text-danger text-center mt-3">{msg}</p>
      </Form>
      <p className="text-center">Or</p>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <button
          className="mb-3 btn btn-outline-dark contentWidth"
          onClick={handleGoogleLogin}
        >
          <BsGoogle></BsGoogle> Continue with Google
        </button>
        <button
          className="btn btn-outline-dark contentWidth"
          onClick={handleGidhubLogin}
        >
          <BsGithub></BsGithub> Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
