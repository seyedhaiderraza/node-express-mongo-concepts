const http = require('http')
const fs = require('fs')
var requests = require("requests")

const homeHtmlFile = fs.readFileSync('home.html', 'utf-8')

replaceHtmlFileValWithObjectValue = (homeHtmlFile, objData) => {

    let newhomeHtmlFile = homeHtmlFile.replace("{%city%}", objData.location.name)
    newhomeHtmlFile = newhomeHtmlFile.replace('{%country%}', objData.location.country)
    newhomeHtmlFile = newhomeHtmlFile.replace('{%temperature%}', objData.current.temperature)
    newhomeHtmlFile = newhomeHtmlFile.replace('{%temperature_min%}', objData.current.temperature)
    newhomeHtmlFile = newhomeHtmlFile.replace('{%temperature_max%}', objData.current.feelslike)
    newhomeHtmlFile = newhomeHtmlFile.replace('{%weather-icon%}', `<img src="${objData.current.weather_icons[0]}" alt="" />`)
    return newhomeHtmlFile

    /*
    homeHtmlFile.replace("{%city%}", objData.location.name)
    homeHtmlFile.replace('{%country%}', objData.location.country)
    homeHtmlFile.replace('{%temperature%}', objData.current.temperature)
    homeHtmlFile.replace('{%temperature_min%}', objData.current.temperature)
    homeHtmlFile.replace('{%temperature_max%}', objData.feelslike)
    return homeHtmlFile
    --won't work won't be updated in the html file becos each time same file is updated and not the updated file
    */
}
const server = http.createServer((req, res) => {
    if (req.url == '/') { // If we use === then its was not working instead  the server was just loading... on browser
        requests('http://api.weatherstack.com/current?access_key=d9658a44ba6bd5c41bf95755ef980d21&query=Pune')
            .on('data', function(chunk) { //data event listener
                const objData = JSON.parse(chunk) //chunk are JSON string cannot extract value out of it
                    //console.log(chunk)
                    //console.log(objData.current.temperature); //object representation we can extract property and value out of it
                    //to use map on this object we at it into an array
                const arrData = [objData];
                const htmlFileWithupdatedDynamicValues = arrData.map(objData =>
                    replaceHtmlFileValWithObjectValue(homeHtmlFile, objData) //without join method it is simply array

                ).join("")

                //console.log(htmlFileWithupdatedDynamicValues);
                res.write(htmlFileWithupdatedDynamicValues)
            })
            .on('end', function(err) { //end event listener
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
                res.end() //***very important without this it will not work */
            });
    }
})

server.listen(8000, 'localhost')