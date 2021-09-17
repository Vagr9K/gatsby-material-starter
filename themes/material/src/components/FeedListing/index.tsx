import * as React from "react";

import { Box, Stack } from "@mui/material";

import { Types } from "gatsby-theme-advanced";

import ArticleCard from "../ArticleCard";
import LayoutWidthContainer from "../shared/LayoutWidthContainer";

type PostListingProps = {
  listing: Types.FeedList;
  noHero?: boolean;
};

const FeedListing = ({ listing, noHero }: PostListingProps): JSX.Element => (
  <Stack
    component={LayoutWidthContainer}
    alignContent="space-between"
    justifyItems="stretch"
    spacing={10}
  >
    <Box
      sx={{
        width: "100%",

        display: "grid",
        gap: { zero: 8, lg: 10 },
        gridTemplateColumns: { zero: "1fr", lg: "1fr 1fr" },
      }}
    >
      {listing.map((feedItem, idx) => {
        // Check if we're rendering a placeholder
        if ("isPlaceholder" in feedItem)
          return <ArticleCard key={feedItem.key} />;

        return idx === 0 && !noHero ? (
          <ArticleCard key={feedItem.slug} post={feedItem} hero />
        ) : (
          <ArticleCard key={feedItem.slug} post={feedItem} />
        );
      })}
    </Box>
  </Stack>
);

export default FeedListing;
