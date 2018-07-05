// page/components/provincecity/provincecity.js
Component({
  externalClasses: ['item-btn'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    aProvinceData: {
      type: Array,
      value: [{ id: 0, name: "北京市" }, { id: 1, name: "天津市" }, { id: 2, name: "上海市" }, { id: 3, name: "重庆市" }, { id: 4, name: "河北省" }, { id: 5, name: "河南省" }, { id: 6, name: "陕西省" }, { id: 7, name: "安徽省" }]
    },
    aCityData: {
      type: Array,
      value: [{ id: 0, name: "北京市", parentid:0 }, { id: 1, name: "石家庄市", parentid: 4 }, { id: 2, name: "保定市", parentid: 4 }, { id: 3, name: "合肥市", parentid: 7  }, { id: 4, name: "蚌埠市",parentid: 7 }, { id: 5, name: "西安市", parentid: 6  }, { id: 6, name: "周口店", parentid: 5  }, { id: 7, name: "廊坊市", parentid: 4 }]
    },
    iCurrentSelect: {
      type: Number,
      value: '1'
    },
    iCurrentCity:{
      type: Number,
      value: '1'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   aCurrentCityData:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 选择省份
     */
    fChooseProvince(e){
     let _This=this;
     let oItem = e.currentTarget.dataset.oitem;

     let aCityData = _This.data.aCityData||[];
     let aCurrentCityData=aCityData.filter(item=>{
       return item.parentid == oItem.id;   
     });
     _This.setData({
       iCurrentSelect: oItem.id,
       aCurrentCityData: aCurrentCityData
     });
    },
    /**
     * 选择城市
     */
    fChooseCity(e){
        console.log("this city-----------",e);
        let _This=this;
        let oItem = e.currentTarget.dataset.oitem;
        _This.setData({
          iCurrentCity: oItem.id
        });
        _This.triggerEvent("fChooseCity")
    }
  }
})


/*********demo**********/

/**
 * json
 * "usingComponents": {
 *    "province-city": "/page/components/provincecity/provincecity"
 * wxml
 * <province-city id='province' title="{{title}}"   bind:fChooseCity="AAA"></province-city>
 * 
 * js
 * 
 *   AAA(e) {
 *  console.log("=-=-==-=-eeee-=-=-=",e);
 *   console.log('你点击了取消');
 *  console.log(this.selectComponent("#province"))
 * },
 * 
 * 
 * 
 * 
 */