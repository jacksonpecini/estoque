const express = require('express')
const app = express()
const port = 5000

require('./router')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})