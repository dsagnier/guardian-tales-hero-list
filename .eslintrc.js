module.exports = {
  root: true,
  env: {
    node: true
  },
  publicPath: process.env.MODE_ENV === 'production' ? '/guardian-tales-hero-list/' : '/'
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
