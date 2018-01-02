/**
 * Created by yangming on 17-7-14.
 */
const express = require('express');
const qiniu = require('qiniu');

const accessKey = 'qPVKAjw1vQgU_1uFzZhR-VqH-44g2dFQUt2C9pvA';
const secretKey = 'aDUskQiI-_nOsMe43jRVrtTvtvK0UVSwSzH5Xqcy';
const url = 'http://7fveq5.com1.z0.glb.clouddn.com/';

const router = express.Router();
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
// config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z0;
const bucketManager = new qiniu.rs.BucketManager(mac, config);
const bucket = 'twilightdream';
// @param options 列举操作的可选参数
// prefix    列举的文件前缀
// marker    上一次列举返回的位置标记，作为本次列举的起点信息
// limit     每次返回的最大列举文件数量
// delimiter 指定目录分隔符
const options = {
  limit: 20,
  prefix: 'audio/',
};

// 对所有新闻的get进行mock
router.get('/main', (req, res) => {
  bucketManager.listPrefix(bucket, options, (err, respBody, respInfo) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (respInfo.statusCode === 200) {
      // 如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
      // 指定options里面的marker为这个值
      // const nextMarker = respBody.marker;
      // const commonPrefixes = respBody.commonPrefixes;
      // console.log('nextMarker ' + nextMarker);
      // console.log('commonPrefixes ' + commonPrefixes);

      const music = [];
      const items = respBody.items;
      items.forEach((item) => {
        console.log(item.key);
        console.log(item.putTime);
        console.log(item.hash);
        console.log(item.fsize);
        console.log(item.mimeType);
        console.log(item.endUser);
        console.log(item.type);
        music.push({ title: item.key,
          url: url + item.key });
      });
      res.json(music);
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
      res.json({ code: respInfo.statusCode, body: respBody });
    }
  });
});

module.exports = router;
