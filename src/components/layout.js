/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

import "./layout.css";
import "./custom.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>羅元鴻 Eric Lo - Resume</title>
        <meta
          name="description"
          content="Eric Lo, a software and AI engineer from Taiwan, with extensive experience in front-end development and AI application development."
        />
        <meta
          name="keywords"
          content="Eric Lo, software engineer, AI engineer, front-end development, JavaScript, React, Angular, AI development, resume"
        />
        <meta name="author" content="Eric Lo" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="page">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
