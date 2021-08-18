import * as React from "react";
import Helmet from "react-helmet";

const Typography = (): JSX.Element => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default Typography;
