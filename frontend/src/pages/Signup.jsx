import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../layouts/Button";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://serverside-javascript-11.onrender.com/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role: "user",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black">
      <h1 className="text-2xl font-bold text-white mb-6">Sign Up</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        
        {/* 🔥 Using your custom Button here */}
        <Button title="Sign Up" />
      </form>

      <p className="text-gray-400 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
