const express = require('express')
const cors = require('cors')

const sequelize = require('./database')

const seed = require('./seed.js')
const {addKarma} = require('./controller.js')

const app = express()
app.use(express.json())
app.use(cors())


app.post('/api/seed', seed)

app.post('/api/karma', addKarma)

sequelize.sync()

app.listen(1234, () => console.log(`My god, its running on 1234!!`))