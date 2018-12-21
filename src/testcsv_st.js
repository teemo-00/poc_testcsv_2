/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var csv, fs, source1;

csv = require('csv');
fs = require('fs');

source1 = 'C:\\Temp\\rv_prog\\nodejs_dev\\netbeans\\TestCSV\\data\\test1.csv';

console.log('Step 1');


function ReadCsvSource (callback) {
   // any async callback invokes callback with response
   fs.readFile(source1, 'UTF8', function(err, content) {
      if (err) return callback(err);
      
       callback(null, content);
   });
}

ReadCsvSource (function execPostReadCsv(err, result) {
   // process the async result
   console.log('postRead');
   console.log(result);
});

console.log('Script Completed!!!');