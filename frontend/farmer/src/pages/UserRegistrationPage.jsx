import React from "react";
import UserRegistrationForm from "../components/UserRegistrationForm";

const UserRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-4 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="bg-white p-5 rounded shadow mb-6 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold">User Registration</h1>
      </div>

      {/* Registration Form */}
      <div className="max-w-3xl w-full">
        <UserRegistrationForm />
      </div>
    </div>
  );
};

export default UserRegistrationPage;