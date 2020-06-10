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
  }
}

export default ApiUtil