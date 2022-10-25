import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";

const Registration = () => {
  const { createUser, updateUserProfile, emailVerification } =
    useContext(AuthUserContext);
  const [msg, setMessage] = useState();
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

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
  return (
    <div className="mt-5">
      <h4>Please complete your registration process</h4>
      <Form onSubmit={accountRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter photoURL"
          />
        </Form.Group>
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
        <Button
          variant="primary"
          className="mx-auto"
          type="submit"
          disabled={!accepted}
        >
          Submit
        </Button>
        <p className="text-danger">{msg}</p>
      </Form>
    </div>
  );
};

export default Registration;
