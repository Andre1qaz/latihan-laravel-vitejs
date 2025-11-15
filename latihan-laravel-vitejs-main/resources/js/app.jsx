import React from "react"
import { createRoot } from "react-dom/client"
import { createInertiaApp } from "@inertiajs/react"
import "./bootstrap"

createInertiaApp({
  resolve: (name) => {
    // semua halaman kita simpan di resources/js/pages/...
    const pages = import.meta.glob("./pages/**/*.jsx", { eager: true })
    return pages[`./pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
