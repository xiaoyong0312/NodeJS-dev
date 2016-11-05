'use strict';
var fs = require('fs');
var fsExtra = require('fs-extra');
var path = require('path');

/**
 * @desc 文件上传/下载 功能;
 */
var FileUpLoadDownLoad = module.exports = {};

//global._resultData = 'a1';
global._resultData = {};
global.tempData = '';
global._resultData_ = {};
global._imageUrl = '';

//图片文件上传;
//FileUpLoadDownLoad.FileUpLoad = function (stream, fileType) {
FileUpLoadDownLoad.ImageUpLoad = function (req) {
  //if ('pic'.toEqual(fileType));
  //if (expect('pic').toEqual(fileType));
  //fileType = fileType.getLastChildBy('.');

  //var _resultData = {};
  //global._resultData = {};

  console.log('req.files[0]-->>');
  console.log(req.files[0]);  // 上传的文件信息
  //console.log(`req.files[0]-->>\n ${req.files[0]}`);  // 上传的文件信息

  var des_file = __dirname + "/" + req.files[0].originalname;

  console.log(`read path req.files[0].path-->> ${req.files[0].path}`);
  console.log(`write path des_file-->> ${des_file}`);

  //_resultData = 'bb1';
  fs.readFile(req.files[0].path, (err, data)=> {
    //_resultData = 'bb2';
    if (err) {
      console.log(`readFile-- err-->>${err}`);
    } else {
      fs.writeFile(des_file, data, (err)=> {
        if (err) {
          console.log(`writeFile-- err-->>${err}`);
        } else {
          _resultData = {
            message: 'File uploaded successfully',
            filename: req.files[0].originalname
          };
          _imageUrl = des_file;
        }
        // console.log('FileUpLoad _resultData1-->>' + JSON.stringify(_resultData));
        // return _resultData;
      });
    }
    // console.log('FileUpLoad _resultData2-->>' + JSON.stringify(_resultData));
    // return _resultData;
  });

  console.log('FileUpLoad _resultData3-->>' + JSON.stringify(_resultData));

  setTimeout(()=> {
    console.log('FileUpLoad _resultData4-->>' + JSON.stringify(_resultData));
    return _resultData;
  }, 10);
  console.log('FileUpLoad _resultData5-->>' + JSON.stringify(_resultData));
  //return _resultData;

  return _imageUrl;// 返回图片路径；
}

//文件下载;
FileUpLoadDownLoad.FileDownLoad = function () {

  return 'stream path';
}

