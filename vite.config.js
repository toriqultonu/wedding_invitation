import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` makes all asset URLs relative, so the build works whether it is
// served from a custom domain root OR from a `username.github.io/<repo>/` subpath.
// This is the safest choice for GitHub Pages and avoids 404s on JS/CSS/fonts.
export default defineConfig({
  base: './',
  plugins: [react()],
})
