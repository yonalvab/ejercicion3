import express from 'express'
import loginRoute from './routes/userRoutes.js'

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Root Endpoint')
})

app.post('/login', loginRoute)

app.listen(3000, () => {
  console.log('Iniciado correctamente en http://localhost:3000')
})