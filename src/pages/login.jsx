import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      alert("Login Success");
      window.location.href = "/admin";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={login} className="p-6 bg-white shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          placeholder="Email"
          className="w-full border p-2 mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;