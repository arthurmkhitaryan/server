module.exports = {
  response(success, data, statusCode) {
    return [
      {
        success,
        data
      },
      statusCode
    ]
  }
}

module.exports.getCurrentTimeFromStamp = function(timestamp) {
  let d = new Date(timestamp);
  return d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
};