const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

app.get('/api/ping', (req, res) => {
    res.json({ message: "Serveur TaskFlow opérationnel"})
})

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`)
})