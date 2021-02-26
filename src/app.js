const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('ok');
});

module.exports = app;