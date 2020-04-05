console.log(__filename);
console.log(__dirname);


var url = 'http://mylogger.io/log';

function log (message) {
    // Send HTTP request
    console.log(message);
}

module.exports.logz = log;
module.exports.urlz = url;

//console.log(module);

