import app from './app'
const cors = require('cors')
const PORT = process.env.PORT

app.listen(() => console.log(`🚀 Server running`))
app.use(cors())
