import React from "react";

export default function HomePage({ auth }) {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Halo, {auth?.user?.name ?? "User"} 👋</h1>
        <p className="text-slate-600">Ini halaman utama setelah login.</p>
        <a
          href="/auth/logout"
          className="inline-block mt-4 text-sm text-red-500 underline"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
