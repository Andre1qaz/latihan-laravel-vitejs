import React, { useState } from 'react'
import { Mail, ArrowLeft, Send, CheckCircle2, KeyRound, AlertCircle } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setProcessing(true)
    setError('')
    setStatus('')
    
    // Simulate API call
    setTimeout(() => {
      if (!email.includes('@')) {
        setError('Email tidak valid')
        setProcessing(false)
      } else {
        setStatus('Link reset password telah dikirim ke email Anda!')
        setProcessing(false)
        setEmail('')
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Back Button */}
        <button className="mb-4 flex items-center gap-2 text-slate-300 hover:text-white transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Kembali ke Login</span>
        </button>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 relative border border-slate-200/50">
          
          {/* Icon */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <KeyRound className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-cyan-400 rounded-full border-2 border-white flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div className="text-center mt-1">
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Lupa Password?</h1>
              <p className="text-sm text-slate-500 max-w-sm">
                Tidak masalah! Masukkan email Anda dan kami akan mengirimkan link untuk reset password.
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl flex items-start gap-3">
            <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-indigo-800">
              <p className="font-semibold mb-1">Cek Email Anda</p>
              <p className="text-indigo-700">Link reset akan dikirim ke email yang terdaftar</p>
            </div>
          </div>

          {/* Success Status */}
          {status && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-800">
                <p className="font-semibold">{status}</p>
              </div>
            </div>
          )}

          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900"
                  placeholder="nama@email.com"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 mt-1.5 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {error}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={submit}
              disabled={processing || !email}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3.5 font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] mt-6"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mengirim Link...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Kirim Link Reset Password
                </span>
              )}
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Butuh Bantuan?
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Link akan dikirim dalam beberapa menit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Cek folder spam jika tidak menerima email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Link berlaku selama 60 menit</span>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-center space-y-3">
            <p className="text-sm text-slate-600">
              Sudah ingat password?{' '}
              <button className="text-indigo-600 font-semibold hover:underline transition">
                Login sekarang
              </button>
            </p>
            <p className="text-xs text-slate-500">
              Atau{' '}
              <button className="text-slate-700 font-medium hover:underline transition">
                hubungi support
              </button>
              {' '}untuk bantuan lebih lanjut
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Email akan dikirim dari no-reply@todosapp.com
        </p>
      </div>
    </div>
  )
}