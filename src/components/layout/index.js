import React from "react";
import ScrollToTop from "../ScrollToTop";
import Header from "./appbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
