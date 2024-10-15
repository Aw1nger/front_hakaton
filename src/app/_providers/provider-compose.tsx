import { ComposeChildren } from "@/shared/lib/helpers";
import { AuthProvider } from "@/shared/providers/auth-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import React from "react";

export const ProviderCompose = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AuthProvider />
      {children}
    </ComposeChildren>
  );
};
