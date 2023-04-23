const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser")


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    {'ID 2' : { Foto: 'https://files.fm/u/sv8zx22rr'} },
    {'ID 2' : { Nome: 'Oracle One', Curso:'Programação', link: 'https://www.oracle.com/br/education/oracle-next-education/'} },
    {'ID 3' : { Nome: 'Proa Tech', Curso:'Programação', link:'https://www.proa.org.br/'} },
]

app.get('/',(req, res) => {
    return res.json(db)
})

app.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

        db.push(body)
    return res.json(body)
})

app.listen(21262, () => {
    console.log('express started at http://localhost:21262')
})\
