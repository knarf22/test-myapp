import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
//   base: '/test-myapp/',   // 👈 this fixes GitHub Pages path
// })

export default defineConfig({
  base: '/test-myapp/',
  plugins: [react(), tailwindcss()]
})
