// put this file on server
module.exports = {
  apps: [
    {
      name: 'nae_admin',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
