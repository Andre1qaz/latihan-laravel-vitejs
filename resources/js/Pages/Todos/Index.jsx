// resources/js/Pages/Todos/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import Chart from 'react-apexcharts'

export default function Index({ todos, filters, stats = { done: 0, pending: 0 }, flash }) {
  useEffect(() => {
    if (flash?.success) {
      Swal.fire('Berhasil', flash.success, 'success')
    }
  }, [flash])

  const onSearch = (e) => {
    e.preventDefault()
    router.get(
      route('todos.index'),
      {
        q: e.target.q.value,
        status: e.target.status.value,
      },
      { preserveState: true }
    )
  }

  const getNumber = (index) => {
    if (typeof todos.from !== 'undefined' && todos.from !== null) {
      return todos.from + index
    }

    const current = todos.current_page || 1
    const perPage = todos.per_page || todos.data.length || 1
    return (current - 1) * perPage + (index + 1)
  }

  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Modul Todos
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Manajemen Aktivitas
            </h2>
          </div>
          <Link
            href={route('todos.create')}
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 sm:inline-flex"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Todo
          </Link>
        </div>
      }
    >
      <Head title="Todos" />

      <div className="py-8">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* FILTER TOOLBAR - MODERN GLASSMORPHISM */}
          <div className="rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm ring-1 ring-slate-200/50">
            <form
              onSubmit={onSearch}
              className="flex flex-col gap-4 md:flex-row md:items-end"
            >
              <div className="flex-1">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                  🔍 Pencarian
                </label>
                <div className="relative">
                  <input
                    name="q"
                    defaultValue={filters?.q || ''}
                    placeholder="Ketik untuk mencari todo..."
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-52">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                  📊 Status
                </label>
                <select
                  name="status"
                  defaultValue={filters?.status || ''}
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Semua status</option>
                  <option value="done">✅ Selesai</option>
                  <option value="pending">⏳ Belum</option>
                </select>
              </div>

              <div className="flex w-full items-end gap-3 md:w-auto md:justify-end">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 md:flex-none"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Terapkan
                </button>

                <button
                  type="button"
                  onClick={() =>
                    router.get(route('todos.index'), {}, { preserveState: true })
                  }
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md md:flex-none"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset
                </button>

                <Link
                  href={route('todos.create')}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 md:hidden"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Todo
                </Link>
              </div>
            </form>
          </div>

          {/* GRID: LIST KIRI, STAT KANAN */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* LIST TODOS (CARD) */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/50 p-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    📝 Daftar Todo
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {todos.total} total todo, menampilkan {todos.data.length} item
                  </p>
                </div>
              </div>

              {todos.data.length === 0 && (
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                    <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-600">Tidak ada todo yang ditemukan</p>
                  <p className="mt-1 text-xs text-slate-500">Coba ubah filter atau tambahkan todo baru</p>
                </div>
              )}

              {todos.data.map((todo, index) => (
                <div
                  key={todo.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/50 transition-all hover:shadow-xl hover:ring-blue-500/30 hover:-translate-y-1"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                    {/* nomor + status + judul */}
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                            {getNumber(index)}
                          </span>
                          <div>
                            <Link
                              href={route('todos.show', todo.id)}
                              className="text-base font-bold text-slate-900 transition-colors hover:text-blue-600"
                            >
                              {todo.title}
                            </Link>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {todo.created_at}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="font-mono text-[10px]">ID: {todo.id}</span>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-sm ${
                            todo.is_done
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-500/30'
                              : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/30'
                          }`}
                        >
                          {todo.is_done ? (
                            <>
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Selesai
                            </>
                          ) : (
                            <>
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Belum
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* COVER + ACTION */}
                    <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-3">
                        {todo.cover ? (
                          <div className="relative overflow-hidden rounded-xl border-2 border-slate-200 shadow-md">
                            <img
                              src={`/storage/${todo.cover}`}
                              alt=""
                              className="h-16 w-16 object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-center text-[10px] font-semibold text-slate-400">
                            Tanpa
                            <br />
                            Cover
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={route('todos.edit', todo.id)}
                          className="inline-flex items-center gap-1.5 rounded-xl border-2 border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-100 hover:shadow-md"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            Swal.fire({
                              title: 'Hapus?',
                              text: 'Yakin hapus todo ini?',
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonText: 'Ya, hapus',
                              cancelButtonText: 'Batal',
                            }).then((res) => {
                              if (res.isConfirmed) {
                                router.delete(route('todos.destroy', todo.id), {
                                  preserveScroll: true,
                                })
                              }
                            })
                          }}
                          className="inline-flex items-center gap-1.5 rounded-xl border-2 border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 shadow-sm transition-all hover:border-red-300 hover:bg-red-100 hover:shadow-md"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* PAGINATION DI BAWAH LIST */}
              {todos.data.length > 0 && (
                <div className="rounded-xl bg-white/80 p-4 shadow-md backdrop-blur-sm ring-1 ring-slate-200/50">
                  <div className="flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
                    <p className="font-semibold text-slate-600">
                      Halaman <span className="text-blue-600">{todos.current_page}</span> dari{' '}
                      <span className="text-blue-600">{todos.last_page}</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {todos.links.map((link, idx) => (
                        <button
                          key={`${link.label}-${idx}`}
                          onClick={() =>
                            link.url && router.get(link.url, {}, { preserveState: true })
                          }
                          className={`min-w-[40px] rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                            link.active
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                              : link.url
                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                              : 'bg-transparent text-slate-400 cursor-not-allowed'
                          }`}
                          dangerouslySetInnerHTML={{ __html: link.label }}
                          disabled={!link.url}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* STATISTIK (BAR CHART) DI KANAN */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Statistik Todos
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      Visualisasi data aktivitas
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Chart
                    type="bar"
                    height={260}
                    series={[
                      {
                        name: 'Jumlah Todos',
                        data: [stats.done, stats.pending],
                      },
                    ]}
                    options={{
                      chart: {
                        stacked: false,
                        toolbar: { show: false },
                      },
                      plotOptions: {
                        bar: {
                          borderRadius: 8,
                          columnWidth: '50%',
                        },
                      },
                      dataLabels: {
                        enabled: true,
                        style: {
                          fontSize: '12px',
                          fontWeight: 'bold',
                        },
                      },
                      xaxis: {
                        categories: ['Selesai', 'Belum'],
                        labels: {
                          style: {
                            fontSize: '12px',
                            fontWeight: 600,
                          },
                        },
                      },
                      yaxis: {
                        labels: {
                          style: {
                            fontSize: '12px',
                            fontWeight: 600,
                          },
                        },
                        allowDecimals: false,
                      },
                      colors: ['#2563eb'],
                      grid: {
                        borderColor: '#e5e7eb',
                      },
                      legend: {
                        show: false,
                      },
                    }}
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-500/30">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-90">
                    📊 Ringkasan
                  </p>
                  <svg className="h-5 w-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="mt-3 text-4xl font-black">
                  {stats.done + stats.pending}
                </p>
                <p className="text-sm font-semibold opacity-90">Total Todos</p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 shadow-lg">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">Selesai</span>
                    </div>
                    <span className="text-xl font-black">{stats.done}</span>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 shadow-lg">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">Belum</span>
                    </div>
                    <span className="text-xl font-black">{stats.pending}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="text-xs font-semibold opacity-90">Progress</div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg transition-all"
                      style={{
                        width: `${
                          stats.done + stats.pending > 0
                            ? (stats.done / (stats.done + stats.pending)) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="mt-2 text-right text-xs font-bold">
                    {stats.done + stats.pending > 0
                      ? Math.round((stats.done / (stats.done + stats.pending)) * 100)
                      : 0}
                    % Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END GRID */}
        </div>
      </div>
    </AuthenticatedLayout>
  )
}