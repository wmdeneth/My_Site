"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (username === "admin" && password === "1234") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isAdmin", "true");
      }
      router.push("/dashboard");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-96px)] bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto flex max-w-sm flex-col rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Admin Login</h1>
        <p className="mt-1 text-xs text-zinc-600">
          Demo credentials: username <span className="font-mono">admin</span>,
          password <span className="font-mono">1234</span>. Do not use these in
          a real production site.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-zinc-700">
              Username
+            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border border-zinc-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
              autoComplete="username"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-zinc-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-zinc-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="text-xs text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-2 w-full rounded bg-blue-600 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
