// page/components/searchbox/searchbox.js
Component({
  externalClasses: ['item-btn'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '请输入搜索内容'
    },
    value:{
      type:String,
      value:""
    },
    iconSize:{
      type: Number,
      value: 18
    },
    iconStyle:{
      type:String,
      value:""
    },
    iconleft: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  isSearch:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击搜索框
     */
    fClickinput(){
      let _This=this;
      _This.setData({
        isSearch:true
      });
    },
    /**
     * 文本输入框改变
     */
    fBindinput(e){
      let _This=this;
      _This.setData({
        value:e.detail.value
      });
    },
    /**
     * 取消搜索
     */
    fCancelSearch(){
      let _This = this;
      _This.setData({
        isSearch: false,
        value:""
      });
      let result = { value: _This.data.value };
      _This.triggerEvent('cancelsearch', result);
    },
    /**
     * 搜索提交
     */
    fSearchCommit(){
      let _This = this;
      let result={value:_This.data.value};
      _This.triggerEvent('searchcommit', result);

    }
  }
})

/***********************demo******************************/
/**
 * json
 * "usingComponents": {
 *    "search-box": "/page/components/searchbox/searchbox"
 * 
 * wxml
 * <search-box bind:searchcommit="fSearchCommit"></search-box>
 * js
 * 
 *  fSearchCommit(e){
 *  console.log("fSearchCommit-----------",e);
 * }
 * 
 * 
 * 
 */
