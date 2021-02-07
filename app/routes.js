const Correios = require('./Correios/consultasCorreios')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/correios', Correios)

app.listen(5000, () => {
    console.log(`Aplicacao iniciada na porta 5000`)
})