const server_port = 8090;
const cors_origin = "http://localhost:3000";
const mongo_url = "mongodb://127.0.0.1:27017/airline?directConnection=true&serverSelectionTimeoutMS=2000"

module.exports = { server_port, cors_origin, mongo_url };