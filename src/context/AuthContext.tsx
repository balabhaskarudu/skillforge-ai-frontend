import {
  createContext,
  ReactNode,
  useState,
} from "react";

import { User } from "@/types/auth.types";

interface AuthContextType {
  token: string | null;
  user: User | null;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

interface Props {
  children: ReactNode;
}

function AuthProvider({
  children,
}: Props) {
  const [token, setToken] =
    useState<string | null>(
      localStorage.getItem("token")
    );

  const [user, setUser] =
    useState<User | null>(
      JSON.parse(
        localStorage.getItem("user") ||
          "null"
      )
    );

  const login = (
    token: string,
    user: User
  ) => {
    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;