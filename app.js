
//pull in Express, then call it
const express = require('express');
const app = express();

//pull in Handlebars
const exphbs  = require('express-handlebars');

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Index route
//REFERENCE https://expressjs.com/en/4x/api.html#app.get.method
app.get('/', (req, res) => {
    res.render('INDEX'); //respond by rendering the "index" view
} );

//About route
app.get('/about', (req, res) => {
    const title = 'About Us'
    res.render("about", {
        title: title //create object with properties for use in the view
    })
})

//listen method for Express
//REFERENCE https://expressjs.com/en/4x/api.html#app.listen
const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});