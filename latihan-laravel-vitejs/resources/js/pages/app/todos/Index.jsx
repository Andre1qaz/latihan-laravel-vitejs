import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import TodoItem from '@/components/TodoItem';
import Pagination from '@/components/Pagination';

export default function Index() {
    const { todos, filters } = usePage().props;

    function handleSearch(e) {
        e.preventDefault();
        const q = e.target.q.value;
        Inertia.get(route('todos.index'), { q }, { preserveState: true, replace: true });
    }

    return (
        <AppLayout>
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Daftar Todo</h2>
                    <div className="flex gap-2">
                        <a href={route('todos.create')} className="btn btn-primary">Buat Todo</a>
                        <a href={route('todos.stats')} className="btn btn-outline">Statistik</a>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="mb-4">
                    <input name="q" defaultValue={filters.q || ''} placeholder="Cari..." className="input" />
                    <button type="submit" className="btn ml-2">Cari</button>
                </form>

                <div className="grid gap-4">
                    {todos.data && todos.data.length > 0 ? (
                        todos.data.map((t) => (
                            <TodoItem key={t.id} todo={t} />
                        ))
                    ) : (
                        <div>Tidak ada data</div>
                    )}
                </div>

                <div className="mt-6">
                    <Pagination meta={todos.meta} links={todos.links} />
                </div>
            </div>
        </AppLayout>
    );
}
