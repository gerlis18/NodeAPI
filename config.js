require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  db_url: process.env.MONGO_URL,
  secret: 'whateversecretkeyyouwant'
}