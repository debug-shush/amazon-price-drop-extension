var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var app = express();
const port = 3000

app.use(bodyParser.json())
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.post("/save-products", (req, res) => {
  console.log("req.body in save-products route: ", req.body);
  res.send("jai hind!");
});