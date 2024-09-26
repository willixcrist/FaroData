//código de prueba
var fs = require("fs");
var csvParser = require("csv-parse");
//procesamos
var datosCsv=[];
fs.createReadStream("datos.csv")
.pipe(csvParser.parse({delimiter:';'}))
.on('data', function (csvrow){
    console.log(csvrow);
    datosCsv.push(csvrow);
}).on('end', function() {
    console.log("finalizó wey.");
});