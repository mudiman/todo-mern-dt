import React from "react";
import { render, screen } from "@testing-library/react";
import SiteSidebar from "../../components/layout/SiteSidebar";

test("Render Left Side bar", () => {
  render(<SiteSidebar />);
  const todoApp = screen.getByText(/Todos/i);
  expect(todoApp).toBeInTheDocument();
});
