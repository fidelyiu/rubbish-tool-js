import type { RollupOptions } from 'rollup'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const bundles: RollupOptions[] = [
    /* es */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/esm/rubbish-tool.js',
            format: 'esm',
        },
        plugins: [typescript()],
    },
    /* es min no map */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/esm/rubbish-tool.min.nomap.js',
            format: 'esm',
        },
        plugins: [typescript(), terser()],
    },
    /* es min */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/esm/rubbish-tool.min.js',
            format: 'esm',
            sourcemap: true,
            sourcemapFile: 'dist/esm/rubbish-tool.min.map',
        },
        plugins: [typescript(), terser()],
    },
    /* commonjs */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/cjs/rubbish-tool.cjs',
            format: 'cjs',
        },
        plugins: [typescript()],
    },
    /* commonjs min nomap*/
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/cjs/rubbish-tool.min.nomap.cjs',
            format: 'cjs',
        },
        plugins: [typescript(), terser()],
    },
    /* commonjs min */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/cjs/rubbish-tool.min.cjs',
            format: 'cjs',
            sourcemap: true,
            sourcemapFile: 'dist/cjs/rubbish-tool.min.map',
        },
        plugins: [typescript(), terser()],
    },
    /* umd */
    {
        input: 'src/index.ts',
        output: {
            name: 'RTool',
            file: 'dist/umd/rubbish-tool.js',
            format: 'umd',
        },
        plugins: [typescript()],
    },
    /* umd min no map */
    {
        input: 'src/index.ts',
        output: {
            name: 'RTool',
            file: 'dist/umd/rubbish-tool.min.nomap.js',
            format: 'umd',
        },
        plugins: [typescript(), terser()],
    },
    /* umd min */
    {
        input: 'src/index.ts',
        output: {
            name: 'RTool',
            file: 'dist/umd/rubbish-tool.min.js',
            format: 'umd',
            sourcemap: true,
            sourcemapFile: 'dist/umd/rubbish-tool.min.map',
        },
        plugins: [typescript(), terser()],
    },
]

export default defineConfig(bundles)
