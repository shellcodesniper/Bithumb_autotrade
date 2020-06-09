const {
  ipcMain
} = require('electron')

const XCoinAPI = require('../bithumb/requester');



ipcMain.on("request_account", async (event, data) => {
  console.log("### DEBUG REQUEST_ACCOUNT ###")
  console.log(data);
  let connectKey = data.connectKey;
  let secretKey = data.secretKey;

  var xcoinAPI = new XCoinAPI(connectKey, secretKey);
  var rgParams = {
    order_currency: 'BTC',
    payment_currency: 'KRW'
  };

  let result = await xcoinAPI.xcoinApiCall('/info/account', rgParams);

  event.sender.send("response_account", result)
  // event.sender.send("response_account"), 
})