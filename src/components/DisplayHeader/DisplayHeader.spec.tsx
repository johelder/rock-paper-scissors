import { render } from "@testing-library/react";

import { DisplayHeader } from ".";

describe("Display Header Component", () => {
  it("should render rock-paper-scissors logo", () => {
    const { getByTestId } = render(<DisplayHeader scoreCount={1} />);
    const appLogo = getByTestId("App Logo");

    expect(appLogo).toBeInTheDocument();
  });

  it("should display score count correctly", () => {
    const { getByText } = render(<DisplayHeader scoreCount={-1} />);
    const scoreValue = getByText("-1");

    expect(scoreValue).toBeInTheDocument();
  });
});
