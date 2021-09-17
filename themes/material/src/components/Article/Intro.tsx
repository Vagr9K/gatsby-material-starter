import React from "react";

import { getImage } from "gatsby-plugin-image";

import { Stack, Typography } from "@mui/material";

import { Types } from "gatsby-theme-advanced";

import ArticleInfo from "../ArticleInfo";
import { CoverImage } from "./Image";
import { WidthWrapper } from "./Spacing";

type ArticleIntroProps = {
  post: Types.Post;
};

const ArticleIntro = ({ post }: ArticleIntroProps): JSX.Element => {
  if (!post.coverImg)
    throw Error(
      "ArticleIntro: Failed to render ArticleIntro without cover image."
    );

  const imgData = getImage(post.coverImg);

  if (!imgData)
    throw Error("ArticleIntro: Failed to getImage from post.coverImg.");

  return (
    <Stack spacing={3} alignItems="center" sx={{ width: "100%" }}>
      <WidthWrapper>
        <Stack spacing={3}>
          <Typography variant="h1">{post.title}</Typography>
          <Typography variant="body1">{post.excerpt}</Typography>
        </Stack>
      </WidthWrapper>
      <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
        <WidthWrapper>
          <ArticleInfo post={post} />
        </WidthWrapper>
        <CoverImage image={imgData} alt={post.coverImageAlt} />
      </Stack>
    </Stack>
  );
};

export default ArticleIntro;
