module.exports = {
  response(success, data) {
    return {
        success,
        data
      }
  }
}

module.exports.renameProperty = (obj, fromKey, toKey) => {
  obj[toKey] = obj[fromKey];
  delete obj[fromKey];
}
