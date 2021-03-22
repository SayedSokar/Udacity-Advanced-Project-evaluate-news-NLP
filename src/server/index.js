const mockAPIResponse = require('./mockAPI.js')

//------ Create Express-------//
const express = require('express')
const app = express()
//----------------------------//

//----------use dotenv to protect my KEY------//
const dotenv = require('dotenv')
dotenv.config();
//----------------------------//

const fetch = require("node-fetch");
var path = require("path");

const PORT = 8081
const parser = require("body-parser");
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.use(express.static('dist'))

//------CORS to avoid Security restrictions---//
const cors = require('cors');
app.use(cors());
//----------------------------//

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})
//--------------------Post Request---------////
app.post('/check', async (req, res) => {
    try {
            const url=req.body.url;        
            const API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
            const API_KEY=process.env.API_KEY
            ///console.log(process.env.API_KEY);
            const API_info = `${API_URL}?key=${API_KEY}&url=${url}&lang=en`
            const response=await fetch(API_info)
            const FB_data=await response.json()
           ////console.log(data)
           
        const Apidata = {
                agreement:FB_data.agreement,
                subjectivity:FB_data.subjectivity,
                confidence:FB_data.confidence,
                irony:FB_data.irony
            }
        
        res.send(Apidata)
        
    } catch (error) {
        console.log("error", error.message)
    }
})

//-----------End of Post Request-------------//
app.get('/testGet', function (req, res) {
    res.send(mockAPIResponse)
})
//------------------------------------------//

//--------PORT Setup-------//
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
//--------------------------------------------//
