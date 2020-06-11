const MongoHelper = require('./mongo-helper')

describe('Mongo Helper', () => {
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should reconnect when getDb() is invoked and connection is disconnected', async () => {
    const sut = MongoHelper
    await sut.connect(process.env.MONGO_URL)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getDb()
    expect(sut.db).toBeTruthy()
  })
})