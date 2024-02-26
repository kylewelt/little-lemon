import BookingForm from "../../components/booking-form/booking-form.component";

const BookingPage = ({ availableTimes, dateChanged, submitForm }) => (
  <>
    <h1>Reservations</h1>
    <BookingForm
      availableTimes={availableTimes}
      dateChanged={dateChanged}
      submitForm={submitForm}
    />
  </>
);

export default BookingPage;
