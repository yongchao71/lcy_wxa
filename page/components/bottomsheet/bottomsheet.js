
Component({
  externalClasses: ['b-posotion'],
  options: {
    multipleSlots: true
  },
  ready(){

  },
  /**
   * 组件的属性列表
   */
  properties: {
    ibottom: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
      isShowModel:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fShowModal(){
      let _This=this;
      let { isShowModel,ibottom}=_This.data;
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      });
      ibottom = -ibottom-40;
      this.animation = animation;
      animation.translateY(ibottom).step({duration: 400 })
      this.setData({
        animationData: animation.export(),
        isShowModel: true
      })
      setTimeout(function () {
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    fHideModal(){
      let _This = this;
      let { isShowModel,ibottom } = _This.data;
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      this.animation.translateY(0).step({ duration: 400 })
      this.setData({
        animationData: animation.export(),
        isShowModel:false
      })
      setTimeout(function () {
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    }
  }
})


/*******************demo***********************/
//  page.json  "bottom-sheet": "/page/components/bottomsheet/bottomsheet"
//  page.js   
//  onShow(){
//    let _This = this;
//    wx.createSelectorQuery().selectAll('.dsheet').boundingClientRect(function (rects) {
//      let ibottom = rects[0].height;
//      console.log("ibottom------index------", ibottom);
//      _This.setData({
//        ibottom: ibottom
//      });

//    }).exec()
//  },

// page.wxml

//    <bottom - sheet  b- posotion="b-posotion" ibottom= "{{ibottom}}" >
//      <view slot="dsheet" class='dsheet' >
//        <view class='sheet-item' > 二次营销人群 < /view>
//        <view class='sheet-item' > 预约通知通知 < /view>
//        <view class='sheet-item' > 分诊通知 < /view>
//        <view class='sheet-item' > 客户咨询会话 < /view>
//       </view>
//     </bottom-sheet>


/********************demo**********************/