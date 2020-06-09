const {
  ipcMain
} = require('electron')


const request = require('request');

ipcMain.on("test", (event, data) => {
  // request.post("https://api.bithumb.com/info/account", {
  //     form: {
  //       apiKey: data.connectKey,
  //       secretKey: data.secretKey,
  //       order_currency: 'BTC'
  //     }
  //   },
  //   function optionalCallback(err, httpResponse, body) {
  //     // console.log(err);
  //     // console.log(httpResponse);
  //     console.log(body);
  //   }
  //   );
  request.get('https://api.bithumb.com/public/ticker/BTC_KRW', 
    function optionalCallback(err, httpResponse, body) {
      // console.log(err);
      // console.log(httpResponse);
      console.log(body);
    })
})