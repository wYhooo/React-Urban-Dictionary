//const fs = require('fs');
const path = require('path');
const request = require('request');
const $ = require('cheerio');

//const dir = path.resolve(__dirname, './word_of_today.txt');

function fetchDefId() {
  return new Promise((resolve, reject) => {
    request('http://www.urbandictionary.com/', (err, res, body) => {
      if (err) reject(err);

      let defIdArr = [];
      $('#content .def-panel', body).each((index, ele) => {
        defIdArr.push($(ele).attr('data-defid'));
      });
      resolve(defIdArr);

//    TODO: we can write the id to a file so that we can easily get it
//    let content = latestDefId + '\r\n';
//    fs.appendFile(dir, content, (err) => {
//      if (err) throw err;
//      console.log('append file success');
//    });
    });
  });
}

module.exports = fetchDefId;