import React, { Component } from "react";
import Img from "gatsby-image";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { fileEdges, postNode, mobile } = this.props;
    const coverHeight = mobile ? 180 : 350;
    const post = postNode.frontmatter ? postNode.frontmatter : postNode;
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false;
      if (fileNode.node.childImageSharp.resolutions.originalName === post.cover)
        return true;

      return false;
    });

    if (coverNodeList.length === 1) {
      return (
        <Img
          sizes={coverNodeList[0].node.childImageSharp.sizes}
          outerWrapperClassName="md-grid md-cell--9 post-cover"
          style={{ height: coverHeight, width: "100%" }}
        />
      );
    }

    /* eslint no-undef: "off" */
    const coverURL =
      post.cover.substring(0, 1) === "/"
        ? __PATH_PREFIX__ + post.cover
        : post.cover;
    return (
      <div
        style={{
          backgroundImage: `url(${coverURL})`,
          height: `${coverHeight}px`
        }}
        className="md-grid md-cell--9 post-cover"
      />
    );
  }
}

export default PostCover;
