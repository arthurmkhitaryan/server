const { cvGenerate, myCVs } = require('../Services/ProfileService');
const jwt = require('jsonwebtoken')
const {response} = require("../../../helpers/helper");


module.exports.saveCV = function (req, res){
    const dataObj = {
        ...req.body,
        ...req.files
    }

    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    return cvGenerate(user.id, dataObj)
      .then(resp=> {
        res.status(201).json(response(true, resp))
    }).catch((err) => {
        res.status(400).json(response(false, err))
    })
}

module.exports.myCVs = function (req, res) {
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const id = user.id;

    return myCVs(id).then((resp) => {
        res.status(200).json(response(true, resp))
    }).catch(err => {
        res.status(401).json(response(false, err))
    })
}