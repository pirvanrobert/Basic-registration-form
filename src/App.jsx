import React, { useState } from "react";
import "./App.css";

function Form() {
  const [valueInput, setValueInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (e) => {
    setValueInput({
      ...valueInput,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setValueInput({
      ...valueInput,
      lastName: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setValueInput({
      ...valueInput,
      email: e.target.value,
    });
  };

  const handleRegisterButton = (e) => {
    e.preventDefault();
    if (valueInput.firstName && valueInput.lastName && valueInput.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleRegisterButton} className="register-form">
        {submitted && valid ? (
          <div className="registerging-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={handleFirstNameChange}
          value={valueInput.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !valueInput.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameChange}
          value={valueInput.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !valueInput.lastName ? (
          <span>Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailChange}
          value={valueInput.email}
          className="form-field"
          placeholder="E-mail"
          name="email"
        />
        {submitted && !valueInput.email ? (
          <span>Please enter a email adress</span>
        ) : null}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Form;
