const insertOne = require('./insertOne')
const find = require('./find')
const findOne = require('./findOne')
const updateOne = require('./updateOne')

/**
 * returns embedded collection
 * @param {object} cosmosCollection mongoDb native driver collection connected w/ cosmos db/collection details
 * @param {string} embeddedDbName name of embedded db
 * @param {string} embeddedCollectionName name of embedded collection
 */
function collection (
  cosmosCollection,
  embeddedDbName,
  embeddedCollectionName
) {
  // binds an implemented method
  const bindImpl = method =>
    method.bind(
      this,
      cosmosCollection,
      embeddedDbName,
      embeddedCollectionName
    )

  return {
    find: bindImpl(find),
    findOne: bindImpl(findOne),
    insertOne: bindImpl(insertOne),
    updateOne: bindImpl(updateOne)
  }
}
module.exports = collection
