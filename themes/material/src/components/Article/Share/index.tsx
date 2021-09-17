import React, { useState } from "react";

import {
  Stack,
  IconButton,
  Typography,
  Snackbar,
  Divider,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkIcon from "@mui/icons-material/Link";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";

import { Types, useConfig } from "gatsby-theme-advanced";

const generateRelatedTwitterNames = (
  config: Types.SiteConfig
): Array<string> => {
  const relatedTwitterNames = [];
  if (config.user?.twitterName)
    relatedTwitterNames.push(config.user.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return relatedTwitterNames;
};

type ArticleShareProps = {
  post: Types.Post;
};

const ArticleShare = ({ post }: ArticleShareProps): JSX.Element => {
  const { title, excerpt, url } = post;

  const [showLinkNotification, setShowlinkNotification] = useState(false);

  const config = useConfig();

  const relatedTwitterNames = generateRelatedTwitterNames(config);

  return (
    <Stack component="section" spacing={1} aria-label="Share on social media">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        alignContent="center"
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.light",
            display: {
              zero: "none",
              sm: "block",
            },
          }}
        >
          SHARE
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ "& svg": { color: "primary.light" } }}
        >
          <IconButton component={FacebookShareButton} url={url} quote={excerpt}>
            <FacebookIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            component={TwitterShareButton}
            url={url}
            title={title}
            via={config.website.name}
            related={relatedTwitterNames}
          >
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton component={RedditShareButton} url={url} title={title}>
            <RedditIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            component={LinkedinShareButton}
            url={url}
            title={title}
            summary={excerpt}
            source={config.website.name}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <LinkIcon
            sx={{ fontSize: 40, cursor: "pointer" }}
            onClick={() => {
              // eslint-disable-next-line no-void
              void navigator.clipboard.writeText(url);
              setShowlinkNotification(true);
            }}
          />
          <Snackbar
            open={showLinkNotification}
            autoHideDuration={5000}
            message="Link copied to clipboard"
            onClose={() => {
              setShowlinkNotification(false);
            }}
          />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ArticleShare;
