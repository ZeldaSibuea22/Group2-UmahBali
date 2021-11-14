import React from "react";
import Footer from "./footer";
import Headers from "./header/header";

export default function Layout({ children }) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  );
}
