import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerFarmer } from "../api/farmerApi";

export default function UserRegistrationForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("English");
  const [role, setRole] = useState("Farmer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mobile number validation
  const isValidMobile = (num) => /^\d{10}$/.test(num);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !mobile || !location || !language || !role) {
      setError("Please fill all the fields");
      return;
    }

    if (!isValidMobile(mobile)) {
      setError("Mobile number must be 10 digits");
      return;
    }

    setLoading(true);
    try {
      await registerFarmer({ name, mobile, location, language, role });
      navigate("/dashboard"); // redirect to Dashboard
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-6">
      <div className="max-w-2xl w-full bg-white shadow rounded p-6">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-4 bg-gray-50 border p-2 rounded"
        >
          ← Back
        </button>

        <h2 className="text-center text-green-600 font-semibold mb-6">
          User Registration
        </h2>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">

          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Mobile Number</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Location (Village / District)</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Preferred Language</label>
            <select
              className="w-full border rounded p-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Tamil</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Role</label>
            <select
              className="w-full border rounded p-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Farmer</option>
              <option>Buyer</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full bg-green-600 text-white p-3 rounded ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
