import React from "react";

import Link, { LinkProps } from "../Link";

const TransparentLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
  ariaLabel,
}: LinkProps): JSX.Element => (
  <Link
    css={{ textDecoration: "none", color: "inherit", width: "100%" }}
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
    ariaLabel={ariaLabel}
  >
    {children}
  </Link>
);

export default TransparentLink;
