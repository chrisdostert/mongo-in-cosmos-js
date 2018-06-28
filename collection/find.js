/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find
 * @param {object} cosmosCollection
 * @param {string} embeddedCollectionName
 * @param {object} query
 * @param {object} options
 */
async function find (
  cosmosCollection,
  embeddedCollectionName,
  query,
  options
) {
  return cosmosCollection.find(
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

module.exports = find
