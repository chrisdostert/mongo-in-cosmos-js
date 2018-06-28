jest.mock('./db', () => jest.fn())
const db = require('./db')

const objectUnderTest = require('./index')

describe('mongoInCosmos', () => {
  const cosmosCollection = 'cosmosCollection'
  const result = objectUnderTest(cosmosCollection)

  describe('result.db', () => {
    it('should call db w/ expected args', () => {
      /* arrange */
      const embeddedDbName = 'embeddedDbName'

      /* act */
      result.db(embeddedDbName)

      /* assert */
      expect(db)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName
        )
    })
  })
})
