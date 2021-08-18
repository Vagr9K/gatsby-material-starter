import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";

const history = createHistory(createMemorySource("/"));
const queryClient = new QueryClient();

const renderWithQueryClient = (
  children: React.ReactNode,

  options?: Omit<RenderOptions, "wrapper">
): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>
      <LocationProvider history={history}> {children}</LocationProvider>
    </QueryClientProvider>,
    options
  );

export default renderWithQueryClient;
