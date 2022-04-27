import { render, screen } from "@testing-library/react";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("renders a button", () => {
    render(<LinkButton href="/" />);

    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(1);
  });
});
