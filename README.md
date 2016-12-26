# Payfort Payment API

Basic useful feature list:

 * Allows you to make Payfort Credit/Debit card Payment API
 * PayAtHome method not yet supported
 * If you have experience with SOAP Client on Node.JS then please contact me we can do payfort-PayAtHOme API for this module.

## Install

```javascript
npm install payfort-node --save
```
And here's some code! :+1:

```javascript
// initialize the client
var payfort = require("payfort-node");
```

```javascript
// create client
var client = payfort.create_client("development", {
  access_code : "your_access_code",
  merchant_identifier : "your_merchant_identifier",
  passphrase : "your_passphrase"
  purchase_url : "send this only to override default urls"
});
// default URLs
// Authorization/Purchase URLs
// Test Environment URL: https://sbcheckout.payfort.com/FortAPI/paymentPage
// Production Environment URL: https://checkout.payfort.com/FortAPI/paymentPage
```

```javascript
// purchase data to be sent to payfort
var purchaseData = {
  "amount": data.amount,
  "command" : "PURCHASE", // PURCHASE OR AUTHORIZATION
  "currency": data.currency,
  "customer_email": data.email,
  "customer_name": data.name,
  "language": "ar",
  "return_url": "https://your_website.com/packages/v1/callback",
  "merchant_reference": data.order_id
};
```

```javascript
//call payfort API
payfort.send_request(client, purchaseData, function(err, response){
  if(err){
      //error stuff
    }
    //handle response
})
```

When you get the callback from payfort you can use the following code to validate the data sent by payfort.

```javascript
// Callback will be a get request so below valiable 'get_request' will the decoded Query Parameters

var get_request = {
  // decoded query params
};
var original_signature = get_request.signature;
delete response.signature;
var new_signature = payfort.create_signature("your_passphrase", get_request);

if(original_signature == new_signature){
  // valid data
}else{
  // invalid data
}
```