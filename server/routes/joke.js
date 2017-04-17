const express = require('express')

module.exports = (() => {
    'use strict';

    var router = express.Router();

    router.get('/', (req, res) => {
      res.json({ joke: 'blabla bla' })
    })

    return router;
})();
