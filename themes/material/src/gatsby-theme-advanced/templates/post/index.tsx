import React from "react";

import { Stack } from "@mui/material";

import { SEO, Types, PostTemplateProps } from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import Article from "../../../components/Article";
import AuthorSegment from "../../../components/AuthorSegment";
import RelatedPosts from "../../../components/RelatedPosts";

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const post = Types.queryIntoPost(data);

  return (
    <Layout>
      <Stack spacing={10}>
        <SEO post={post} />
        <Article post={post} />
        <AuthorSegment />
        <RelatedPosts
          list={pageContext.relatedPosts.map(Types.jsonPostIntoPost)}
        />
      </Stack>
    </Layout>
  );
};

export default PostTemplate;
