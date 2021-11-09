import React from "react";
import { Children } from "react";
// import { StyleSheet, Text, View } from "react-native";
import Footer from "../footer";
import Headers from "../header/header";

export default function Layout({ children }) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  );
}
