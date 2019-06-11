var path = require('path');
module.exports = {
    entry: __dirname + "/src/index.js",
    devServer : {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 8085
    }
}