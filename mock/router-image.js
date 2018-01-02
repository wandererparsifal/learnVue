/**
 * Created by yangming on 17-7-14.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// 对所有新闻的get进行mock
router.get('/', (req, res) => {
  const name = req.query.name;
  if (name) {
    fs.readFile(path.join(__dirname, '../static/', name), 'binary', (err, file) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(file, 'binary');
        res.end();
      }
    });
  }
});

router.get('/carousel', (req, res) => {
  const images = [];
  images.push('/api/images?name=spring.jpg');
  images.push('/api/images?name=summer.jpg');
  images.push('/api/images?name=autumn.jpg');
  images.push('/api/images?name=winter.jpg');
  res.json(images);
});

module.exports = router;
