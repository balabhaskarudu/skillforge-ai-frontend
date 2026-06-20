import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { loginUser }
  from "@/services/authApi";

import { useAuth }
  from "@/hooks/useAuth";

import AuthInput
  from "./AuthInput";

import PasswordInput
  from "./PasswordInput";

import AuthButton
  from "./AuthButton";

function LoginForm() {
  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
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

  try {
    setLoading(true);

    const response =
      await loginUser(formData);

      
    const data =
      response.data;

    if (
      data.token &&
      data.user
    ) {
      login(
        data.token,
        data.user
      );

      navigate(
        "/dashboard"
      );
    }
  } catch (error) {
    console.log(error);

    alert(
      "Invalid Credentials"
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
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <PasswordInput
        name="password"
        value={
          formData.password
        }
        placeholder="Password"
        onChange={
          handleChange
        }
      />

      <AuthButton
        title="Sign In"
        loading={loading}
      />
    </form>
  );
}

export default LoginForm;