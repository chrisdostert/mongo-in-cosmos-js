/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne
 * @param {object} cosmosCollection
 * @param {string} embeddedDbName
 * @param {string} embeddedCollectionName
 * @param {object} doc
 * @param {object} options
 */
function insertOne (
  cosmosCollection,
  embeddedDbName,
  embeddedCollectionName,
  doc,
  options
) {
  return cosmosCollection.insertOne(
    {
      ...doc,
      _collection: embeddedCollectionName,
      _db: embeddedDbName
    },
    options
  )
}

module.exports = insertOne
