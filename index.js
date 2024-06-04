const express = require('express')
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

// defintion des routes
app.get('/', (req, res) => {
    
    res.render('home')

})

app.get('/nous-contacter', (req, res) => {
    
    res.render('contact')

})

app.get('/about', (req, res) => {
    
    res.render('about')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})