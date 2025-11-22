import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { CheckCircle2, Sparkles, ExternalLink, Github, Globe, Video, BookOpen, Zap, Target, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Modul Praktikum
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              E. Aktivitas Praktikum
            </h2>
          </div>
          <span className="hidden rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white sm:inline-flex">
            PABWE – Laravel Inertia
          </span>
        </div>
      }
    >
      <Head title="Dashboard" />

      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 shadow-2xl sm:p-10">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl"></div>
            
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Praktikum 5.1
                </span>
                <span className="text-xs font-semibold text-blue-100">Laravel Inertia</span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                5.1 Fitur Todos – Laravel Inertia
              </h2>
              <p className="max-w-3xl text-base text-blue-50 leading-relaxed sm:text-lg">
                Pada tahap <span className="font-bold text-white">4.1</span> kamu telah mengimplementasikan
                fitur Autentikasi menggunakan Laravel Inertia. Selanjutnya lengkapilah fitur todos
                untuk dapat menambahkan aktivitas yang akan dilakukan oleh pengguna ke depannya.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <BookOpen className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">Perkiraan waktu: 4-6 jam</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Left Column - Requirements */}
            <div className="space-y-6 lg:col-span-2">
              {/* Kebutuhan Utama */}
              <div className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-blue-100 p-2.5">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Kebutuhan Utama</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Fitur minimal yang wajib berfungsi dengan baik
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold text-red-700 ring-1 ring-red-200">
                    <Zap className="w-3 h-3" />
                    WAJIB
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { num: 1, text: 'Tambah Data', color: 'from-blue-500 to-blue-600' },
                    { num: 2, text: 'Ubah Data', color: 'from-indigo-500 to-indigo-600' },
                    { num: 3, text: 'Hapus Data', color: 'from-purple-500 to-purple-600' },
                    { num: 4, text: 'Mengubah Cover', color: 'from-pink-500 to-pink-600' },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition-all hover:bg-slate-100"
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-sm font-bold text-white shadow-md`}>
                        {item.num}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                      <CheckCircle2 className="ml-auto w-4 h-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Kebutuhan Lanjutan */}
              <div className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-cyan-100 p-2.5">
                      <TrendingUp className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Kebutuhan Lanjutan</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Untuk nilai dan pengalaman pengembangan yang lebih baik
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                    <Sparkles className="w-3 h-3" />
                    PLUS
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Pencarian dan Filter Data</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Pagination maksimal 20 data per halaman</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-700">
                      Alert tindakan menggunakan{' '}
                      <a
                        href="https://sweetalert2.github.io/"
                        className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SweetAlert2
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-700">
                      Statistik data menggunakan{' '}
                      <a
                        href="https://apexcharts.com/"
                        className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ApexCharts
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Important Note */}
                  <div className="mt-4 rounded-xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-amber-500 p-1.5">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-amber-900">
                          Pengisian data catatan <span className="underline decoration-2">WAJIB</span> menggunakan
                        </p>
                        <a
                          href="https://trix-editor.org/"
                          className="mt-1 inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Trix Editor
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Artifacts & Info */}
            <div className="space-y-6">
              {/* Artefak */}
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-purple-100 p-2.5">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">5.2 Artefak Dikumpulkan</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Pastikan seluruh artefak berikut sudah siap
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-all hover:bg-slate-100">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-bold text-white shadow-md">
                      1
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Repository Github</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-all hover:bg-slate-100">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-xs font-bold text-white shadow-md">
                      2
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">URL hasil deploy</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-all hover:bg-slate-100">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-xs font-bold text-white shadow-md">
                      3
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-slate-700">Video presentasi <span className="text-xs text-slate-500">(opsional)</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-300">Progress Tracking</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Kebutuhan Utama</span>
                      <span className="font-bold">0/4</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-0 rounded-full bg-blue-500 transition-all"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Kebutuhan Lanjutan</span>
                      <span className="font-bold">0/5</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-0 rounded-full bg-cyan-500 transition-all"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-xs font-medium text-slate-600">
                  © 2025 Delcom Labs
                </p>
                <p className="mt-1 text-xs text-slate-500">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}