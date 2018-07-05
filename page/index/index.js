const wxaapi = require('./../../public/wxaapi.js');//api地址参数
const wxRequest = require('./../../utils/js/wxRequest.js'); //请求参数
const wxPromise = require('./../../utils/js/wxPromise.js');//promise信息
const wxAuth = require('./../../public/API/wxAuth.js');
const app = getApp()

Page({
  data: {
    isAnimation:false,//是否动画
    iLeft:300,//距离左侧
    iTop:300,//距离顶部
    imgLeft:0,//内部位置
    oUserInfo: {},
    oHeader: {
      temType: "1", temStyle: "", temImgStyle: "", temTxtStyle: "",
      aHeader:[
      { url: "/page/client/pages/sharecase/sharecase", plogo:"/public/images/share-gift.png", title:"案例列表"},
      { url: "/page/customer/pages/case/case",aData:["11","22"], plogo: "/public/images/share-fre.png", title: "操作列表" },
      ]
    },//
    oModuleList: {
      temType: "1", temStyle: "", temImgStyle: "", temTxtStyle: "",aTaskModule:[ //顶部功能导航
      {
        permission: "potential_customers",
        url: '../index/home',
        imgsrc: '../../public/images/ind-cus-manage.png',
        text: '潜客管理',
        test:"潜客"
      },
      {
        permission: "search", //假权限
        url: '../index/home?type=search',
        imgsrc: '../../public/images/ind-search.png',
        img: '../../public/images/ind-search.png',
        text: '搜索潜客'
      },
      {
        permission: "",
        url: '../projectcase/createshare/createshare',
        imgsrc: '../../public/images/ind-case.png',
        text: '查找案例'
      },
      {
        permission: "gift:in",
        url: '../destmass/destmass',
        imgsrc: '../../public/images/ind-dest.png',
        img: '../../public/images/ind-dest.png',
        text: '到店有礼'
      },
      {
        permission: "material_upload",
        url: '../mattercollect/index',
        imgsrc: '../../public/images/ind-collect.png',
        text: '图片上传'
      },
      {
        permission: "", //假权限
        url: 'sharelist/home',
        imgsrc: '../../public/images/ind-share.png',
        text: '分享记录'
      }
    ]},

    oListModule:{
      temType: "1", boxStyle: "", boxItemStyle: "", temLeftTxtStyle: "", temLeftImgStyle: "", temRightTxtStyle:"", temRightImgStyle: "",
      aListModule: [
        { name: "二次营销人群", des: "3", icon: "https://nihaomc.com/wxa/feimg/wait-1.png", ricon: "/public/images/nav-right-icon.png" }, 
        { name: "分诊通知", des: "2", icon: "https://nihaomc.com/wxa/feimg/wait-2.png", ricon: "/public/images/nav-right-icon.png" }, 
        { name: "客户咨询会话", des: "1", icon: "https://nihaomc.com/wxa/feimg/wait-5.png", ricon: "/public/images/nav-right-icon.png" }
        ]
    },
    title:"这是标题测试",

    iStarCount:3,

  },
  onLoad: function () {
    let _This=this;
    getApp().fGetUserData().then(userInfo=>{
      console.log("get into index------------",userInfo);
      _This.setData({
        oUserInfo: userInfo
      });
       // _This.fGetPromiseAll();
      _This.fGetDropdownProductList();
    });
  },
  onShow(){
    let _This=this;
  },

  fNavTest(){
    wx.navigateTo({
      url: '/page/test/test',
    })
  },
  /**
   * 获取下拉选项项目列表
   */
  fGetDropdownProductList() {
    let _This = this;
    let unionid = _This.data.oUserInfo.unionId;//
    let pdata = { unionId: unionid, all: 0 };//,all:0
    wxRequest(wxaapi.product.list.url, pdata).then(function (result) {
      if (result.data.code == 0) {
        let abledata = { unionId: unionid, all: 0 };//,all:0
        return wxRequest(wxaapi.product.list.url, abledata);
      } else {
        return { data: {} };
      }
    }).then(function (result) {
      console.log("get product list result all=0--------", result);
      let codearr = ["0"];
      if (result.data.code == 0) {
      } else {
        console.log("fGetDropdownProductList------------",result);
      }
    });
  },
  /**
   * 测试并行同步请求
   */
  fGetPromiseAll(){
    let _This=this;
    let unionid = _This.data.oUserInfo.unionId;//
    let pnotdata = { unionId: unionid, all: 0 };
    let notAllData = wxRequest(wxaapi.product.list.url, pnotdata);
    let palldata = { unionId: unionid};
    let allData = wxRequest(wxaapi.product.list.url, palldata);
    wxPromise.wxPromiseAll(notAllData, allData).then(result=>{
       console.log("result data--------------",result);
    });
  },
  /**
   * 获取用户昵称头像
   */
  fUserAuthData(eData){
    wxAuth.fGetUserAuthData(app,eData).then(oUser=>{
      console.log("auth user data ------------",oUser);
    });
  },
  /**
   * 获取手机号码
   */
  fGetPhoneNumber(eData){
    wxAuth.fGetUserAuthData(app, eData).then(oUser => {
      console.log("auth phone data ------------", oUser);
    });
  },


  /**
   * 获取下拉选项项目列表
   */
  fGetDropdownProductList() {
    let _This = this;
    //全部的项目================all:0是所有有案例的项目
    let pdata = { unionId: _This.data.oUserInfo.unionId };//,all:0
    wxRequest(wxaapi.product.list.url, pdata).then(function (result) {
     //console.log("case list result------------",result);
      if (result.code == 0) {
        let oCate = result.data;
        _This.setData({
          projectItems: oCate,
        });
        //可选的项目
        let abledata = { unionId: _This.data.oUserInfo.unionId, all: 0 };//,all:0
        return wxRequest(wxaapi.product.list.url, abledata);
      } else {
        return { data: {} };
      }
    }).then(function (result) {
      let codearr = ["0"];
      if (result.code == 0) {
        result.data.forEach(function (item) {
          item.productList.forEach(function (oitem) {
            oitem.productList.forEach(function (titem) {
              codearr.push(titem.productCode);
            });
          });
        });
        _This.setData({
          selable: codearr
        });
      } else {
        console.log("result data error---",result);
      }
    });
  },

  fTaskModule(e){
  let _This=this;
  console.log("dddddddddddd--------------",e);
  // _This.fNavTest();
  //return false;
  wx.navigateTo({
    url: '/page/scrolltab/scrolltab',
  })
  },

  setTimeoutES6(second){ 
    return new Promise((resolve, reject) => {
      setTimeout(() =>{resolve();}, second);
    });
  },
  fShowDetail(e){
    console.log("e-------------",e);
    let {clientX,clientY} = e.touches[0];
    console.log("clinicX----clinicY-----------",clientX,clientY);
  },



})
