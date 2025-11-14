import React, { useEffect, useRef } from 'react';
import AppLayout from '@/layouts/AppLayout';
import { usePage, Inertia } from '@inertiajs/react';

export default function Form() {
    const { todo } = usePage().props;
    const formRef = useRef();

    useEffect(() => {
        // Initialize Trix if present
        if (typeof window !== 'undefined' && window.Trix) {
            // nothing special for now
        }
    }, []);

    function submit(e) {
        e.preventDefault();
        const form = new FormData(formRef.current);
        const method = todo ? 'post' : 'post';
        const url = todo ? route('todos.update', todo.id) : route('todos.store');
        if (todo) form.append('_method', 'PUT');
        Inertia.post(url, form);
    }

    return (
        <AppLayout>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4">{todo ? 'Edit Todo' : 'Buat Todo'}</h2>
                <form ref={formRef} onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block mb-1">Judul</label>
                        <input defaultValue={todo?.title || ''} name="title" className="input" required />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Deskripsi</label>
                        <input id="trix-input" type="hidden" name="description" defaultValue={todo?.description || ''} />
                        <trix-editor input="trix-input" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Cover</label>
                        <input type="file" name="cover" accept="image/*" />
                        {todo?.cover && (
                            <div className="mt-2">Gambar saat ini: <img src={route('home') + 'storage/' + todo.cover} alt="cover" className="w-32" /></div>
                        )}
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">Simpan</button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
