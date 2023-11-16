const fs = require('fs')

function WriteJson (path,object) {
    let data = JSON.stringify(object);
    fs.writeFileSync(path, data); 
}

function ReadJson (path) {
    let rawdata = fs.readFileSync(path); 
    let result = JSON.parse(rawdata); 
    return result
}

module.exports = {
    WriteJson,
    ReadJson
}