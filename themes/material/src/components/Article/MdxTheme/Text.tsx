import React from "react";
import styled from "@emotion/styled";

import { Typography } from "@mui/material";

import _ from "lodash";

import Link from "../../Link";

import { ExtendingWrapper } from "../Spacing";

type PragraphProps = { children: React.ReactChildren };
export const Paragraph = ({ children }: PragraphProps): JSX.Element => (
  <Typography variant="body1">{children}</Typography>
);

const HeadingLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover::before {
    content: "#";
    display: block;
    position: absolute;
    transform: translateX(-100%);
    padding-right: 8px;

    color: rgba(0, 0, 0, 0.3);
  }
`;

// Extract header hashlink from child components
const getHeaderHashLink = (children: React.ReactNode): string | null => {
  if (Array.isArray(children)) {
    return _.kebabCase(
      children.filter((child) => typeof child === "string").join()
    );
  }

  if (typeof children === "string") {
    return _.kebabCase(children);
  }

  return null;
};

type HeadingProps = {
  children: React.ReactNode;
};

type HeadingComponent = (props: HeadingProps) => JSX.Element;

// Create a heading component from the post slug and a styled heading component
const createHeading =
  (
    slug: string,
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  ): HeadingComponent =>
  ({ children }: HeadingProps): JSX.Element => {
    const hashLink = getHeaderHashLink(children);

    return hashLink ? (
      <Typography variant={variant} id={hashLink}>
        <HeadingLink to={`${slug}#${hashLink}`}>{children} </HeadingLink>
      </Typography>
    ) : (
      <Typography variant={variant}>{children}</Typography>
    );
  };

type Headings = {
  H1: HeadingComponent;
  H2: HeadingComponent;
  H3: HeadingComponent;
  H4: HeadingComponent;
  H5: HeadingComponent;
  H6: HeadingComponent;
};

// Utility function to create and export all the heading components
export const createHeadings = (slug: string): Headings => ({
  H1: createHeading(slug, "h1"),
  H2: createHeading(slug, "h2"),
  H3: createHeading(slug, "h3"),
  H4: createHeading(slug, "h4"),
  H5: createHeading(slug, "h5"),
  H6: createHeading(slug, "h6"),
});

const BlockquoteStyle = styled.blockquote`
  padding: 0 16px;

  background-color: var(--color-grey-100);

  border-left: 8px solid var(--color-primary-300);
`;

type BlockquoteProps = {
  children?: React.ReactNode;
};

export const Blockquote = ({ children }: BlockquoteProps): JSX.Element => (
  <ExtendingWrapper>
    <BlockquoteStyle>{children}</BlockquoteStyle>
  </ExtendingWrapper>
);
