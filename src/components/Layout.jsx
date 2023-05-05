import React from "react";
import { Navbar } from ".";
import { Footer } from "../container";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
