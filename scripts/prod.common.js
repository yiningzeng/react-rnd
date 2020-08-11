import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      exclude: ['*.d.ts', 'stories'],
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
  output: {
    sourcemap: true,
    exports: 'named',
    name: 'react-sortable-pane',
    globals: {
      react: 'React',
      're-resizable': 'Resizable',
      'powerai-react-draggable-v2': 'Draggable',
    },
  },
  external: ['react', 're-resizable', 'powerai-react-draggable-v2'],
};
