var crypto = require('crypto');

var createHash = function(string){
    var hash = crypto.createHash('sha256').update(string).digest('hex');
    return hash;
};

var createSignature = function(passphrase, object){
    var signatureText = "";
    var keys = [];
    for (var eachKey in object) {
      keys.push(eachKey);
    }
    keys.sort(compare);
    
    var len = keys.length;

    for (var i = 0; i < len; i++){
      var k = keys[i];
      signatureText = signatureText+(k + '=' + object[k]);
    }
    var signature = createHash(passphrase+signatureText+passphrase);
    return signature;
};

function compare(a, b){
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

exports.CreateSignature = createSignature;