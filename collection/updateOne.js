/**
 * Implements http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#updateOne
 * @param {object} cosmosCollection
 * @param {string} embeddedCollectionName
 * @param {object} filter
 * @param {object} update
 * @param {object} options
 */
async function updateOne (
  cosmosCollection,
  embeddedCollectionName,
  filter,
  update,
  options
) {
  cosmosCollection.updateOne(
    {
      ...filter,
      _collection: embeddedCollectionName
    },
    update,
    options
  )
}

module.exports = updateOne
