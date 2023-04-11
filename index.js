const express = require('express')
const app = express();
const {engine} = require('express-handlebars');

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('list_usuario')
})

app.get('/cad-usuario', (req, res)=>{
    res.render('cad_usuario')
})
app.listen(8080, ()=>{
    console.log('o app está rodando')
})