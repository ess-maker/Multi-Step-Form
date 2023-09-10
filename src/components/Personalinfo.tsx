import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./shred/Input";
import "../scss/pages/_personalinfo.scss";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";


const Personalinfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [err, setErr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validationRules = {
    name: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumber: /^[0-9\s]+$/
  };

  const navigate = useNavigate();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform any necessary actions with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);

    if (email === "") {
      setEmailError("This field is required");
    } else if (email.match(validationRules.email)) {
      setEmailError("");
    } else {
      setEmailError("This Email is invalid");
    }

    if (phoneNumber === "") {
      setPhoneNumberError("This field is required");
    } else if (phoneNumber.match(validationRules.phoneNumber)) {
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("This phone Number is invalid");
    }

    if (name === "") {
      setErr("This field is required");
    } else if (name.match(validationRules.name)) {
      setErr("");
    } else {
      setErr("This Name is invalid");
    }

    if (
      email.match(validationRules.email) &&
      phoneNumber.match(validationRules.phoneNumber) &&
      name.match(validationRules.name)
    ) {
      alert("you are the best ");
      navigate("/plan"); // Use navigate function to redirect to "/plan"
    }
  };

  console.log(err);

  return (
    <div className="Personal_info">
      <h1 className="Personal_titel">Personal info</h1>
      <p className="Personal_discrption">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          uniq="Name"
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={handleNameChange}
          error={err}
        />
        <Input
          uniq="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <Input
          uniq="Phone Number"
          type="text"
          placeholder="e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          error={phoneNumberError}
        />
        <Buttons to = {"/plan"} />
      </form>
    </div>
  );
};

export default Personalinfo;