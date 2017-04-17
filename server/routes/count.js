const express = require('express'),
      Count = require('../models/count')

module.exports = (() => {
    'use strict';

    const router = express.Router();

    const countProjection = {
      __v: false,
      _id: false
    }

    router.get('/', (req, res) => {
      Count.findOne({}, countProjection, (err, count) => {
        if(err) throw err
        if(!count || count.count === null) {

          const init = new Count({
            count: 0
          })

          init.save(err => {
            if(err) throw err
            console.log('Init saved')
            res.json({ count: { count: 0 } })
          })
        } else {
          console.log('Count found: ', count)
          res.json({ count })
        }
      })
    })

    router.post('/', (req, res) => {
      const { count } = req.body
      const newScore = count

      Count.findOneAndUpdate({}, { count: newScore }, { projection: countProjection }, (err, score) => {
        if(err) throw err
        res.json({ count: newScore })
      })
    })

    return router;
})();
