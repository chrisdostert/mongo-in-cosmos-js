const db = require('./db')

function mongoInCosmos (
  cosmosCollection
) {
  return {
    db: db.bind(this, cosmosCollection)
  }
}
module.exports = mongoInCosmos
