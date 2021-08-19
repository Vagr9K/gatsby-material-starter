import React from "react";
import { render, screen } from "@testing-library/react";

import ArticleInfo from "./index";

import { post as postFixture } from "../../../test/fixtures";

describe("component ArticleInfo", () => {
  it("generates correct category URL", async () => {
    expect.assertions(1);

    render(<ArticleInfo post={postFixture} />);

    const categoryLink = await screen.findByRole("link", { name: "moar" });
    expect(categoryLink).toHaveAttribute("href", "/category/moar");
  });

  it("shows correct information span", async () => {
    expect.assertions(2);

    render(<ArticleInfo post={postFixture} />);

    const pubDateInfo = await screen.findByText("Mar 1, 2018");
    expect(pubDateInfo).toBeInTheDocument();

    const tiemToReadInfo = await screen.findByText("3 min read");
    expect(tiemToReadInfo).toBeInTheDocument();
  });
});
