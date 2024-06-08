import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authenticated", true);
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="lg:p-10 p-6 border border-gray-400 rounded-xl w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <div className="flex flex-col space-y-4">
          <input
            required
            className="px-3 py-2 rounded-md text-base"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            className="px-3 py-2 rounded-md text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-3 py-2 rounded-md text-base bg-gray-600 text-white hover:bg-black transition-all duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </main>
  );
}
