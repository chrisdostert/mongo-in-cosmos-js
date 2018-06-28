const collection = require('./collection')

/**
 * returns embedded db
 * @param {object} cosmosCollection mongoDb native driver collection connected w/ cosmos db/collection details
 * @param {string} embeddedDbName name of embedded db
 */
function db (
  cosmosCollection,
  embeddedDbName
) {
  // binds an implemented method
  const bindImpl = method =>
    method.bind(
      this,
      cosmosCollection,
      embeddedDbName
    )

  return {
    collection: bindImpl(collection)
  }
}

module.exports = db
