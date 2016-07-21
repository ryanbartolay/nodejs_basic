var fs = require("fs");

console.log(__dirname);

fs.readFile( __dirname + "/" + "/node_modules/express/package.json", 'utf8', function (err, data) {
   // console.log( data );
});

var cb = function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}

fs.readFile('input.txt', cb);
 console.log("Program Ended");

//console.log('after calling readFile');