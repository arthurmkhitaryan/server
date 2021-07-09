const CVModel = require("../Models/CVModel")
const path = require('path')
const ejs = require('ejs')
const pdf = require("html-pdf");

module.exports.cvGenerate = function (userId, cvData) {
    const cvName = `cv${Date.now()}`;
    const filePath = path.join(__dirname,  `../../../storage/cv/${cvName}.pdf`)
    return new Promise((resolve, reject) => {
        ejs.renderFile(path.join(__dirname, '../../../templates/cv.ejs'), {cvData: cvData}, (err, data) => {
            if (err) {
                throw err;
            } else {
                let options = {
                    "format": "A4",
                    "orientation": "portrait",
                    "header": {
                        "height": "20mm"
                    },
                    "footer": {
                        "height": "20mm",
                    },
                };
                pdf.create(data, options).toFile(filePath, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("File generate successfully");
                    }
                });
            }
        });

        const cvPath = `cv/${cvName}.pdf`

        CVModel.createCV({ userId, path : cvPath, name: `${cvName}.pdf`})
            .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.myCVs = function (id) {
    return new Promise((resolve, reject) => {
        CVModel.selectCVs('cv', id)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
        })
    })

}




