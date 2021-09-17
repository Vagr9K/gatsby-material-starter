import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import { ExtendingWrapper } from "../Spacing";

type ListProps = {
  children?: React.ReactNode;
};

const UnorderedStyle = styled.ul`
  padding-left: 40px;
`;

export const Unordered = ({ children }: ListProps): JSX.Element => (
  <ExtendingWrapper>
    <UnorderedStyle>{children}</UnorderedStyle>
  </ExtendingWrapper>
);

const OrderedStyle = styled.ol`
  padding-left: 40px;
`;

export const Ordered = ({ children }: ListProps): JSX.Element => (
  <ExtendingWrapper>
    <OrderedStyle>{children}</OrderedStyle>
  </ExtendingWrapper>
);

export const Item = ({ children }: ListProps): JSX.Element => (
  <Typography
    component="li"
    variant="body1"
    css={css`
      /* Remove padding from direct child wrapper components */
      & > div {
        padding-left: 0;
      }

      & > * {
        margin-bottom: 12px;
      }

      ::marker {
        color: var(--color-grey-500);
      }

      :hover {
        ::marker {
          color: var(--color-primary-100);
        }
      }
    `}
  >
    {children}
  </Typography>
);
