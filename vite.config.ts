import path from "path"
<<<<<<< HEAD
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> origin/dev

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
})
=======
});
>>>>>>> origin/dev
