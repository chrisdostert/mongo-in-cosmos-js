jest.mock('./collection', () => jest.fn())
const collection = require('./collection')

const objectUnderTest = require('./index')

describe('db', () => {
  const cosmosCollection = 'cosmosCollection'
  const embeddedDbName = 'embeddedDbName'
  const result = objectUnderTest(cosmosCollection, embeddedDbName)

  describe('result.collection', () => {
    it('should call collection w/ expected args', () => {
      /* arrange */
      const embeddedCollectionName = 'embeddedCollectionName'

      /* act */
      result.collection(embeddedCollectionName)

      /* assert */
      expect(collection)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName,
          embeddedCollectionName
        )
    })
  })
})
