const {
  ipcRenderer
} = window;

const ApiUtil ={
  getApiData: function () {
    var connectKey= localStorage.getItem("connectKey");
    var  secretKey= localStorage.getItem("secretKey");
    connectKey = !connectKey ? "": connectKey
    secretKey = !secretKey ? "" : secretKey

    return {
      connectKey:connectKey,
      secretKey:secretKey
    }
  },

  prepareApiData: function (params) {
    return {
      apiData: this.getApiData(),
      apiParams: params
    }
  },

  decodeApiResponse : function (data) {
    if(!data || data === "ERROR") {
      return null;
    }
    else {
      if(data.status !== "0000") {
        console.error("###### found Error in decodeApiResponse ######")
        console.error("CODE :" + data.status)
        return null;
      }
      return data.data
    }
  },
  getDateFromTimeStamp: function (epoch) {
    var timestamp = parseInt(epoch);
    var d = new Date(timestamp);
    return d;
  },
  getFullStringFromTimeStamp: function (epoch) {
    var d = this.getDateFromTimeStamp(epoch);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  }
}

export default ApiUtil