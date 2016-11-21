var urls = require("./resources");
var utility = require("./utility");
var request = require('request');

var createClient = function(environment, data){
    var client = {
        environment : environment,
        access_code : data.access_code,
        merchant_identifier : data.merchant_identifier,
        passphrase : data.passphrase
    };
    return client;
};

var purchaseUrl = function(client, data, callback){
    data.access_code = client.access_code;
    data.merchant_identifier = client.merchant_identifier;
    data.signature = utility.CreateSignature(client.passphrase, data);
    request.post({
        url : urls.devpaymentPage, 
        form : data
    }, function(err, httpResponse, body){ 
        if (err){
            callback(err, null);
        }
        callback(null, httpResponse);
    });
};

exports.CreateClient = createClient;
exports.Purchase = purchaseUrl;
