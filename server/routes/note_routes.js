//this will be exported into the master route file
var ObjectID = require('mongodb').ObjectID;
//mongo can't accept a string for ID and needs an object ID

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id //parameters in the URL
    const details = {'_id': new ObjectID(id)}; //id goes here
    db.db().collection('notes').findOne(details, (err, item) => {
      if(err) {
        res.send({'error': 'An error has occured'});
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    console.log(req.body)
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.db().collection('notes').deleteOne(details, (err, item) => {
      if(err) {
        res.send({'error': 'An Error has occured'})
      } else {
        res.send('Note ' + id + ' was deleted!')
      }
    })
  })

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const note = { text: req.body.body, title: req.body.title };
    db.db().collection('notes').updateOne(details, note, (err, item) => {
      if(err) {
        res.send({'error': 'An error has occured'});
      } else {
        res.send(item)
      }
    })
  })

  app.post('/notes', (req, res) => {
    //we create the note here
    const note = { text: req.body.body, title: req.body.title };
    //make a .db() call on your db variable before calling .collection() 
    db.db().collection('notes').insert(note, (err, results) => {
      if(err) {
        res.send({'error': 'An error has occured'})
      } else {
        res.send(results.ops[0])
      }
    })
  });
};