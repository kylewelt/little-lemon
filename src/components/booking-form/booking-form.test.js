import { render, screen } from "@testing-library/react";
import BookingForm from "./booking-form.component";

test("renders the BookingForm heading", () => {
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={initialTimes} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
