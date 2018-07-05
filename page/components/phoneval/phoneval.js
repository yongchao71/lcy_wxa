// page/components/phoneval/phoneval.js
Component({
  externalClasses: ['star-style'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    phoneTxt: {
      type: String,
      value: "手机号"
    },
    phoneNumber: {
      type: String,
      value: ""
    },
    iCount: {
      type: Number,
      value: 60
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDisabled:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fBindInputPhone:function(e){
      let _This = this;
      _This.setData({
       phoneNumber:e.detail.value
     });
    },
    fGetValidCode: function () {
      console.log("fffffff");
      let _This = this;
      let regex = /^1(3|4|5|7|8|9)\d{9}$/;
      let phoneNu = _This.data.phoneNumber;
      if (regex.test(phoneNu)) {
        _This.setData({
          isDisabled:true
        });
        _This.fTick();
      } else {
        wx.showToast({
          title: '手机号格式错误',
          icon: 'loading',
          duration: 1000
        })
      }
    },
    fTick: function () {
      var _This = this
      if (_This.data.iCount > 0) {
        _This.setData({
          iCount: _This.data.iCount - 1
        });
        setTimeout(function () {
          return _This.fTick()
        }, 1000)
      } else {
        _This.setData({
          iCount: 60
        });
      }
    },
  }
})


/*************demo****************/
/**
 * json
 * "usingComponents": {
 *     "phone-val": "/page/components/phoneval/phoneval"
 * 
 * js
 * 
 * wxml
 * 
 *  <phone-val></phone-val>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */