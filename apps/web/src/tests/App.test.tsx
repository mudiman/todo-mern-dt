import "./matchMedia";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Home page login verification", () => {
  render(<App />);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
