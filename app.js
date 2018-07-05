const wxaapi = require('./public/wxaapi.js');//api地址参数
const wxRequest = require('./utils/js/wxRequest.js'); //请求参数
const wxPromise = require('./utils/js/wxPromise.js').wxPromise;//promise信息
const wxAuth = require('./public/API/wxAuth.js');
App({
  onLaunch: function () {
    let _This=this;
  },
  globalData: {
    oUserData: {},//用户信息对象,如果用户授权，包含用户昵称等信息，如果未授权，仅包含oSessionData数据
    oSessionData:{}// 用户session 数据，包含用户的{unionId:"",openId:"",sessionKey:""}
  },
  /**
 * 获取用户登录信息
 */
  fGetUserData: function () {
    let _This = this;
   // console.log("exist oUserData-------", _This.globalData.oUserData);
    if (_This.globalData.oUserData && _This.globalData.oUserData.nickName) {  
      return wxPromise(_This.globalData.oUserData);
    };
    return wxAuth.fGetSessionData(_This, true).then(result => {
        return wxAuth.fAuthUserData(_This, result);
    }).then(oUserData => {
      _This.globalData.oUserData = oUserData;
      return oUserData;
    });
  }
})