import React, { Fragment } from "react";
import "../layout/Layout.css";
import "../footer/Footer";
import "../navbar/Navbar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <Fragment>
      <div className="layout">
        <Navbar />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
