import express from 'express'
import cors from 'cors'

const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(cors()) // TODO: Use webpack proxy for development

app.use('/', express.static(`${process.cwd()}/public`))

app.get('/', (req, res) =>
  res.sendFile(`${process.cwd()}/index.html`)
)

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
