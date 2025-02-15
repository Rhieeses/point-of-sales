import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: [
                        "react",
                        "react-dom",
                        "react-router-dom",
                        "clsx",
                        "tailwind-merge",
                    ],
                },
            },
        },
    },
    esbuild: {
        // This might help with the asyncToGenerator error
        target: "es2020",
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "es2020",
        },
    },
});
