

csv = require 'csv';
fs = require 'fs';

source1 = 'C:\\Temp\\rv_prog\\nodejs_dev\\netbeans\\TestCSV\\data\\test1.csv';

readCsv = (callback) -> 
  fs.readFile source1 , 'UTF8', (err, data) -> 
    callback(null, data)

console.log 'Step 1'

readCsv CallBackPostCsv = (err, data) ->
  console.log data

console.log 'Script Completed!!!'