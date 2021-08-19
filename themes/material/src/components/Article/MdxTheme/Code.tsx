import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import { SIDE_PADDING } from "../Spacing";

const CODE_CONTENT_WIDTH = "920px";
const CODE_BLOCK_SIZE = `calc(${CODE_CONTENT_WIDTH} + 2 * ${SIDE_PADDING})`;

const CodeStyle = css`
  font-family: "Roboto Mono", monospace !important;
  font-size: 16px !important;
  line-height: 24px !important;
`;

export const GlobalCodeStyle = (): JSX.Element => (
  <Global
    styles={css`
      .gatsby-highlight {
        width: 100%;
        padding: 0;

        @media (min-width: ${CODE_BLOCK_SIZE}) {
          padding: 0 16px;

          max-width: ${CODE_BLOCK_SIZE};
        }
      }
    `}
  />
);

export const Pre = styled.pre`
  ${CodeStyle}

  width: 100%;
  max-width: 100%;

  margin: 0 !important;

  /* Set border radius depending on element state */
  border-radius: 0px !important;

  @media (min-width: ${CODE_BLOCK_SIZE}) {
    border-radius: 6px !important;

    max-width: ${CODE_BLOCK_SIZE};
  }
`;

export const StyledCode = styled.code`
  ${CodeStyle}

  width: 100%;
  max-width: 100%;
`;

type CodeProps = { className?: string; children?: React.ReactChildren };

export const Code = ({ className, children }: CodeProps): JSX.Element => (
  <StyledCode className={className} tabIndex={0}>
    {children}
  </StyledCode>
);

export const InlineCode = undefined; // Default style works great
