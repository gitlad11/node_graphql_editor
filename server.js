const express = require('express')
const http = require('http')
const cors = require('cors')

const { get_files, cat_file, write_file, create_file, remove_file } = require('./file_handlers')


const PORT = process.env.PORT || 3004


const app = express()

app.use(cors({
	origin : "http://localhost:3000" || process.env.URL ,
	credentials : true
}))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(express.Router())


////////////////ROUTER/////////////////////////
app.get('/api', (req, res) => {
	res.send('Welcome to chat api!')
})

app.get('/api/files', async (req, res) => {
    console.log('requests')
    var data = await get_files()
    console.log(data)
    res.status(200).json(data)
})

app.listen(PORT, console.log(`server is running on ${PORT}`))