const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes/apiroutes'))
app.use(require('./routes/htmlroutes'))

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
})