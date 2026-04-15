import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";

vi.mock("lottie-web", () => ({
  default: { loadAnimation: () => ({ play: () => {} }) },
}));

const { default: App } = await import("./App");

test("renders the full Finnish alphabet as letter buttons", () => {
  render(<App />);
  for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ") {
    expect(screen.getByRole("button", { name: letter })).toBeInTheDocument();
  }
});
