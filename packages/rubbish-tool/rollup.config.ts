import type { RollupOptions } from 'rollup'
import { defineConfig } from 'rollup'
import path from 'node:path'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const input = path.join(__dirname, 'src/index.ts')

const bundles: RollupOptions[] = [
    /* commonjs */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist/cjs/rubbish-tool.cjs'),
            format: 'cjs',
        },
        plugins: [typescript()],
    },
    /* commonjs min */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist/cjs/rubbish-tool.min.cjs'),
            format: 'cjs',
            // sourcemap: true,
            // sourcemapFile: path.join(
            //     __dirname,
            //     'dist/cjs/rubbish-tool.min.map'
            // ),
        },
        plugins: [typescript(), terser()],
    },
    /* es */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist/esm/rubbish-tool.js'),
            format: 'esm',
        },
        plugins: [typescript()],
    },
    /* es min */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist/esm/rubbish-tool.min.js'),
            format: 'esm',
        },
        plugins: [typescript(), terser()],
    },
    /* umd */
    {
        input,
        output: {
            name: 'RTool',
            file: path.join(__dirname, 'dist/umd/rubbish-tool.js'),
            format: 'umd',
        },
        plugins: [typescript()],
    },
    /* umd min */
    {
        input,
        output: {
            name: 'RTool',
            file: path.join(__dirname, 'dist/umd/rubbish-tool.min.js'),
            format: 'umd',
        },
        plugins: [typescript(), terser()],
    },
]

export default defineConfig(bundles)
