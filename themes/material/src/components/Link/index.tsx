import React from "react";
import urlJoin from "url-join";
import { Link as GatsbyLink } from "gatsby";

import { useConfig, Types } from "gatsby-theme-advanced";

export const withBasePath = (config: Types.SiteConfig, url: string): string =>
  config.basePath ? urlJoin(config.basePath, url) : url;

export type LinkProps = {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  to: string;
  href?: string;
  noBasePath?: boolean;
  ariaLabel?: string;
  role?: string;
};

const Link = React.forwardRef(
  (
    {
      to,
      href,
      className,
      children,
      activeClassName,
      noBasePath,
      ariaLabel,
      role,
    }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const config = useConfig();

    const url = href || to;

    const isInternalUrl = /^\/(?!\/)/.test(url);

    // Append basePath when dealing with internal URLs
    const internalUrl = !noBasePath ? withBasePath(config, url) : url;

    return isInternalUrl ? (
      <GatsbyLink
        activeClassName={activeClassName}
        className={className}
        to={internalUrl}
        aria-label={ariaLabel}
        innerRef={ref}
        role={role}
      >
        {children}
      </GatsbyLink>
    ) : (
      <a
        className={className}
        href={url}
        aria-label={ariaLabel}
        ref={ref}
        role={role}
      >
        {children}
      </a>
    );
  }
);

export default Link;
