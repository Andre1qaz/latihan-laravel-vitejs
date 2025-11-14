import React from 'react';
import { router } from '@inertiajs/react'; // ✅ BENAR

export default function Pagination({ meta, links }) {
    if (!meta) return null;

    function goto(url) {
        if (!url) return;
        router.get(url, {}, { preserveState: true, replace: true }); // ✅ Ganti Inertia jadi router
    }

    return (
        <div className="flex items-center justify-between">
            <div>Menampilkan {meta.from} - {meta.to} dari {meta.total}</div>
            <div className="flex gap-2">
                {links && links.map((l, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => goto(l.url)} 
                        disabled={!l.url} 
                        className={`px-3 py-1 border ${l.active ? 'bg-gray-200' : ''}`} 
                        dangerouslySetInnerHTML={{ __html: l.label }} 
                    />
                ))}
            </div>
        </div>
    );
}