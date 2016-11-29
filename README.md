# Payfort Payment API

#### Note: Verion 2 is not compatible with version 1. Please Update your code. Sorry! for the inconvinience. 

Basic useful feature list:

 * Allows you to make Payfort Credit/Debit card Payment API
 * PayAtHome method not supported
 * If you have experience with SOAP Client on Node.JS then please contact me we can do payfort-PayAtHOme API for this module.

## Install

```javascript
npm install payfort-node --save
```
And here's some code! :+1:

```javascript
// create client
var client = payfort.create_client("development", {
	access_code : "your_access_code",
	merchant_identifier : "your_merchant_identifier",
	passphrase : "your_passphrase"
	purchase_url : "send this only to override default urls"
});
// default URLs
// Authorization/ Purchase URLs
// Test Environment URL: https://sbcheckout.payfort.com/FortAPI/paymentPage
// Production Environment URL: https://checkout.payfort.com/FortAPI/paymentPage
```

```javascript
// purchase data to be sent to payfort
var purchaseData = {
  "amount": data.amount,
  "command" : "PURCHASE", // AUTHORIZATION
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

