// this will be our master route file; and we have individual files for individual routes for them all to be brought together here
const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
  noteRoutes(app, db)
}