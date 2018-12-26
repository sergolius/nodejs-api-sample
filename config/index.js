var MONGO_USERNAME = process.env.MONGO_USERNAME;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;

var credentials = '';
if (MONGO_USERNAME && MONGO_PASSWORD) {
  credentials = `${MONGO_USERNAME}:${MONGO_PASSWORD}@`;
}

module.exports = {
  'ip': '0.0.0.0',
  'port': process.env.PORT,
  'uri': `mongodb://${credentials}mongodb:27017/nodejs-api-sample?authSource=admin`
};
