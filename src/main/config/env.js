module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:filipe50@localhost:27017/clean-node-api?authSource=admin',
  tokenSecret: process.env.TOKEN_SECRET || 'secret',
  port: process.env.PORT || 5858
}
