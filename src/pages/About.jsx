import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const buttonClickMeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h1>My About Page</h1>
      <p>
        Go to <Link to="/">click Home page</Link>.
      </p>
      <button onClick={buttonClickMeHandler}>Click me </button>
    </>
  );
}
