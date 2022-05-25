import { render } from "@testing-library/react";

import { Button } from ".";

describe("Button Component", () => {
  it("should render correctly paper button", () => {
    const { getByTestId, debug } = render(<Button type="paper" />);

    const button = getByTestId("Button");
    const buttonIcon = getByTestId("button-icon");

    expect(button).toHaveClass("button-paper");
    expect(buttonIcon).toHaveAttribute("src", "icon-paper.svg");
  });

  it("should render correctly rock button", () => {
    const { getByTestId } = render(<Button type="rock" />);

    const button = getByTestId("Button");
    const buttonIcon = getByTestId("button-icon");

    expect(button).toHaveClass("button-rock");
    expect(buttonIcon).toHaveAttribute("src", "icon-rock.svg");
  });

  it("should render correctly scissors button", () => {
    const { getByTestId } = render(<Button type="scissors" />);

    const button = getByTestId("Button");
    const buttonIcon = getByTestId("button-icon");

    expect(button).toHaveClass("button-scissors");
    expect(buttonIcon).toHaveAttribute("src", "icon-scissors.svg");
  });
});
