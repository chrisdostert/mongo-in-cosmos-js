/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find
 * @param {object} cosmosCollection
 * @param {string} embeddedDbName
 * @param {string} embeddedCollectionName
 * @param {object} query
 * @param {object} options
 */
function find (
  cosmosCollection,
  embeddedDbName,
  embeddedCollectionName,
  query,
  options
) {
  return cosmosCollection.find(
    {
      ...query,
      _collection: { $eq: embeddedCollectionName },
      _db: { $eq: embeddedDbName }
    },
    {
      ...options,
      projection: {
        ...options && options.projection,
        _collection: false,
        _db: false
      }
    }
  )
}

module.exports = find
