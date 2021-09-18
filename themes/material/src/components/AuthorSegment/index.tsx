import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import { Typography, Paper, Avatar } from "@mui/material";

import UserLinks from "../UserLinks";

import * as S from "./styles";

const AuthorSegment = (): JSX.Element | null => {
  const config = useConfig();

  if (!config.user) return null;

  const authorFullName = `${config.user.firstName} ${config.user.lastName}`;

  return (
    <Paper
      component="aside"
      aria-label="About the author"
      sx={{
        alignSelf: "center",
        justifySelf: "center",
        display: "grid",
        justifyItems: "center",
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <S.Main>
        <Avatar
          src={config.user.avatar}
          alt={authorFullName}
          sx={{ width: 128, height: 128 }}
        />
        <S.Info>
          <Typography
            variant="h3"
            align="center"
            sx={{ "&:before": { content: '"by "', color: "text.disabled" } }}
          >
            {authorFullName}
          </Typography>
          <S.AboutText>
            <Typography variant="body1">{config.user.about}</Typography>
          </S.AboutText>
        </S.Info>
      </S.Main>
      <S.Contact>
        <UserLinks />
      </S.Contact>
    </Paper>
  );
};

export default AuthorSegment;
