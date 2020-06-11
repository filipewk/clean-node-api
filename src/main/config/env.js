module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || '(*)(^*&^^&*jp34343(76)))',
  port: process.env.PORT || 5858
}
