import {
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { registerUser } from "@/services/authApi";

function RegisterForm() {
  const [loading, setLoading] =
    useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

 const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    await registerUser(formData);

    alert(
      "Registration Successful"
    );

    navigate("/login");
  } catch (error) {
    console.log(error);

    alert(
      "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <AuthInput
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <AuthInput
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <AuthInput
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <AuthInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <AuthButton
        title="Create Account"
        loading={loading}
      />
    </form>
  );
}

export default RegisterForm;