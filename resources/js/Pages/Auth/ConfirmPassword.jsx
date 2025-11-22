import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import { Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react'

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    post(route('password.confirm'), {
      onFinish: () => reset('password'),
    })
  }

  return (
    <>
      <Head title="Confirm Password" />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-md relative">
          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 relative border border-slate-200/50">
            
            {/* Icon Shield */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <Lock className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-center mt-1">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Konfirmasi Password</h1>
                <p className="text-sm text-slate-500 max-w-sm">
                  Ini adalah area aman dari aplikasi. Harap konfirmasi password Anda sebelum melanjutkan.
                </p>
              </div>
            </div>

            {/* Warning Alert */}
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Area Keamanan Tinggi</p>
                <p className="text-amber-700">Masukkan password Anda untuk mengakses fitur ini</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-5">
              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={data.password}
                    className="w-full pl-11 pr-12 py-3 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-slate-900"
                    placeholder="Masukkan password Anda"
                    autoComplete="current-password"
                    autoFocus
                    onChange={(e) => setData('password', e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1.5 ml-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={processing}
                className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3.5 font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] mt-6"
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memverifikasi...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Konfirmasi Password
                  </span>
                )}
              </button>
            </form>

            {/* Security Tips */}
            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Tips Keamanan
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Jangan bagikan password Anda kepada siapapun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Gunakan password yang kuat dan unik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Aktifkan autentikasi dua faktor untuk keamanan ekstra</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-center text-xs text-slate-400 mt-6">
            Sesi akan berakhir dalam 15 menit jika tidak ada aktivitas
          </p>
        </div>
      </div>
    </>
  )
}