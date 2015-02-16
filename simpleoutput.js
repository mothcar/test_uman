/**
 * Created by Paul on 15. 2. 12.
 */

var http = require('http'),
    fs = require('fs');


fs.readFile('./ang.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});
////



