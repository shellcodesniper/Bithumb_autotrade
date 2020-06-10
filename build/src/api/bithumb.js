const {
  ipcMain
} = require('electron')

const XCoinAPI = require('../bithumb/requester');
var xcoinAPI = null;

async function requestxcoinAPI(requestUrl, apiData, rgParams) {
  if (xcoinAPI == null) xcoinAPI = new XCoinAPI(apiData.connectKey, apiData.secretKey);
  let result = await xcoinAPI.xcoinApiCall(requestUrl, rgParams);
  return result;
}

function filterData(data) {
  let apiData = !data.apiData ? {} : data.apiData;
  let apiParams = !data.apiParams ? {} : data.apiParams;
  return [apiData, apiParams];
}
// ! 필터 함수 validation 진행

ipcMain.on("request_account", async (event, data) => {
  let [apiData, apiParams] =filterData(data);
  console.log(apiData,apiParams)

  let result = await requestxcoinAPI("/info/account", apiData, apiParams);
  event.sender.send("response_account", result)
})


ipcMain.on("request_orderbook" , async (event, data) => {
  console.log(data);
  let [apiData, apiParams] = filterData(data);
  let result = await requestxcoinAPI(`/public/orderbook/${apiParams.order_currency}_${apiParams.payment_currency}`, apiData, apiParams);
  event.sender.send("response_orderbook", result)

});

ipcMain.on("request_ticker", async (event, data) => {
  console.log(data);
  let [apiData, apiParams] = filterData(data);
  let result = await requestxcoinAPI(`/public/ticker/${apiParams.order_currency}_${apiParams.payment_currency}`, apiData, apiParams);
  event.sender.send("response_ticker", result)

});