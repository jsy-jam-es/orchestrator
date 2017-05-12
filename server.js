const http = require('http')

const express = require('express')
const Primus = require('primus')

const app = express()

app.use('/static', express.static('static'))

const httpServer = http.createServer(app)
const primus = new Primus(httpServer)

primus.on('connection', function (spark) {
    bert(spark)

    spark.on('data', data => console.log(data))
});

function bert(spark) {
    var value = Math.random()
    spark.write(value)
    console.log('sending ' + value)
    setTimeout(() => bert(spark), 1000 + Math.random() * 10000)
}


httpServer.listen(8080)