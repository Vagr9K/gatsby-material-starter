import React from "react";
import { Stack, Typography } from "@mui/material";

import { Types } from "gatsby-theme-advanced";

import FeedListing from "../FeedListing";

type RelatedPostsProps = {
  list: Types.PostList;
};

const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
  <Stack
    component="aside"
    justifyContent="center"
    alignItems="center"
    spacing={5}
  >
    <Typography variant="h3" align="center">
      RELATED POSTS
    </Typography>
    <FeedListing noHero listing={list} />
  </Stack>
);

export default RelatedPosts;
