const { cvGenerate } = require('../Services/ProfileService');


module.exports.saveCV = function (req, res) {
    return cvGenerate(req.body).then(res => {

    })
}