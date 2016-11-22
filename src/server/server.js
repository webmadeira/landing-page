import express from 'express'
import { talks } from './data/talks'
import cors from 'cors'

const PORT = 8080
const app = express()

app.use(cors()) // TODO: Use webpack proxy for development

app.get('/api/talks', (req, res) => res.json(talks))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
