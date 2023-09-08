module.exports = {
  apps: [
    {
      name: 'mtx-plaid',
      script: './index.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}