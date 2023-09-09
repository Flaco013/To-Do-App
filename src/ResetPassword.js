import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    const match = e.target.value === newPassword;
    setPasswordsMatch(match);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      return;
    }

    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
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
              <h3 className="text-center mb-4">Reset Password</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    className="form-control"
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="form-control"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${
                      passwordsMatch ? "" : "is-invalid"
                    }`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  {!passwordsMatch && (
                    <div className="invalid-feedback">
                      Passwords do not match.
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
