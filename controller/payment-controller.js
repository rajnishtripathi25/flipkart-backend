const paytmchecksum = require('../paytm/PaytmChecksum.js');
const formidable = require('formidable');
const https = require('https');
const { v4 } = require('uuid')


let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
    paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
    paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
    paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
    paytmParams['ORDER_ID'] = v4(),
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
    paytmParams['TXN_AMOUNT'] = '100',
    paytmParams['CALLBACK_URL'] = 'http://localhost:3000/callback'
paytmParams['EMAIL'] = 'tripathirajnish1999@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'



exports.addPaymentGateway = async function (request, response) {
    const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
};

exports.paymentResponse = function (request, response) {

    const form = new formidable.IncomingForm();
    const paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    const isVerifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
    if (isVerifySignature) {
        let paytmParams = {};
        paytmParams["MID"] = request.body.MID;
        paytmParams["ORDERID"] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {

            paytmParams["CHECKSUMHASH"] = checksum;

            const post_data = JSON.stringify(paytmParams);

            const options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = "";
            const post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    res += chunk;
                });

                post_res.on('end', function () {
                    let result = JSON.parse(res);
                    console.log(result);
                    response.redirect(`http://localhost:3000/`);
                });
            });
            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("Checksum Mismatched");
    }
};
