import express from 'express'
import cors from 'cors'
import { talks } from './data/talks'

const PORT = 8080
const app = express()

app.use(cors()) // TODO: Use webpack proxy for development

app.use('/', express.static(`${process.cwd()}/public`))

app.get('/', (req, res) =>
  res.sendFile(`${process.cwd()}/index.html`)
)

app.get('/api/talks', (req, res) => res.json(talks))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
