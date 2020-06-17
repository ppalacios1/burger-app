import React, { Fragment } from "react";

const Layout = (props) => (
  <Fragment>
    <div>Toolbar</div>
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
