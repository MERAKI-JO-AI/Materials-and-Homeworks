import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const ACCESS_CODE = import.meta.env.VITE_PASSCODE;

export const AccessCodePage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = code.trim();

    if (!trimmed) {
      setError("Please enter the access code.");
      return;
    }

    if (!ACCESS_CODE) {
      setError("Access code not configured. Please contact administrator.");
      return;
    }

    if (trimmed === ACCESS_CODE) {
      localStorage.setItem("vibeAccess", "true");
      navigate("/resources");
    } else {
      setError("Incorrect access code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-navyDark flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden">
      <div className="bg-card rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2 text-center">
          Enter Access Code
        </h1>
        <p className="text-sm sm:text-base text-[#4B5563] text-center mb-6">
          Ask your instructor for the passcode to open the resources.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="accessCode"
              className="block text-sm font-medium text-[#111827] mb-2"
            >
              Access code
            </label>
            <input
              id="accessCode"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-sm sm:text-base text-[#111827]"
              placeholder="Enter access code"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-xs sm:text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};
