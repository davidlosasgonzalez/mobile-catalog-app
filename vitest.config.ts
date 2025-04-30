import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'next/image': path.resolve(
                __dirname,
                'test/__mocks__/next/image.tsx',
            ),
        },
    },
});
