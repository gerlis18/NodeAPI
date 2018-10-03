module.exports = {
  port: process.env.PORT || 3000,
  db_url: process.env.MONGO_URL || "mongodb://admin:admin12345@ds117623.mlab.com:17623/db-example",
  secret: 'whateversecretkeyyouwant'
}