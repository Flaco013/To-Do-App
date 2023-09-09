import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    // Check if the email is valid (you can use a regex or a library like 'validator')
    const isEmailValid = isValidEmailFormat(email);

    // If the email is valid, you can send a password reset email
    if (isEmailValid) {
      // Send the password reset email logic here
      // For this example, we'll just show a success message
      setEmailSent(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const isValidEmailFormat = (email) => {
    // You can use a regex pattern or a library like 'validator' to validate the email format
    // Here's a basic regex pattern for email validation:
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="text-center">
                <img src="ToDoImage.png" alt="Logo" className="img-fluid" />
              </div>
              <h3 className="text-center mb-4">Forgot Password</h3>
              {emailSent ? (
                <div className="alert alert-success">
                  Password reset email sent. Please check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSendClick}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        isValidEmail ? "" : "is-invalid"
                      }`}
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {!isValidEmail && (
                      <div className="invalid-feedback">
                        Please enter a valid email address.
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
