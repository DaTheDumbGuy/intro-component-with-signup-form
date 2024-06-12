import Input from "./Input/Input";
import FormBtn from "./FormBtn/FormBtn";
import formStyles from "./form.module.scss";
import { useState, useRef } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName) {
      errors.firstName = "First Name cannot be empty";
    }

    if (!data.lastName) {
      errors.lastName = "Last Name cannot be empty";
    }

    if (!data.email) {
      errors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password cannot be empty";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationResult = validateForm(formData);

    if (Object.keys(validationResult).length >= 1) {
      setErrors(validationResult);
    } else {
      setErrors({});
      alert(`Success -- Look on console for the data`);
      console.log("Form data is valid:", formData);
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit} className={formStyles.form}>
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <FormBtn />
      <p className={formStyles.terms_and_services}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </p>
    </form>
  );
}
