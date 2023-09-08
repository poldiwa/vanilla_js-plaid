module.exports = {
  apps: [
    {
      name: 'mtx-plaid',
      script: './server/index.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}