const express = require('express')

const app = express()

/*
 res.write() ->writes data in chunks
if 
    res.write(data)
    res.send({dataJSON})
then it creates error
Reason: .send() called after .write(data) means data finalised and ready to send response
Howevere .send(dataJSON) after write(data) means dataJSON still remaining to be send so corrupts response
Solution:
 either use write(data) + .send()
or use .send(data + dataJSON) only 
 res.send() -> if we don't use res.send() then page will continue loading only
 res.json-> takes objects and non objects(null undefined)  converts to json
  res.send -> takes objects/arrays  converts to json
*/
app.get("/", (req, res) => {
    //res.write('<h1>Welcome to homePage</h1>')
    //res.write('<h3>Welcome to homePage</h3>')

    res.send({
        id: 1,
        name: 'Harry'
    })
});
app.get("/about", (req, res) => {
    // res.json([{
    //     name: "apple",
    //     type: "fruit"
    // }])
    res.json({ name: "apple", type: "fruit" })
});
app.get("/contact", (req, res) => {
    res.send("<h1>welcome to my contact page</h1>")
});
app.get("/error", (req, res) => {
    res.status(404).send("Something went wrong!")
});
app.listen(8000, () => {
    console.log("server started!");
})

//304 not modified - means no webpage chnge since last visit