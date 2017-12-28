/**
 * Created by yangming on 17-7-14.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// 对所有新闻的get进行mock
router.get('/:name', (req, res) => {
  fs.readFile(path.join(__dirname, '../static/', req.params.name), 'binary', (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.write(file, 'binary');
      res.end();
    }
  });
});

module.exports = router;
