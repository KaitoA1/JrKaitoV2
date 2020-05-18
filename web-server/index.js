const { webServerPORT } = require('../Settings/server.json');

const { createServer } = require('http');
const { readFileSync } = require('fs');


createServer((req, res) => {
    let responseCode = 404;
    let content = '404';

    if(req.url === '/') {
        responseCode = 200;
        content = readFileSync('./web-server/index.html');
    }

    res.writeHead(responseCode, {
        'content-type': 'text/html;charset=utf-8'
    });

    res.write(content);
    res.end();
})
    .listen(webServerPORT);