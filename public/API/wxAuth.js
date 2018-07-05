const wxaapi = require('../../public/wxaapi.js');//api地址参数
const wxRequest = require('./../../utils/js/wxRequest.js'); //请求参数
const wxPromise = require('./../../utils/js/wxPromise.js').wxPromise;//promise信息
/**
 * 获取oSessionData  (此时处于静默状态) {openId:"openid",sessionKey:"session_key",unionId:"unionid"}
 */
function fGetSessionData(app,isFirst) {
  let _This = this;
  let oSessionData = app.globalData.oSessionData;
  return wxPromise(wx.checkSession)().then(result => {
    if (!isFirst && oSessionData.sessionKey&&result.errMsg.indexOf("ok") > 0) {
      return wxPromise(oSessionData);
    } else {
      return wxPromise(wx.login)().then(result => {
        let ucode = result.code;
        return wxRequest(wxaapi.unionid.code.url, { code: ucode });
      }).then(resSession => {
        /**
         * resSession {openid:"openid",session_key:"session_key",unionid:"unionid"}
         * */
          let {session_key,unionid,openid}= resSession;
          oSessionData={
           unionId:unionid,
           sessionKey: session_key,
           openId:openid
         }
         // console.log("oSessionData--------------", oSessionData);
          app.globalData.oSessionData = oSessionData;
         return wxPromise(oSessionData);
      });
    }
  });
};
/**
 * 用户授权用户信息 此时需要弹框显示 resSession={data:{openid:"",session_key:"",unionid:""}}
 */
function fAuthUserData(app, resSession) {
  let _This = this;
  return wxPromise(wx.getUserInfo)().then(resUserInfo => {
    if (resUserInfo.errMsg.indexOf("ok") < 0) {
      return resSession;
    } else {
      let {encryptedData,iv}= resUserInfo;
      let sessionKey = resSession.sessionKey;
      let postData = {
        encryptedData: encryptedData,
        sessionKey: sessionKey, iv: iv
      };
      return wxRequest(wxaapi.unionid.userinfo.url, postData);
    }
  }).then(userResult => {
    //console.log("userResult------11111------------", userResult);
    let oResult = {};
    if (userResult.nickName) {
      oResult = userResult;
    } else {
      oResult = (userResult&& userResult.userinfo) || userResult;//赋值用户信息全局变量
    }
    return oResult;
  });
};
/**
 * 获取用户头像授权或者手机号码授权信息 (eData授权手机或者头像的function(e) =>e，多次获取session会有报错情况)
 */
function fGetUserAuthData(app, eData, sessionType=false){
  let eDetail = eData.detail;
  if (!eDetail.encryptedData) {
    return wxPromise(eDetail);
  }
  return fGetSessionData(app,sessionType).then(SessionData => {
    let postData = {
      encryptedData: eDetail.encryptedData,
      sessionKey: SessionData.sessionKey,
      iv: eDetail.iv
    };
    return wxRequest(wxaapi.unionid.userinfo.url, postData);
  });
};
/**
 * 用户授权用户信息 此时需要弹框显示 resSession={data:{openid:"",session_key:"",unionid:""}}
 */
function fAuthUserData_bak(app, resSession){
  let _This = this;
  return wxPromise(wx.getUserInfo)().then(resUserInfo => {
    if (resUserInfo.errMsg.indexOf("ok") < 0) {
      let authData = {
        title: '微信授权提示',
        content: '为能正常使用小程序，请授权您的公开信息(昵称、头像等)',
        confirmText: "去授权"
      };
      return wxPromise(wx.showModal)(authData).then(ares => {
        if (ares.confirm) {
          return wxPromise(wx.openSetting)().then(settingResult => { //如果拒绝授权以后，提示用户，进行设置第二次授权
            if (settingResult.authSetting["scope.userInfo"]) {
              app.globalData.reauth = true;
            }
            return _This.fAuthUserData(app,resSession);
          });
        } else {
          return resSession;
        }
      });
    } else {
      let encryptedData = resUserInfo.encryptedData;
      let iv = resUserInfo.iv;
      let sessionKey = resSession.sessionKey;
      var postData = {
        encryptedData: encryptedData,
        sessionKey: sessionKey, iv: iv
      };
      return wxRequest(wxaapi.unionid.userinfo.url, postData);
    }
  }).then(userResult => {
    let oResult={};
    if (userResult.nickName){
       oResult=userResult;
    }else{
      oResult = (userResult&&userResult.userinfo)|| userResult;//赋值用户信息全局变量
    }
    return oResult;
  });
}
module.exports={
  fGetSessionData, fAuthUserData, fGetUserAuthData
}