import {
  createContext,
  ReactNode,
  useState,
} from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [token, setToken] =
    useState<string | null>(
      localStorage.getItem("token")
    );

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;