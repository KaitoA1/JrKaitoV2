const { createServer } = require('http');
const { readFileSync } = require('fs');

const port = 53134

createServer((req, res) => {
    let responseCode = 404;
    let content = '404';

    if(req.url === '/') {
        responseCode = 200;
        content = readFileSync('./index.html');
    }

    res.writeHead(responseCode, {
        'content-type': 'text/html;charset=utf-8'
    });

    res.write(content);
    res.end();
})
    .listen(port);