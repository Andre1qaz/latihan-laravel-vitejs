import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm, Link } from '@inertiajs/react'
import TrixEditor from '@/Components/TrixEditor'

export default function Edit({ todo }) {
  const { data, setData, post, processing, errors } = useForm({
    _method: 'PUT',
    title: todo.title || '',
    note: todo.note || '',
    is_done: todo.is_done,
    cover: null,
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('todos.update', todo.id), {
      forceFormData: true,
    })
  }

  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              ✏️ Edit Todo
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {todo.title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">ID: {todo.id}</p>
          </div>
          <Link
            href={route('todos.index')}
            className="hidden items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md sm:inline-flex"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
          </Link>
        </div>
      }
    >
      <Head title="Edit Todo" />

      <div className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={submit}
            className="space-y-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200/50"
          >
            {/* HEADER FORM */}
            <div className="border-b border-slate-200 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Edit Informasi Todo</h3>
                  <p className="text-sm text-slate-500">Perbarui detail todo yang sudah ada</p>
                </div>
              </div>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* JUDUL - 2 KOLOM */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Judul Todo
                  </span>
                </label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10"
                />
                {errors.title && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.title}
                  </div>
                )}
              </div>

              {/* STATUS - 1 KOLOM */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Status
                  </span>
                </label>
                <div className="rounded-xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-amber-50/30 p-4 transition-all hover:border-amber-300">
                  <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={data.is_done}
                      onChange={(e) => setData('is_done', e.target.checked)}
                      className="h-5 w-5 rounded-lg border-slate-300 text-amber-600 shadow-sm transition-all focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    />
                    <span className="flex items-center gap-2">
                      {data.is_done ? (
                        <>
                          <span className="text-green-600">✓</span>
                          <span className="text-green-700">Selesai</span>
                        </>
                      ) : (
                        <>
                          <span className="text-amber-600">○</span>
                          <span>Tandai selesai</span>
                        </>
                      )}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* CATATAN - FULL WIDTH */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Catatan
                  <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    TRIX EDITOR
                  </span>
                </span>
              </label>
              <div className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-sm transition-all focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/10">
                <div className="bg-gradient-to-r from-slate-50 to-amber-50/30 p-3">
                  <TrixEditor
                    inputName="note"
                    value={data.note}
                    onChange={(v) => setData('note', v)}
                  />
                </div>
              </div>
              {errors.note && (
                <div className="mt-2 flex items-center gap-2 text-xs text-red-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.note}
                </div>
              )}
            </div>

            {/* COVER IMAGE */}
            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Cover Image Baru
                    <span className="ml-1 text-xs font-normal text-slate-500">(Opsional)</span>
                  </span>
                </label>
                <div className="rounded-xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-amber-50/20 p-6 transition-all hover:border-amber-400 hover:bg-amber-50/30">
                  <div className="flex items-center justify-center">
                    <label className="flex cursor-pointer flex-col items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 transition-all hover:bg-amber-200">
                        <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-700">
                          {data.cover ? (
                            <span className="text-amber-600">✓ {data.cover.name}</span>
                          ) : (
                            'Klik untuk ganti cover'
                          )}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Kosongkan jika tidak ingin mengubah
                        </p>
                      </div>
                      <input
                        type="file"
                        onChange={(e) => setData('cover', e.target.files[0])}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                {errors.cover && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.cover}
                  </div>
                )}
              </div>

              {/* PREVIEW COVER SAAT INI */}
              {todo.cover && (
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Cover Saat Ini
                    </span>
                  </label>
                  <div className="group relative overflow-hidden rounded-xl border-2 border-amber-200 bg-amber-50 p-2 shadow-md">
                    <img
                      src={`/storage/${todo.cover}`}
                      alt="Current cover"
                      className="h-32 w-full rounded-lg object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-xs font-semibold text-white">Cover Aktif</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
              <Link
                href={route('todos.index')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md sm:w-auto"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali ke Daftar
              </Link>

              <div className="flex w-full gap-3 sm:w-auto">
                <Link
                  href={route('todos.show', todo.id)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-100 hover:shadow-md sm:flex-none"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Lihat Detail
                </Link>

                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-lg sm:flex-none"
                >
                  {processing ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Memperbarui...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Update Todo
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* INFO CARD */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 ring-1 ring-amber-100">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Tips Update Todo</p>
                <p className="mt-1 text-xs text-slate-600">
                  Anda dapat mengubah semua informasi todo. Cover image hanya akan diperbarui jika Anda mengunggah gambar baru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}