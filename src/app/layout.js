"use client";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function checkSession() {
      const session = localStorage.getItem("success");
      setIsAuthenticated(!!session);
    }
    
    checkSession();

    // Listen for localStorage changes (Login/Logout from other tabs)
    window.addEventListener("storage", checkSession);

    return () => {
      window.removeEventListener("storage", checkSession);
    };
  }, []);

  function handleSignout() {
    localStorage.removeItem("success");
    setIsAuthenticated(false);
    router.push("/"); // Redirect to home after logout
  }

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar isAuthenticated={isAuthenticated} handleSignout={handleSignout} />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
