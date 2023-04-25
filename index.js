const grpc = require('@grpc/grpc-js');
const inquirer = require('inquirer');
const grpcService = require('./helpers/loadGrpc');
const stockProto = require('./helpers/loadProto');
const fs = require('fs');

const menu = [
  {
    type: 'list',
    name: 'option',
    message: 'Selecione uma opção: ',
    choices: [
      'StockMessage', 
      'TotalPriceFunction', 
      'TotalPriceFunctionClientStreaming', 
      'TotalPriceFunctionServerStreaming',
      'TotalPriceFunctionBiDirectionalStreaming',
      'TotalPriceFile'
    ]
  }
];

function StockMessage(client) {
  const Stock = stockProto.lookupType('Stock');
      
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google'
  });

  client.StockMessage({ stock: newStock, quantity: 5}, function (err, response) {
    console.log(response.message);
  });
}

function TotalPriceFunction(client) {
  const Stock = stockProto.lookupType('Stock');
      
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google'
  });

  client.TotalPriceFunction({ stock: newStock, quantity: 5}, function (err, response) {
    console.log(response.total_price);
  });
}

function TotalPriceFunctionClientStreaming(client) {
  const Stock = stockProto.lookupType('Stock');
      
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google'
  });

  const call = client.TotalPriceFunctionClientStreaming(function (err, response) {
    console.log(response.total_price);
  });

  call.write({ stock: newStock, quantity: 5 });
  call.write({ stock: newStock, quantity: 10 });
  call.write({ stock: newStock, quantity: 15 });
  call.end();
}

function TotalPriceFunctionServerStreaming(client) {
  const Stock = stockProto.lookupType('Stock');
      
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google',
    price_history: [145.50, 147.20, 145.00]
  });

  const call = client.TotalPriceFunctionServerStreaming({ stock: newStock, quantity: 5 });

  call.on('data', function (response) {
    console.log(response.total_price);
  });

  call.on('end', function () {
    console.log('end');
  });

  call.on('error', function (err) {
    console.log(err);
  });
}

function TotalPriceFunctionBiDirectionalStreaming(client) {
  const Stock = stockProto.lookupType('Stock');
      
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google',
  });

  const call = client.TotalPriceFunctionBiDirectionalStreaming();

  call.write({ stock: newStock, quantity: 5 });
  call.write({ stock: newStock, quantity: 10 });
  call.write({ stock: newStock, quantity: 15 });

  call.on('data', function (response) {
    console.log(response.total_price);
  });

  call.on('end', function () {
    console.log('end');
  });

  call.on('error', function (err) {
    console.log(err);
  });

  call.end();
}

function TotalPriceFile(client) {
  const Stock = stockProto.lookupType('Stock');
  const FileRequest = stockProto.lookupType('FileRequest');
  const StockRequest = stockProto.lookupType('StockRequest');
  
  const newStock = Stock.create({
    name: 'GOOGL',
    current_price: 40,
    description: 'Ações da Google'
  });

  const newStockRequest = StockRequest.create({
    stock: newStock,
    quantity: 5
  });

  const newFileRequest = FileRequest.create({
    stock_item: newStockRequest,
    filename: 'stock.txt'
  });

  client.TotalPriceFile(newFileRequest, function (err, response) {
    fs.writeFile('stock.txt', response.contents, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
}


function main() {

  const target = '200.235.88.81:50051';

  inquirer.prompt(menu).then(answer => {
    const client = new grpcService.StockService(target, grpc.credentials.createInsecure());

    switch (answer.option) {
      case 'StockMessage':
        StockMessage(client);
        break;
      case 'TotalPriceFunction':
        TotalPriceFunction(client);
        break;
      case 'TotalPriceFunctionClientStreaming':
        TotalPriceFunctionClientStreaming(client);
        break;
      case 'TotalPriceFunctionServerStreaming':
        TotalPriceFunctionServerStreaming(client);
        break;
      case 'TotalPriceFunctionBiDirectionalStreaming':
        TotalPriceFunctionBiDirectionalStreaming(client);
        break;
      case 'TotalPriceFile':
        TotalPriceFile(client);
        break;
      default:
        break;
    }
  });
}

main();