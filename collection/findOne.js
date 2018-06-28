/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOne
 * @param {object} cosmosCollection
 * @param {string} embeddedCollectionName
 * @param {object} query
 * @param {object} options
 */
async function findOne (
  cosmosCollection,
  embeddedCollectionName,
  query,
  options
) {
  cosmosCollection.findOne(
    {
      ...query,
      _collection: { $eq: embeddedCollectionName }
    },
    {
      ...options,
      projection: {
        ...options && options.projection,
        _collection: false
      }
    }
  )
}

module.exports = findOne
