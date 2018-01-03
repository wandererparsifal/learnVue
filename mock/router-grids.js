/**
 * Created by yangming on 17-7-14.
 */
const express = require('express');

const router = express.Router();

function getTimeStrByTime(time) {
  const y = time.getFullYear();
  const M = time.getMonth() + 1;
  const d = time.getDate();
  const h = time.getHours();
  const m = time.getMinutes();
  const arr = [];
  arr.push(y);
  arr.push('年');
  if (M < 10) {
    arr.push('0');
  }
  arr.push(M);
  arr.push('月');
  if (d < 10) {
    arr.push('0');
  }
  arr.push(d);
  arr.push('日 ');
  if (h < 10) {
    arr.push('0');
  }
  arr.push(h);
  arr.push(':');
  if (m < 10) {
    arr.push('0');
  }
  arr.push(m);
  return arr.join('');
}

// 对所有新闻的get进行mock
router.get('/', (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  if (from && to) {
    console.log(from);
    console.log(to);

    const gridItems = [];
    const row1 = [];
    row1.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 0 });
    row1.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 1 });
    gridItems.push(row1);
    const row2 = [];
    row2.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 2 });
    row2.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 3 });
    gridItems.push(row2);
    const row3 = [];
    row3.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 4 });
    row3.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 5 });
    gridItems.push(row3);
    const row4 = [];
    row4.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 6 });
    row4.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 7 });
    gridItems.push(row4);
    const row5 = [];
    row5.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 8 });
    row5.push({ img: '/api/images?name=sss.jpg', date: getTimeStrByTime(new Date()), id: 9 });
    gridItems.push(row5);
    res.json(gridItems);
  }
});

module.exports = router;
