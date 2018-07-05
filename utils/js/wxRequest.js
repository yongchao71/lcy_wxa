const wxPromise = require('./wxPromise.js').wxPromise;
function wxRequest() {
  let aArguments = Array.prototype.slice.call(arguments);
  let localToken = wx.getStorageSync("localToken") || "";
  let oParams = {
    header: {
      'Content-Type': 'application/json;charset=UTF-8',
      'v': "6.0",
      'Authorization': localToken
    },
  };
  if (aArguments.length == 1) {
    oParams.url = aArguments[0].url;
    oParams.method = aArguments[0].method || "POST";
    oParams.data = aArguments[0].data || {};
  } else if (aArguments.length == 2) {
    oParams.url = aArguments[0];
    oParams.method = "POST";
    oParams.data = aArguments[1] || {};
  } else if (aArguments.length == 3) {
    oParams.url = aArguments[0];
    oParams.method = aArguments[1];
    oParams.data = aArguments[2] || {};
  };
  let wRequest = wxPromise(wx.request);
  return wRequest(oParams).then(result=>{
    let authorization = result.header.Authorization;
    if (authorization){
      wx.setStorageSync("Authorization", authorization);
    }
    return result.data;
  });
}

module.exports = wxRequest;
