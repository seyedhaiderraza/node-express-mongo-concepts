const express = require('express')
const path = require('path')
const app = new express()

/*
using template engines
-we can render static pages with dynamic content
- template engines need to be .set with app with  'view engine' and '%template engine name%' as params
- create any route and call res.render('%page inside view folder%')

express js follows top to bottom approach for creating routes
*/
app.set('view engine', 'hbs') //by default knows this is for views dir path
    // OR app.set('view engine', 'ejs') OR app.set('view engine', 'pug') for any template engine

/*
app.get('/', (req, res) => {
        res.render("index")
    })
    */
/*
To send dynamic content within index.hbs
 .render("index", {
        subscriberName: 'Haider Raza'
    })
*/

app.get('/', (req, res) => {
    res.render("index", {
        subscriberName: 'Haider Raza'
    })
})
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {

    res.send('3. Template Engines')

})

app.listen(8000, () => {
    console.log('app runs on 8000');
})