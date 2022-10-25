import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Registration = () => {
  const {
    createUser,
    updateUserProfile,
    emailVerification,
    signInwithGoogle,
    signInwithGithub,
  } = useContext(AuthUserContext);
  const [msg, setMessage] = useState();
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUpdatUserProfile = (displayName, photoURL) => {
    const profile = {
      displayName: displayName,
      photoURL: photoURL,
    };
    console.log(profile);
    updateUserProfile(profile)
      .then((result) => {
        emailVerification().then(() => {
          setMessage(
            "An email verificaion mail has been send to your email. Please verify it"
          );
          toast(
            "An email verificaion mail has been send to your email. Please verify it"
          );
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const accountRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdatUserProfile(displayName, photoURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        toast(errorMessage);
      });
    // setMessage("user Successfully Created");
  };

  const handleAccepted = (e) => {
    console.log(e.target.checked);
    setAccepted(e.target.checked);
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
    <div className="mt-5 w-75 w-lg-50 mx-auto">
      <h3>Create an Accout</h3>
      <Form onSubmit={accountRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            placeholder="Enter Full Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter photoURL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">Terms and Condition</Link>
              </>
            }
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="dark"
            size="lg"
            className="mx-auto w-75 w-lg-50"
            type="submit"
            disabled={!accepted}
          >
            Create an account
          </Button>
          <p className="text-center">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
        <p className="text-center text-danger">{msg}</p>
      </Form>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <button
          className="mb-3 btn btn-outline-dark w-50"
          onClick={handleGoogleLogin}
        >
          <BsGoogle></BsGoogle> Continue with Google
        </button>
        <button
          className="btn btn-outline-dark w-50"
          onClick={handleGidhubLogin}
        >
          <BsGithub></BsGithub> Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Registration;
