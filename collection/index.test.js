jest.mock('./find', () => jest.fn())
const find = require('./find')

jest.mock('./findOne', () => jest.fn())
const findOne = require('./findOne')

jest.mock('./insertOne', () => jest.fn())
const insertOne = require('./insertOne')

jest.mock('./updateOne', () => jest.fn())
const updateOne = require('./updateOne')

const objectUnderTest = require('./index')

describe('collection', () => {
  const cosmosCollection = 'cosmosCollection'
  const collectionName = 'collectionName'
  const result = objectUnderTest(cosmosCollection, collectionName)

  describe('result.find', () => {
    it('should call find w/ expected args', async () => {
      /* arrange */
      const query = 'query'
      const options = 'options'

      /* act */
      await result.find(
        query,
        options
      )

      /* assert */
      expect(find)
        .toBeCalledWith(
          cosmosCollection,
          collectionName,
          query,
          options
        )
    })
  })
  describe('result.findOne', () => {
    it('should call findOne w/ expected args', async () => {
      /* arrange */
      const query = 'query'
      const options = 'options'

      /* act */
      await result.findOne(
        query,
        options
      )

      /* assert */
      expect(findOne)
        .toBeCalledWith(
          cosmosCollection,
          collectionName,
          query,
          options
        )
    })
  })
  describe('result.insertOne', () => {
    it('should call insertOne w/ expected args', async () => {
      /* arrange */
      const doc = 'doc'
      const options = 'options'

      /* act */
      await result.insertOne(
        doc,
        options
      )

      /* assert */
      expect(insertOne)
        .toBeCalledWith(
          cosmosCollection,
          collectionName,
          doc,
          options
        )
    })
  })
  describe('result.updateOne', () => {
    it('should call updateOne w/ expected args', async () => {
      /* arrange */
      const filter = 'filter'
      const update = 'update'
      const options = 'options'

      /* act */
      await result.updateOne(
        filter,
        update,
        options
      )

      /* assert */
      expect(updateOne)
        .toBeCalledWith(
          cosmosCollection,
          collectionName,
          filter,
          update,
          options
        )
    })
  })
})
