// page/components/simpleprogram/simpleprogram.js
Component({
  externalClasses: ['score-style'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    iscore:{
      type: Number,
      value:35
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

/*************demo**************/
/**
 * 
 * json
 * "usingComponents": {
 *  "simple-program": "/page/components/simpleprogram/simpleprogram"
 * 
 * wxml
 *       <simple-program id='simpleprogram' iscore="{{55}}" score-style="score-style">
 *     <view slot="iname">记录</view>
 *       <view slot="iscore">55</view>
 *    </simple-program>
 * 
 * 
 * js
 * 
 * 
 * 
 * 
 */
