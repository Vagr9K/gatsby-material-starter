import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  }
  return <span>{props.text}</span>;
  }
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEO postEdges={group} />
      <PostListing postEdges={group} />
      { !(first && last) ?
        <div className="md-grid">
          <div className="md-cell md-cell--4-col md-cell--4-offset md-typography--text-center">
            <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
          </div>
          <div className="md-cell md-cell--4-col md-typography--text-center">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div>
        </div>
        : ""
      }
    </div>
  );
};
export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;