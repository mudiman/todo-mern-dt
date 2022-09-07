import React from "react";
import { render, screen } from "@testing-library/react";
import SiteHeader from "../../components/layout/SiteHeader";

test("Render Header Content", () => {
  render(<SiteHeader />);
  const todoApp = screen.getByText(/TodoApp/i);
  expect(todoApp).toBeInTheDocument();

  const account = screen.getByText(/Account/i);
  expect(account).toBeInTheDocument();
});
