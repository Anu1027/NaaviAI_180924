import React from 'react';
import { Link } from 'react-router-dom';
import SD from '../assets/images/assets/SD1.png'; // Adjust the path as necessary

const NotFound = () => {
  return (
    <div className="error-page-content d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row my-5">
          <h2>Decision Delusion Problem</h2>
          <div className="col-md-6 my-4">
            <div className="custom-card">
              <p>
                Due to the lack of Personalised education pathways, students
                often choose generic study options.
              </p>
            </div>
            <div className="custom-card">
              <p>
                Many students, who do not fit standard educational prospects,
                fall through the cracks.
              </p>
            </div>
            <div className="custom-card">
              <p>
                This situation leads to disengagement, low motivation, and
                mismatched careers.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="SD-image" src={SD} alt="Decision Delusion" />
          </div>
        </div>

        {/* Link to go back to the homepage */}
        <div className="text-center">
          <Link to="/" className="btn-eight">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
