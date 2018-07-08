import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import PostCover from "./PostCoverComponent";

class queryWrapper extends Component {
  render() {
    const { postNode, coverHeight, coverClassName } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query CoverQuery {
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
          }
        `}
        render={data => (
          <PostCover
            fileEdges={data.allFile.edges}
            postNode={postNode}
            coverHeight={coverHeight}
            coverClassName={coverClassName}
          />
        )}
      />
    );
  }
}

export default queryWrapper;
