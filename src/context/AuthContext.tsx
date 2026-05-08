import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserData {
  name: string;
  email: string;
  avatar: string;
  joined: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (email: string) => void;
  logout: () => void;
  updateUser: (data: Partial<UserData>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking auth status
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedUser = localStorage.getItem("user");
    if (storedAuth === "true" && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    setIsAuthenticated(true);
    const userData: UserData = {
      name: email.split("@")[0],
      email: email,
      avatar: "",
      joined: "Member since " + new Date().toLocaleString('default', { month: 'short', year: 'numeric' }),
    };
    setUser(userData);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  const updateUser = (data: Partial<UserData>) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
