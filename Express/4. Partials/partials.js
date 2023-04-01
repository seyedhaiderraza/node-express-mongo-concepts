//partials is a file with code to be included in  every page to avoid repeating code

/*
for using partials:
1. create template engine const -> const hbs = require('hbs')
2. create partialsPath
3. do registerPartials(partialsPath)
*/
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const port = 3000

const app = new express()

const partialsPath = path.join(__dirname, "./partials")
hbs.registerPartials(partialsPath)
const templatePath = path.join(__dirname, './templatepath')
const staticFilesPath = path.join(__dirname, "./public")

app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.static(staticFilesPath))


app.get("/", (req, res) => {
    res.render('home', {
        Subscribe: 'HaiderR'
    })
})

app.get("/about", (req, res) => {
    res.render('about', {

    })
})

app.listen(port, () => {
    console.log('server started at', port);
})