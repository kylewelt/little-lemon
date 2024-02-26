import { render, screen } from "@testing-library/react";
import OrderPage from "./order-page.component";

test("renders the OrderPage heading", () => {
  render(<OrderPage />);
  const headingElement = screen.getByText("Order");
  expect(headingElement).toBeInTheDocument();
});
