import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, LogOut, Clock, Inbox } from 'lucide-react'

export default function VerifyEmail() {
  const [processing, setProcessing] = useState(false)
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setProcessing(true)
    
    // Simulate API call
    setTimeout(() => {
      setStatus('verification-link-sent')
      setProcessing(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 relative border border-slate-200/50">
          
          {/* Icon */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg animate-pulse">
                <Mail className="w-11 h-11 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Verifikasi Email Anda</h1>
              <p className="text-sm text-slate-500 max-w-sm">
                Terima kasih telah mendaftar! Sebelum memulai, verifikasi alamat email Anda terlebih dahulu.
              </p>
            </div>
          </div>

          {/* Main Info Alert */}
          <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-start gap-3">
            <Inbox className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-sky-800">
              <p className="font-semibold mb-1">Cek Email Anda</p>
              <p className="text-sky-700">Kami telah mengirimkan link verifikasi ke email Anda. Klik link tersebut untuk mengaktifkan akun.</p>
            </div>
          </div>

          {/* Success Status */}
          {status === 'verification-link-sent' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-800">
                <p className="font-semibold mb-1">Link Verifikasi Terkirim!</p>
                <p className="text-green-700">Link verifikasi baru telah dikirim ke alamat email Anda.</p>
              </div>
            </div>
          )}

          {/* Steps */}
          <div className="mb-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Langkah-langkah:</h3>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div className="text-sm text-slate-600">
                Buka inbox email Anda
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div className="text-sm text-slate-600">
                Cari email dari Todos Inertia
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div className="text-sm text-slate-600">
                Klik tombol "Verifikasi Email"
              </div>
            </div>
          </div>

          {/* Resend Button */}
          <button
            onClick={submit}
            disabled={processing}
            className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3.5 font-semibold hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim Ulang...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Kirim Ulang Email Verifikasi
              </span>
            )}
          </button>

          {/* Help Section */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Tidak Menerima Email?
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-0.5">•</span>
                <span>Cek folder spam atau junk email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-0.5">•</span>
                <span>Pastikan email yang Anda daftarkan sudah benar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-0.5">•</span>
                <span>Tunggu beberapa menit, kemudian coba kirim ulang</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-0.5">•</span>
                <span>Hubungi support jika masalah berlanjut</span>
              </li>
            </ul>
          </div>

          {/* Logout Button */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <button
              onClick={() => alert('Logged out')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all text-sm font-medium text-slate-700"
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Email verifikasi dikirim dari{' '}
            <span className="font-semibold text-slate-700">no-reply@todosapp.com</span>
          </p>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Link verifikasi berlaku selama 24 jam
        </p>
      </div>
    </div>
  )
}