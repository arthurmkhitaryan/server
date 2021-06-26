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

module.exports.getCurrentTimeFromStamp = function(timestamp) {
  let d = new Date(timestamp);
  return d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
};