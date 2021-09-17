import React from "react";
import styled from "@emotion/styled";
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { WidthWrapper } from "../Spacing";

const TableWrapper = styled(WidthWrapper)`
  /* Scroll the table when not enough space is available */
  overflow-x: auto;

  padding-top: 8px;
  padding-bottom: 8px;
`;

type CellProps = {
  align: "left" | "right" | "inherit" | "center" | "justify" | null;
  children: React.ReactChildren;
};

const Cell = ({ align, children }: CellProps): JSX.Element => (
  <TableCell align={align || undefined}>{children}</TableCell>
);

type TableProps = {
  children?: React.ReactNode;
};
export const Table = ({ children }: TableProps): JSX.Element => (
  <TableWrapper>
    <TableContainer component={Paper} sx={{ p: 1 }}>
      <MuiTable>{children}</MuiTable>
    </TableContainer>
  </TableWrapper>
);

export const Head = TableHead;

export const Row = TableRow;

export const HeadCell = Cell;

export const BodyCell = Cell;

export const Body = TableBody;
