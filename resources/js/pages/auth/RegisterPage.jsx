import React from "react";

export default function RegisterPage() {
  const csrf = document.querySelector('meta[name="csrf-token"]')?.content ?? "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Register</h1>
        <form method="POST" action="/auth/register" className="space-y-4">
          <input type="hidden" name="_token" value={csrf} />

          <div className="space-y-1">
            <label className="text-sm font-medium">Nama</label>
            <input
              name="name"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Konfirmasi Password</label>
            <input
              name="password_confirmation"
              type="password"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800"
          >
            Daftar
          </button>
        </form>

        <p className="text-sm text-slate-500">
          Sudah punya akun? <a href="/auth/login" className="text-slate-900 underline">Login</a>
        </p>
      </div>
    </div>
  );
}
