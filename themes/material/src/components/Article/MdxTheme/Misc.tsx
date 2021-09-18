import React from "react";
import { css, Global } from "@emotion/react";

import { Link as MaterialLink, Divider } from "@mui/material";

import { Image as ArticleImage, ArticleImageSpacing } from "../Image";
import SharedImage from "../../shared/Image";
import BaseLink from "../../Link";

import { ExtendingWrapper } from "../Spacing";

export const Break = (): JSX.Element => (
  <ExtendingWrapper>
    <Divider />
  </ExtendingWrapper>
);

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  activeClassName?: string;
  to: string;
}

export const Link = ({
  children,
  className,
  activeClassName,
  to,
  href,
  target,
  rel,
  style,
}: LinkProps): JSX.Element => {
  // Let gatsby-remark-images handle its links
  if (className === "gatsby-resp-image-link")
    return (
      <a
        className={className}
        href={href}
        target={target}
        rel={rel}
        style={style}
      >
        {children}
      </a>
    );

  return (
    <MaterialLink
      component={BaseLink}
      className={className}
      activeClassName={activeClassName}
      to={to}
      href={href}
    >
      {children}
    </MaterialLink>
  );
};

export const GlobalGatsbyImageStyle = (): JSX.Element => (
  <Global
    styles={css`
      .gatsby-resp-image-figure {
        width: 100%;

        ${ArticleImageSpacing}
      }

      .gatsby-resp-image-figcaption {
        text-align: center;
        margin-top: 8px;

        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.66;
        letter-spacing: 0.03333em;
      }
    `}
  />
);

export const Image = ({
  src,
  alt,
  className,
  title,
  srcSet,
  sizes,
  loading,
  style,
}: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  if (className === "gatsby-resp-image-image") {
    return (
      <SharedImage
        src={src}
        alt={alt}
        title={title}
        srcSet={srcSet}
        sizes={sizes}
        loading={loading}
        style={style}
        className={className} // Make sure to set the className otherwise the plugin crashes
      />
    );
  }

  if (!alt)
    throw Error(
      `MDX image is missing an alt tag. Image source: ${src || ""}, title: ${
        title || ""
      }.`
    );

  return <ArticleImage src={src} alt={alt} title={title} />;
};
