
const CVModel = require("../Models/CVModel")
const fs = require('fs');
const path = require('path')

module.exports.cvGenerate = function (file) {

    return new Promise((resolve, reject) => {
        fs.open(path.normalize(`${__dirname}../../../../storage/cv/cv-${Date.now()}.pdf`), 'w', function(err) {
            reject(err)
        });

        fs.writeFile(path.normalize(`${__dirname}../../../../storage/cv/cv-${Date.now()}.pdf`), JSON.stringify(file), (err) =>  {
            reject(err)
        });
    })
}


