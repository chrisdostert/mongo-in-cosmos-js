/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#insertOne
 * @param {object} cosmosCollection
 * @param {string} embeddedCollectionName
 * @param {object} doc
 * @param {object} options
 */
async function insertOne (
  cosmosCollection,
  embeddedCollectionName,
  doc,
  options
) {
  cosmosCollection.insertOne(
    {
      ...doc,
      _collection: embeddedCollectionName
    },
    options
  )
}

module.exports = insertOne
