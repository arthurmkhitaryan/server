const { cvGenerate } = require('../Services/ProfileService');


module.exports.saveCV = function (req, res){
    const obj = JSON.parse(JSON.stringify(req.body))
    return cvGenerate(obj).then(res => {
        console.log(res)
    })
}