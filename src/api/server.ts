import app from './app'
const cors = require('cors')
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
app.use(cors())
