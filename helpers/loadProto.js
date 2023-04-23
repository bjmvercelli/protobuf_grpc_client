const protobuf = require('protobufjs');

const PROTO_PATH = __dirname + '/../proto/stock.proto';

const stockProto = new protobuf.Root().loadSync(PROTO_PATH, { keepCase: true });

module.exports = stockProto;