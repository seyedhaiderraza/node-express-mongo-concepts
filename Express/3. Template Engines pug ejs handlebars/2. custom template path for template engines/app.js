const express = require('express')
const path = require('path')
const app = new express()

const templatePath = path.join(__dirname, './templates')
console.log(templatePath);

app.set('view engine', 'hbs') // this sets which template engine to use with default path 'views' folder
app.set('views', templatePath) // this sets custom path for template engine to look fo static files
app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req, res) => {
    res.render("index", {
        subscriberName: 'HaiderR'
    })
})
app.get('/', (req, res) => {

    res.send('3. Template Engines')

})

app.listen(8000, () => {
    console.log('app runs on 8000');
})

/*
The reason why the style.css file is not being loaded in index.hbs is that 
you have not specified the static directory for Express to serve static files from.
To serve static files such as CSS files in Express, you can use the built-in
 express.static() middleware. This middleware function is responsible for 
 serving static files such as images, CSS files, and JavaScript files.
To use the express.static() middleware, you need to specify the directory
 where your static files are located. In your case, you can do this by adding
  the following line of code to your app.js file:
*/