import { render, screen } from "@testing-library/react";
import ConfirmedBookingPage from "./confirmed-booking-page.component";

test("renders the ConfirmedBookingPage heading", () => {
  render(<ConfirmedBookingPage />);
  const headingElement = screen.getByText("Reservation confirmed!");
  expect(headingElement).toBeInTheDocument();
});
