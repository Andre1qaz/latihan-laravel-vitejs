import React from "react";

export default function LoginPage() {
  const csrf =
    document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") ||
    "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6 space-y-5">
        {/* Header */}
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-semibold">Masuk ke akun Anda</h1>
          <p className="text-sm text-slate-500">
            Masukkan email Anda untuk masuk ke akun
          </p>
        </div>

        {/* Form */}
        <form method="POST" action="/auth/login" className="space-y-4">
          <input type="hidden" name="_token" value={csrf} />

          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="contoh@email.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Kata Sandi</label>
            <input
              name="password"
              type="password"
              placeholder="Masukkan kata sandi"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-slate-900 transition"
          >
            Masuk
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-slate-500 text-center">
          Belum punya akun?{" "}
          <a href="/auth/register" className="text-black underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
