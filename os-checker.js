const os = require('os');

module.exports = function osInfo () {
    console.log("This computer's Platform: " + os.platform());
    console.log("This computer's CPU architecture: " + os.arch());
};


console.log(module);
