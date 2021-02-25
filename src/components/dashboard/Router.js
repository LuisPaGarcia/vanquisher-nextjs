import { withRouter } from "next/router";
import React from "react";

function Router({ children, router }) {
  console.log(children);
  const shouldRender = [...children].filter(
    (child) => child.page === router.page
  );
  return <>{shouldRender}</>;
}

export default withRouter(Router);
