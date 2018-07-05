var gConfig = {

  remoteWx: "https://nihaomc.com/wx_test",//此处更换自己小程序的域名信息
  remote: "https://node-wxa-test.nihaomc.com",//此处更换自己小程序的域名信息
}
var urlConfig = {
  wx: {
    msg: {
      sendmessage: {
        url: gConfig.remoteWx + "/msg/sendmessage"
      }
    }
  },
  unionid: {
    code: {
      url: gConfig.remote + "/unionid/code"
    },
    userinfo: {
      url: gConfig.remote + "/unionid/userinfo"
    }
  },
  product: {
    list: {
      url: gConfig.remote + "/product/list"
    }
  },
  wxaqr: {
    genwxaqrcode: {
      url: gConfig.remote + "/wxaqr/genwxaqrcode"
    },
    addformid: {
      url: gConfig.remote + "/wxa/formid"
    },
    gConfig: {
      route: gConfig.remote
    }
  },
}
module.exports = urlConfig;