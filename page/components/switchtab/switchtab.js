// page/components/switchtab/switchtab.js
Component({
  externalClasses: ['item-btn'],
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    aHeadData:{
      type: Array,
      value: [{ id: 0, name: "眼部整形" }, { id: 1, name: "鼻部整形" }, { id: 2, name: "美体塑形" }, { id: 3, name: "肉毒素" }, { id: 4, name: "半永久" }, { id: 5, name: "牙齿美容" }, { id: 6, name: "抗衰老初老" }, { id: 7, name: "其他" }]
    },
    winHeight: {
      type: String,
      value: ''
    },//窗口高度
    iCurrentTab: {
      type: String,
      value: 0
    }, //预设当前项的值
    iScrollLeft: {
      type: String,
      value: 0
    }, //tab标题的滚动条位置
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    BBB() {
      //触发取消回调
      this.triggerEvent("CCC")
    },

    fSwitchTab(e) {
      let _This = this;
      let current = e.target.dataset.current;
      if (_This.data.iCurrentTab!= current) {
        _This.setData({
          iCurrentTab: current
        }); 
      }
    },
    fSwitchContent(e) {
      let _This = this;
      _This.setData({
        iCurrentTab: e.detail.current
      });
      _This.fScrollLeft();
    },
    fScrollLeft() {
      let _This = this;
      let iCurrentTab = _This.data.iCurrentTab;
      let iScrollLeft=0;
      if(iCurrentTab*60>260){
       iScrollLeft=iCurrentTab * 60;
      }
      _This.setData({ iScrollLeft: iScrollLeft});
 
    },
  }
})


/************demo*******/
/**
 * json
 *   "usingComponents": {
 *  "switch-tab": "/page/components/switchtab/switchtab"
 * }
 * wxml
 *      <switch-tab id='switchtab' title="{{title}}"   bind:CCC="AAA"></switch-tab>
 * 
 * js
 * 
 *    AAA(e) {
 *  console.log("=-=-==-=-eeee-=-=-=",e);
 *   console.log('你点击了取消');
 *  console.log(this.selectComponent("#province"))
 * },
 * 
 * 
 * 
 * 
 */