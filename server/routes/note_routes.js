//this will be exported into the master route file
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    //we create the note here
    console.log(req.body)
    res.send('Hello')
  });
}