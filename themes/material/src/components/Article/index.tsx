import React from "react";

import { Stack } from "@mui/material";

import { Types } from "gatsby-theme-advanced";

import Intro from "./Intro";
import Render from "./Render";
import Share from "./Share";
import ArticleTags from "../ArticleTags";

type ArticleProps = {
  post: Types.Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => (
  <Stack
    component="main"
    spacing={3}
    justifyItems="center"
    alignItems="center"
    sx={{ width: "100%" }}
  >
    <Intro post={post} />
    <Render post={post} />
    <ArticleTags post={post} />
    <Share post={post} />
  </Stack>
);

export default Article;
