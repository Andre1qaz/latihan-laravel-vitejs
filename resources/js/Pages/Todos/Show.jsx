import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'

export default function Show({ todo }) {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              👁️ Detail Todo
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {todo.title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">ID: {todo.id}</p>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
              todo.is_done
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-500/30'
                : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/30'
            }`}
          >
            {todo.is_done ? (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Selesai
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Belum Selesai
              </>
            )}
          </span>
        </div>
      }
    >
      <Head title={`Detail - ${todo.title}`} />

      <div className="py-8">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* MAIN CARD */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50">
            {/* COVER IMAGE */}
            {todo.cover && (
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100">
                <img
                  src={`/storage/${todo.cover}`}
                  alt={todo.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-bold text-slate-900">Cover Image</span>
                </div>
              </div>
            )}

            {/* CONTENT */}
            <div className="space-y-6 p-8">
              {/* METADATA BADGES */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 ring-1 ring-blue-100">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-xs font-semibold text-slate-700">
                    Dibuat: <span className="text-blue-700">{todo.created_at}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 ring-1 ring-purple-100">
                  <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-xs font-semibold text-slate-700">
                    Diubah: <span className="text-purple-700">{todo.updated_at}</span>
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t-2 border-slate-100" />

              {/* CATATAN SECTION */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Catatan</h3>
                    <p className="text-xs text-slate-500">Detail informasi todo</p>
                  </div>
                </div>

                {todo.note ? (
                  <div className="rounded-xl border-2 border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
                    <div
                      className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700"
                      dangerouslySetInnerHTML={{ __html: todo.note }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                      <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-600">Belum ada catatan</p>
                    <p className="mt-1 text-xs text-slate-500">Todo ini belum memiliki catatan detail</p>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-3 border-t-2 border-slate-100 pt-6 sm:flex-row">
                <Link
                  href={route('todos.edit', todo.id)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Todo
                </Link>
                <Link
                  href={route('todos.index')}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Daftar
                </Link>
              </div>
            </div>
          </div>

          {/* INFO STATS CARDS */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg shadow-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Status</p>
                  <p className="mt-2 text-2xl font-black">{todo.is_done ? 'Done' : 'Pending'}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  {todo.is_done ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white shadow-lg shadow-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Cover</p>
                  <p className="mt-2 text-2xl font-black">{todo.cover ? 'Ada' : 'Tidak'}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 p-6 text-white shadow-lg shadow-indigo-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Catatan</p>
                  <p className="mt-2 text-2xl font-black">{todo.note ? 'Ada' : 'Kosong'}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BACK LINK */}
          <div className="flex justify-start sm:hidden">
            <Link
              href={route('todos.index')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}