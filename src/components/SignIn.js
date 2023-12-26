import { useState } from "react";
import { useUserAuth } from "../UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn } = useUserAuth();
  let navigate = useNavigate();



  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
    </Form>
  );
};

export default SignIn;
