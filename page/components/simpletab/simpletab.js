// page/components/simpletab/simpletab.js
Component({
  externalClasses: ['tab-selected'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    atabhead: {
      type: Array,
      value: ["已预约","未预约"]
    },
    isfixed: {
      type: Boolean,
      value: false
    },
    // icurrentselected: {
    //   type: Number,
    //   value: '0'
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icurrentselected:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 切换tab
     */
    fChangeTab(e){
      let _This=this;
      let dataset = e.currentTarget.dataset;
      let oItem =dataset.oitem;
      let iindex = dataset.iindex;
      _This.setData({
        icurrentselected: iindex
      });
      _This.triggerEvent("fChangeTab");

    }
  }
})


/***********demo****************/
/**
 * json
 * "usingComponents": {
 *     "simple-tab": "/page/components/simpletab/simpletab"
 * 
 * wxml
 *     <simple-tab atabhead="{{aHeadTab}}" tab-selected="tab-selected" bind:fChangeTab="AAA" >
 *     <view slot="0">1111111111</view>
 *      <view slot="1">2222222222</view>
 *     <view slot="2">3333333333</view>
 *    </simple-tab>
 * 
 * 
 * 
 * js
 *     aHeadTab:["未预约","已预约","其他"],
 *   //取消事件
 * AAA(e) {
 *  console.log("=-=-==-=-eeee-=-=-=",e);
 *   console.log('你点击了取消');
 *  console.log(this.selectComponent("#province"))
 * },
 * 
 * 
 * 
 * 
 * 
 * 
 */
