"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface AuthInterface {
  auth: boolean;
  user: User | null;
}

interface User {
  id: number;
  firstname: string;
  lastname: string;
  avatar: string;
  username: string;
  email: string;
  role: string;
}

interface AuthContextInterface {
  session: AuthInterface;
  setSession: React.Dispatch<React.SetStateAction<AuthInterface>>;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [session, setSession] = useState<AuthInterface>({
    auth: false,
    user: null,
  });

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch("/api/session");
      const data = await res.json();

      setSession(data);
    };

    fetchSession();
  }, []);
  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
