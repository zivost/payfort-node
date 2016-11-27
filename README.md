# Payfort Payment API

Basic useful feature list:

 * Allows you to make Payfort Credit/Debit card Payment API
 * PayAtHome method not supported

## Install

```javascript
npm install payfort-node --save
```
And here's some code! :+1:

```javascript
// create client
var payfortClient = payfort.CreateClient("dev", {
	access_code : "your_access_code",
	merchant_identifier : "your_merchant_identifier",
	passphrase : "your_passphrase"
});
```

```javascript
// purchase data to be sent to payfort
var purchaseData = {
  "amount": data.amount,
  "command" : "PURCHASE",
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
payfort.Purchase(payfortClient, purchaseData, function(err, response){
	if(err){
    	//error stuff
    }
    //handle response
})
```
