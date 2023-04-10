const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index');
})

app.get('/seth', (req, res) => {
	res.render('seth-balkrishan');
})

app.get('/principal', (req, res) => {
	res.render('principal-corner');
})

app.get('/cse', (req, res) => {
	res.render('cse_dept');
})


app.listen(3000, (req, res) => {console.log("server @ 3000")})