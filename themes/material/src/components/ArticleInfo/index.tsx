import React from "react";
import { format } from "date-fns";

import { Types } from "gatsby-theme-advanced";

import { Stack, Typography, Button } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import EventNoteIcon from "@mui/icons-material/EventNote";

import Link from "../Link";

type ArticleInfoProps = {
  post: Types.Post;
};

const ArticleInfo = ({ post }: ArticleInfoProps): JSX.Element => {
  const categoryUrl = post.category ? `/category/${post.category}` : undefined;

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={1}>
        <EventNoteIcon sx={{ fontSize: 48, color: "text.secondary" }} />
        <Stack
          justifyContent="space-between"
          sx={{
            height: "44px",
          }}
        >
          <Typography variant="caption">
            {format(post.datePublished, "LLL d, y")}
          </Typography>
          <Typography
            sx={{ color: "text.secondary", fontWeight: "bold" }}
            variant="caption"
          >{`${post.timeToRead} min read`}</Typography>
        </Stack>
      </Stack>

      {categoryUrl && (
        <Stack direction="row">
          <CategoryIcon sx={{ fontSize: 48, color: "text.secondary" }} />
          <Button
            component={Link}
            to={categoryUrl}
            sx={{ color: "text.secondary" }}
          >
            {post.category}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default ArticleInfo;
