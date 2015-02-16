/**
 * Created by Paul on 15. 2. 12.
 */
var express = require("express")
    , app = express();

app.use(express.static('/index2'));
app.listen(8000);
