import React from "react";
import styled from "@emotion/styled";

import { getImage, IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

import { Typography, Card, Button, Box, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

import { Types } from "gatsby-theme-advanced";

import ArticleInfo from "../ArticleInfo";
import ArticleTags from "../ArticleTags";
import Link from "../Link";
import TransparentLink from "./TransparentLink";

import ArticleCardSkeleton from "./Skeleton";

const Cover = styled(GatsbyImage)`
  width: 100%;
  height: 368px;

  /* Tune the height on smaller screen resolutions */
  @media (max-width: 500px) {
    height: 320px;
  }

  @media (max-width: 440px) {
    height: 270px;
  }

  & img {
    border-radius: 4px;
  }
`;

type ArticleHeroCardProps = {
  post?: Types.Post;
  hero?: boolean;
};

const ArticleCard = ({ post, hero }: ArticleHeroCardProps): JSX.Element => {
  // If no post is provided, render a skeleton view with a loading animation
  if (!post) return <ArticleCardSkeleton />;

  if (!post.coverImg)
    throw Error("Failed to render ArticleCard without Gatsby coverImg.");

  return (
    <Card
      sx={{
        display: "grid",
        gap: { zero: 1, lg: hero ? 4 : 1 },
        gridColumn: hero ? { lg: "span 2" } : {},
        gridTemplateColumns: hero ? { lg: "6fr 4fr" } : {},
      }}
    >
      <TransparentLink to={post.slug} ariaLabel={post.title}>
        <Cover
          image={getImage(post.coverImg) as IGatsbyImageData}
          alt={post.coverImageAlt}
        />
      </TransparentLink>
      <Stack
        justifyContent="space-around"
        alignItems="center"
        sx={{
          padding: { zero: 1, lg: hero ? 0 : 1 },
        }}
      >
        <Box>
          <TransparentLink to={post.slug}>
            {/* Display as an H2 for accessibility and title semantics */}
            <Typography sx={{ marginBottom: 2 }} variant="h3" component="h2">
              {post.title}
            </Typography>
          </TransparentLink>
          <ArticleInfo post={post} />

          <TransparentLink to={post.slug} ariaLabel={post.title}>
            <Typography
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "-webkit-box",
                WebkitLineClamp: hero ? 5 : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.excerpt}
            </Typography>
          </TransparentLink>

          <ArticleTags post={post} />
        </Box>

        {hero && (
          <Button
            sx={{
              display: { zero: "none", lg: "flex" },
            }}
            variant="contained"
            component={Link}
            endIcon={<LaunchIcon />}
            to={post.slug}
          >
            Read the article
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default ArticleCard;
