// Authorization / Purchase URLs as seen on https://testfort.payfort.com/api/#authorization-purchase-urls
var purchase_url = {
    development : "https://sbcheckout.payfort.com/FortAPI/paymentPage",
    production  : "https://checkout.payfort.com/FortAPI/paymentPage"
}
exports.purchase_url = purchase_url;