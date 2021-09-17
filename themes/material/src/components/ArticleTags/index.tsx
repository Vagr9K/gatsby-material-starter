import React from "react";

import { Types } from "gatsby-theme-advanced";

import { Chip, Stack } from "@mui/material";

import Link from "../Link";

type ArticleTagsProps = {
  post: Types.Post;
  tagCountLimit?: number;
};

const ArticleTags = ({
  post,
  tagCountLimit,
}: ArticleTagsProps): JSX.Element | null => {
  const limitedTags = tagCountLimit
    ? post.tags?.slice(0, tagCountLimit)
    : post.tags;

  if (!limitedTags) return null;

  const tagLinks = limitedTags.map((tag) => (
    <Chip
      component={Link}
      key={tag}
      to={`/tag/${tag}`}
      label={tag}
      sx={{ "&:hover": { cursor: "pointer" } }}
    />
  ));

  return (
    <Stack
      spacing={1}
      justifyItems="center"
      justifyContent="center"
      direction="row"
      sx={{
        width: "100%",
      }}
    >
      {tagLinks}
    </Stack>
  );
};

export default ArticleTags;
