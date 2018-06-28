/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#updateOne
 * @param {object} cosmosCollection
 * @param {string} embeddedDbName
 * @param {string} embeddedCollectionName
 * @param {object} filter
 * @param {object} update
 * @param {object} options
 */
function updateOne (
  cosmosCollection,
  embeddedDbName,
  embeddedCollectionName,
  filter,
  update,
  options
) {
  return cosmosCollection.updateOne(
    {
      ...filter,
      _collection: embeddedCollectionName,
      _db: embeddedDbName
    },
    update,
    options
  )
}

module.exports = updateOne
