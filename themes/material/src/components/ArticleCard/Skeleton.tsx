import React from "react";
import styled from "@emotion/styled";

import { Card, Skeleton, Stack } from "@mui/material";

const Cover = styled(Skeleton)`
  border-radius: 4px;

  width: 100%;
  height: 344px !important;

  @media (max-width: 500px) {
    height: 296px;
  }
  @media (max-width: 440px) {
    height: 246px;
  }
`;

const TitleSkeleton = styled(Skeleton)`
  margin-bottom: 16px;

  width: 70%;

  height: 33px;
`;

const ExcerptSkeleton = styled(Skeleton)`
  margin-bottom: 4px;

  width: 90%;

  height: 18px;
`;

const ArticleCardSkeleton = (): JSX.Element => (
  <Card sx={{ paddingBottom: 2 }}>
    <Cover variant="rectangular" />

    <Stack sx={{ paddingX: 2, marginTop: 3 }}>
      <TitleSkeleton variant="text" />
      <ExcerptSkeleton variant="text" />
      <ExcerptSkeleton variant="text" />
    </Stack>
  </Card>
);

export default ArticleCardSkeleton;
