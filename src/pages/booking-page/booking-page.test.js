import { render, screen } from "@testing-library/react";
import BookingPage from "./booking-page.component";

test("renders the BookingPage heading", () => {
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingPage availableTimes={initialTimes} />);
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
});
