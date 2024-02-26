import { render, screen } from "@testing-library/react";
import AboutPage from "./about-page.component";

test("renders the AboutPage heading", () => {
  render(<AboutPage />);
  const headingElement = screen.getByText("About");
  expect(headingElement).toBeInTheDocument();
});
