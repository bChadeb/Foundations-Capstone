const express = require('express')
const cors = require('cors')

const sequelize = require('./database')

const seed = require('./seed.js')
const {addKarma, shownKarma, deleteKarma, addUsers, getUsers} = require('./controller.js')

const app = express()
app.use(express.json())
app.use(cors())


app.post('/api/seed', seed)

app.post('/api/users', getUsers)
app.post('/api/user', addUsers)
app.post('/api/karma', addKarma)
app.get('/api/list', shownKarma)
app.delete('/api/karma/:id', deleteKarma)

sequelize.sync()

app.listen(4000, () => console.log(`My god, its running on 4000!!`))