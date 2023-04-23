// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stock_pb = require('./stock_pb.js');

function serialize_FileRequest(arg) {
  if (!(arg instanceof stock_pb.FileRequest)) {
    throw new Error('Expected argument of type FileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FileRequest(buffer_arg) {
  return stock_pb.FileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FileResponse(arg) {
  if (!(arg instanceof stock_pb.FileResponse)) {
    throw new Error('Expected argument of type FileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FileResponse(buffer_arg) {
  return stock_pb.FileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FunctionResponse(arg) {
  if (!(arg instanceof stock_pb.FunctionResponse)) {
    throw new Error('Expected argument of type FunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FunctionResponse(buffer_arg) {
  return stock_pb.FunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StockRequest(arg) {
  if (!(arg instanceof stock_pb.StockRequest)) {
    throw new Error('Expected argument of type StockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockRequest(buffer_arg) {
  return stock_pb.StockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StockResponse(arg) {
  if (!(arg instanceof stock_pb.StockResponse)) {
    throw new Error('Expected argument of type StockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockResponse(buffer_arg) {
  return stock_pb.StockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockServiceService = exports.StockServiceService = {
  stockMessage: {
    path: '/StockService/StockMessage',
    requestStream: false,
    responseStream: false,
    requestType: stock_pb.StockRequest,
    responseType: stock_pb.StockResponse,
    requestSerialize: serialize_StockRequest,
    requestDeserialize: deserialize_StockRequest,
    responseSerialize: serialize_StockResponse,
    responseDeserialize: deserialize_StockResponse,
  },
  totalPriceFunction: {
    path: '/StockService/TotalPriceFunction',
    requestStream: false,
    responseStream: false,
    requestType: stock_pb.StockRequest,
    responseType: stock_pb.FunctionResponse,
    requestSerialize: serialize_StockRequest,
    requestDeserialize: deserialize_StockRequest,
    responseSerialize: serialize_FunctionResponse,
    responseDeserialize: deserialize_FunctionResponse,
  },
  totalPriceFunctionClientStreaming: {
    path: '/StockService/TotalPriceFunctionClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: stock_pb.StockRequest,
    responseType: stock_pb.FunctionResponse,
    requestSerialize: serialize_StockRequest,
    requestDeserialize: deserialize_StockRequest,
    responseSerialize: serialize_FunctionResponse,
    responseDeserialize: deserialize_FunctionResponse,
  },
  totalPriceFunctionServerStreaming: {
    path: '/StockService/TotalPriceFunctionServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: stock_pb.StockRequest,
    responseType: stock_pb.FunctionResponse,
    requestSerialize: serialize_StockRequest,
    requestDeserialize: deserialize_StockRequest,
    responseSerialize: serialize_FunctionResponse,
    responseDeserialize: deserialize_FunctionResponse,
  },
  totalPriceFunctionBiDirectionalStreaming: {
    path: '/StockService/TotalPriceFunctionBiDirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: stock_pb.StockRequest,
    responseType: stock_pb.FunctionResponse,
    requestSerialize: serialize_StockRequest,
    requestDeserialize: deserialize_StockRequest,
    responseSerialize: serialize_FunctionResponse,
    responseDeserialize: deserialize_FunctionResponse,
  },
  totalPriceFile: {
    path: '/StockService/TotalPriceFile',
    requestStream: false,
    responseStream: false,
    requestType: stock_pb.FileRequest,
    responseType: stock_pb.FileResponse,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_FileResponse,
    responseDeserialize: deserialize_FileResponse,
  },
};

exports.StockServiceClient = grpc.makeGenericClientConstructor(StockServiceService);
