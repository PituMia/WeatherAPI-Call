import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/WeatherAPI-Call/",  // 👈 Ajusta esto con el nombre de tu repo
  server: {
    host: '0.0.0.0', // Permite que el servidor sea accesible desde cualquier dispositivo en la red local
    port: 3000, // El puerto que deseas usar, por defecto es 3000
  },
});