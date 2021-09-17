import React from "react";
import { Helmet } from "react-helmet";

import { visuallyHidden } from "@mui/utils";
import { Typography } from "@mui/material";

import {
  useConfig,
  useInfiniteFeed,
  FeedTemplateProps,
} from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import FeedListing from "../../../components/FeedListing";
import ListingPageWrapper from "../../../components/shared/ListingPageWrapper";

const Feed = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  const config = useConfig();

  // Don't show hero images on non-index feeds
  const noHero = pageContext.feedType !== "index";

  // Override the title for non-index feeds
  const getTitleOverride = () => {
    if (pageContext.feedId) {
      if (pageContext.feedType === "tag")
        return (
          <Helmet
            title={`Posts tagged as "${pageContext.feedId}" | ${config.website.title}`}
          />
        );

      if (pageContext.feedType === "category")
        return (
          <Helmet
            title={`Posts in category "${pageContext.feedId}" | ${config.website.title}`}
          />
        );
    }

    return null;
  };

  return (
    <Layout>
      {getTitleOverride()}
      <ListingPageWrapper ref={feedElementRef}>
        <Typography sx={visuallyHidden} variant="h1">
          Recent Posts
        </Typography>
        <FeedListing listing={feedListing} noHero={noHero} />
      </ListingPageWrapper>
    </Layout>
  );
};

export default Feed;
