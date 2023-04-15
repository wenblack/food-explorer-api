import app from './app'
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
app.use(cors())
