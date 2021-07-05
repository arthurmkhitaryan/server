const CVModel = require("../Models/CVModel")
const fs = require('fs');
const path = require('path')
const options = require('../../../helpers/cvOptions')
const pdf = require('pdf-creator-node')

module.exports.cvGenerate = function (buffer) {
    console.log(buffer)
    return new Promise((resolve, reject) => {
        fs.appendFile(path.join(__dirname, '../../../views/template.html'), buffer, (err) => {
            if (err) throw err;
            console.log('saved')
        });
        // console.log(html)
        //
        // const htmlDoc = fs.readFileSync(path.join(__dirname, '../../../views/template.html'), 'utf-8')
        //
        // const doc = {
        //     html: htmlDoc,
        //     data: {},
        //     path: path.join(__dirname, '../../../storage/cv/cv.pdf'),
        //     type: ''
        // }
        //
        // pdf.create(doc, options)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    })
}




