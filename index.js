const express = require('express');
const util = require('util');
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('<html><head></head><body><pre>'+util.inspect(req)+'</pre></body></html>');
});
app.listen(port);
