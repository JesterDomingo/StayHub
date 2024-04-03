import React, { useState } from 'react';

const CancelBooking = () => {

// const CancelBookingModal = ({ bookingId, onCancel, onClose }) => {
//   const [reason, setReason] = useState('');

//   const handleCancel = () => {
//     // Call the onCancel function passed as a prop with the bookingId and reason
//     onCancel(bookingId, reason);
//     // Close the modal
//     onClose();
//   };

  return (
    <>
{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Cancel Booking
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Cancel Booking</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Are you sure want to cancel booking?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Yes</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default CancelBooking;