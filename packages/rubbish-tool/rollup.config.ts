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
    /* es min */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/esm/rubbish-tool.min.js',
            format: 'esm',
            // sourcemap: true,
            // sourcemapFile: path.join(
            //     __dirname,
            //     'dist/cjs/rubbish-tool.min.map'
            // ),
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
    /* commonjs min */
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/cjs/rubbish-tool.min.cjs',
            format: 'cjs',
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
    /* umd min */
    {
        input: 'src/index.ts',
        output: {
            name: 'RTool',
            file: 'dist/umd/rubbish-tool.min.js',
            format: 'umd',
        },
        plugins: [typescript(), terser()],
    },
]

export default defineConfig(bundles)
