// import dependencies
var request = require('request');

// import files
var resources = require("./resources");
var utility = require("./utility");

// function to create a simple client to be used multiple times
var create_client = function(environment, data){
    var client = {
        environment : environment,
        access_code : data.access_code,
        merchant_identifier : data.merchant_identifier,
        passphrase : data.passphrase
    };
    // check url
    var url = "";
    if(data.purchase_url){
        url = data.purchase_url;
    }else{
        if(environment == "development"){
            url = resources.purchase_url.development;    
        }else{
            url = resources.purchase_url.production;
        }
    }
    
    client.url = url;
    return client;
};

// function to create payfort signature
// can also be used to manage data
var create_signature = function(passphrase, data){
    var signature = utility.create_signature(passphrase, data);
    return signature;
};

// function to call payfort and create payment.
var send_request = function(client, data, callback){
    data.access_code = client.access_code;
    data.merchant_identifier = client.merchant_identifier;
    if(!data.signature){
        data.signature = create_signature(client.passphrase, data);
    }
    request.post({
        url : client.url,
        form : data
    }, function(err, httpResponse, body){ 
        if (err){
            callback(err, null);
        }
        callback(null, httpResponse);
    });
};

exports.create_client = create_client;
exports.create_signature = create_signature;
exports.send_request = send_request;
