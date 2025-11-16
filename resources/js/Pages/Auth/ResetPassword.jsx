import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, KeyRound, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    email: 'user@example.com', // Pre-filled from token
    password: '',
    password_confirmation: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const submit = (e) => {
    e.preventDefault()
    setProcessing(true)
    setErrors({})
    
    // Simulate API call
    setTimeout(() => {
      if (formData.password.length < 8) {
        setErrors({ password: 'Password minimal 8 karakter' })
        setProcessing(false)
      } else if (formData.password !== formData.password_confirmation) {
        setErrors({ password_confirmation: 'Password tidak cocok' })
        setProcessing(false)
      } else {
        setProcessing(false)
        alert('Password berhasil direset!')
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 relative border border-slate-200/50">
          
          {/* Icon */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg">
                <KeyRound className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <RefreshCw className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div className="text-center mt-1">
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Reset Password</h1>
              <p className="text-sm text-slate-500 max-w-sm">
                Buat password baru untuk akun Anda
              </p>
            </div>
          </div>

          {/* Info Alert */}
          <div className="mb-6 p-4 bg-violet-50 border border-violet-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-violet-800">
              <p className="font-semibold mb-1">Password Baru</p>
              <p className="text-violet-700">Pastikan password Anda kuat dan mudah diingat</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Email (Read-only) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-600 outline-none cursor-not-allowed"
                  readOnly
                />
              </div>
              <p className="text-xs text-slate-500 mt-1.5 ml-1">Email tidak dapat diubah</p>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">
                Password Baru
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  className="w-full pl-11 pr-12 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all outline-none text-slate-900"
                  placeholder="Minimal 8 karakter"
                  autoComplete="new-password"
                  autoFocus
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password_confirmation">
                Konfirmasi Password Baru
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password_confirmation"
                  type={showPassword2 ? 'text' : 'password'}
                  value={formData.password_confirmation}
                  className="w-full pl-11 pr-12 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all outline-none text-slate-900"
                  placeholder="Ulangi password baru"
                  autoComplete="new-password"
                  onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword2((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition p-1"
                >
                  {showPassword2 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password_confirmation && (
                <p className="text-sm text-red-500 mt-1.5 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.password_confirmation}
                </p>
              )}
            </div>

            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-semibold text-slate-700 mb-2">Kekuatan Password:</p>
                <div className="flex gap-1 mb-2">
                  <div className={`h-1.5 flex-1 rounded-full ${formData.password.length >= 2 ? 'bg-red-500' : 'bg-slate-200'}`}></div>
                  <div className={`h-1.5 flex-1 rounded-full ${formData.password.length >= 5 ? 'bg-yellow-500' : 'bg-slate-200'}`}></div>
                  <div className={`h-1.5 flex-1 rounded-full ${formData.password.length >= 8 ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                  <div className={`h-1.5 flex-1 rounded-full ${formData.password.length >= 12 ? 'bg-violet-500' : 'bg-slate-200'}`}></div>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-slate-600">
                  <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${formData.password.length >= 8 ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span>Minimal 8 karakter</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={submit}
              disabled={processing || !formData.password || !formData.password_confirmation}
              className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white py-3.5 font-semibold hover:from-violet-600 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] mt-6"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mereset Password...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Reset Password
                </span>
              )}
            </button>
          </div>

          {/* Password Requirements */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Syarat Password
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-0.5">•</span>
                <span>Minimal 8 karakter (lebih panjang lebih baik)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-0.5">•</span>
                <span>Kombinasi huruf besar dan kecil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-0.5">•</span>
                <span>Tambahkan angka dan simbol untuk keamanan ekstra</span>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <button className="text-sm text-slate-600 hover:text-slate-900 transition font-medium">
              Kembali ke Login
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Link reset akan kadaluarsa dalam 60 menit
        </p>
      </div>
    </div>
  )
}