const fs = require('fs')
const ini = require('ini')

class constant {
    // constructor
    constructor(f='master') {
        this.file = f 
        this.config = ini.parse(fs.readFileSync(`./configs/${f}.ini`, 'utf-8'))
    }

    getData(key, value) {
        var config = this.config

        if(value == undefined) { return config[key] }
        else { return config[key][value] }
    }
}

module.exports = constant