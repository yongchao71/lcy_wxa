// page/components/cmarking/cmarking.js
Component({
  externalClasses: ['star-style'],
  options: {
    multipleSlots: true
  },
  ready:function(){
    let _This=this;
    let aStar =[];
    let imax = _This.data.imax||5;
    for(let i=0;i<imax;i++){
      aStar.push(i);
    }
    _This.setData({
      aStar: aStar
    });
  },
  /**
   * 组件的属性列表
   */
  properties: {
    imax: {
      type: Number,
      value: 5
    },
    istarcount: {
      type: Number,
      value: 0
    },
    arankdes:{
      type: Array,
      value:["不佳","一般","满意","很好","极好"]
    },
    isshowdes: {
      type: Boolean,
      value: false
    },
     imgstar: {
       type: String,
       value: '/public/images/icon-tap.png'
    },
     imgustar: {
       type: String,
       value: '/public/images/icon-remark.png'
     },
     enabled:{
       type:Boolean,
       value:false
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    aStar: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 改变评分
     */
    fChangeStar(e){
     let _This=this;
     let enabled = _This.data.enabled;
     let iindex = e.currentTarget.dataset.iindex+1;
     if (enabled){
      _This.setData({
        istarcount:iindex
      });
      let  ostarcount = { "istarcount": iindex} // detail对象，提供给事件监听函数
      _This.triggerEvent('fchangestar', ostarcount);
     }
    },
  }
})

/***********demo**********/

/**
 * 
 * json
 * "usingComponents": {
 *     "c-marking": "/page/components/cmarking/cmarking"
 * 
 * wxml
 *   <c-marking  bind:fchangestar="fTest"  istarcount="{{iStarCount}}" star-style="star-style"  enabled="true" >
 *     <text slot="rname"> 效果</text>
 *      <view class='itext' slot="stxt">gggg</view>
 *     </c-marking>
 * 
 * js
 * 
 * 
 *  fTest(e){
 *  console.log("===========",e);
 *   let _This=this;
 *  let iStarCount = e.detail.istarcount;
 *   console.log("iStarCount--------", iStarCount);
 *  _This.setData({
 *     iStarCount: iStarCount
 *  });
 * },
 * 
 * 
 * 
 * 
 * 
 */
