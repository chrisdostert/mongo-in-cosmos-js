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
  const embeddedDbName = 'embeddedDbName'
  const embeddedCollectionName = 'embeddedCollectionName'
  const result = objectUnderTest(cosmosCollection, embeddedDbName, embeddedCollectionName)

  describe('result.find', () => {
    it('should call find w/ expected args', () => {
      /* arrange */
      const query = 'query'
      const options = 'options'

      /* act */
      result.find(
        query,
        options
      )

      /* assert */
      expect(find)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName,
          embeddedCollectionName,
          query,
          options
        )
    })
  })
  describe('result.findOne', () => {
    it('should call findOne w/ expected args', () => {
      /* arrange */
      const query = 'query'
      const options = 'options'

      /* act */
      result.findOne(
        query,
        options
      )

      /* assert */
      expect(findOne)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName,
          embeddedCollectionName,
          query,
          options
        )
    })
  })
  describe('result.insertOne', () => {
    it('should call insertOne w/ expected args', () => {
      /* arrange */
      const doc = 'doc'
      const options = 'options'

      /* act */
      result.insertOne(
        doc,
        options
      )

      /* assert */
      expect(insertOne)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName,
          embeddedCollectionName,
          doc,
          options
        )
    })
  })
  describe('result.updateOne', () => {
    it('should call updateOne w/ expected args', () => {
      /* arrange */
      const filter = 'filter'
      const update = 'update'
      const options = 'options'

      /* act */
      result.updateOne(
        filter,
        update,
        options
      )

      /* assert */
      expect(updateOne)
        .toBeCalledWith(
          cosmosCollection,
          embeddedDbName,
          embeddedCollectionName,
          filter,
          update,
          options
        )
    })
  })
})
