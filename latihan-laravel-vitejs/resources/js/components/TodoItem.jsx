import React from 'react';
import { router } from '@inertiajs/react'; // ✅ BENAR
import Swal from 'sweetalert2';

export default function TodoItem({ todo }) {
    function confirmDelete() {
        Swal.fire({
            title: 'Hapus todo?',
            text: "Tindakan ini tidak dapat dibatalkan.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route('todos.destroy', todo.id)); // ✅ Ganti Inertia jadi router
            }
        });
    }

    return (
        <div className="p-4 border rounded flex items-start">
            {todo.cover && (
                <img src={"/storage/" + todo.cover} alt="cover" className="w-24 h-24 object-cover mr-4" />
            )}
            <div className="flex-1">
                <h3 className="font-semibold">{todo.title}</h3>
                <div className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: todo.description || '' }} />
                <div className="mt-2 flex gap-2">
                    <a href={route('todos.edit', todo.id)} className="btn btn-sm">Edit</a>
                    <button onClick={confirmDelete} className="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
        </div>
    );
}