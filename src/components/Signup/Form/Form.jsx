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
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.table(formData);
  };

  const validateForm = (data) => {
    if (!data.firstName) {
      setErrors({ ...errors, firstName: "First Name cannot be Empty " });
    }

    if (!data.lastName) {
      setErrors({ ...errors, lastName: "Last Name cannot be Empty " });
    }
    if (!data.email) {
      setErrors({ ...errors, email: "Email cannot be Empty " });
    }
    if (!data.password) {
      setErrors({ ...errors, password: "Password cannot be Empty " });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const validationResult = validateForm(formData);
    // if (validationResult.isValid) {
    //   alert("Success");
    // }
    // else {
    //   // Display error messages (e.g., update state to show errors)
    // }
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
