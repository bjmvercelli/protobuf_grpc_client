const grpc = require('@grpc/grpc-js');
const grpcProtoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../proto/stock.proto';

const packageDefinition = grpcProtoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const grpcService = grpc.loadPackageDefinition(packageDefinition);

module.exports = grpcService;