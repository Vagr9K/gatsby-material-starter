import React from "react";
import { render, screen } from "@testing-library/react";

import ArticleTags from "./index";

import { post as postFixture } from "../../../test/fixtures";

describe("component ArticleTags", () => {
  it("generates correct tag URLs", async () => {
    expect.assertions(2);

    render(<ArticleTags post={postFixture} />);

    const tagLink1 = await screen.findByRole("link", { name: "test" });
    expect(tagLink1).toHaveAttribute("href", "/tag/test");

    const tagLink2 = await screen.findByRole("link", { name: "huge" });
    expect(tagLink2).toHaveAttribute("href", "/tag/huge");
  });
});
