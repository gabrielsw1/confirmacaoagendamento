// Import dos Módulos
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

//Import das rotas 
const Correios = require('./Correios/consultasCorreios')
const Agendamentos = require('./Agendamentos/agendamentos')

//Declaração de Variaveis
const app = express()
const port = 8989


// Regras de Uso Geral
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//Regras de Uso Por Rota
app.use('/correios', Correios)
app.use('/agendamentos', Agendamentos)

//Inicio do WebService
app.listen(port, () => {
    console.log(`Aplicacao iniciada na porta ${port}`)
})