// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:Sroyamt123@@localhost/strawberrydb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
