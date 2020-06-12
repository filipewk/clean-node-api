module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:filipe50@172.19.0.2:27017/clean-node-api?authSource=admin',
  tokenSecret: process.env.TOKEN_SECRET || '(*)(^*&^^&*jp34343(76)))',
  port: process.env.PORT || 5858
}
