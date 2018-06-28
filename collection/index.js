const insertOne = require('./insertOne')
const find = require('./find')
const findOne = require('./findOne')
const updateOne = require('./updateOne')

/**
 * returns embedded collection
 * @param {object} cosmosCollection mongoDb native driver collection connected w/ cosmos db/collection details
 * @param {string} embeddedCollectionName name of embedded collection
 */
function collection (
  cosmosCollection,
  embeddedCollectionName
) {
  return {
    find: find.bind(this, cosmosCollection, embeddedCollectionName),
    findOne: findOne.bind(this, cosmosCollection, embeddedCollectionName),
    insertOne: insertOne.bind(this, cosmosCollection, embeddedCollectionName),
    updateOne: updateOne.bind(this, cosmosCollection, embeddedCollectionName)
  }
}
module.exports = collection
