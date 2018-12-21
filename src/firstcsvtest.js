var CallBackPostCsv, csv, fs, readCsv, source1;

csv = require('csv');

fs = require('fs');

source1 = 'C:\\Temp\\rv_prog\\nodejs_dev\\netbeans\\TestCSV\\data\\test1.csv';

readCsv = function(callback) {
  return fs.readFile(source1, 'UTF8', function(err, data) {
    return callback(null, data);
  });
};

console.log('Step 1');

readCsv(CallBackPostCsv = function(err, data) {
  return console.log(data);
});

console.log('Script Completed!!!');
