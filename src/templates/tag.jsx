import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pathContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const fileEdges = this.props.data.allFile.edges;
    return (
      <div className="tag-container">
        <Helmet>
          <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
        </Helmet>
        <PostListing postEdges={postEdges} fileEdges={fileEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allFile {
      edges {
        node {
          id
          absolutePath
          childImageSharp {
            id
            resolutions {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
            internal {
              contentDigest
              type
              owner
            }
            sizes(maxWidth: 1240) {
              ...GatsbyImageSharpSizes
              originalName
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
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
