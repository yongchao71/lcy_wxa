Component({
  externalClasses: ['ballstyle'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    endX: {
      type: Number,
      value: 300
    },
    endY: {
      type: Number,
      value: 300
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowBall:false //是否显示球
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击当前位置
     */
    fGetCurrentPosition(e) {
      let _This = this;
      let {clientX,clientY}=e.touches[0];// e.target.offsetLeft;
      _This.fBallAnimation(clientX, clientY).then(result=>{
        _This.triggerEvent('fendball', "fff");
      });
    },
    /**
     * 球动态移动
     */
    fBallAnimation(startX, startY) {
      let _This = this;
      let {endX, endY } = _This.data;
      let animationX = _This.fMoveX(endX);
      let animationY = _This.fMoveY(endY);
      _This.setData({
        ballX: startX,
        ballY: startY,
        isShowBall: true
      })
      return _This.fDelay(40).then(() => {
        _This.setData({
          animationX: animationX.export(),
          animationY: animationY.export(),
        })
        return _This.fDelay(400);
      }).then(() => {
        _This.setData({
          isShowBall: false,
        })
      })
    },
    /**
     * 动画延迟,球消失
     */
    fDelay(second) {
       return new Promise((resolve, reject) => {
          setTimeout(() => { resolve(); }, second);
        });
    },
    /**
     * 水平移动
     */
    fMoveX(moveX) {
      let animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'linear',
      });
      animation.left(moveX).step();
      return animation
    },
    /**
     * 垂直移动
     */
    fMoveY(moveY) {
      let animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-in',
      });
      animation.top(moveY).step();
      return animation
    }
  }
})

/**
 * json    "usingComponents": {
 *  "fly-ball": "/page/components/flyball/flyball"
 * }
 * wxml
 *   <fly-ball data-test="AAAAA" endX="300" endY="20" bind:fendball="fTest"><view slot="rname">添加</view></fly-ball>
 * js
 *   fTest(e){
 *    console.log("endball-------------------",e);
 *}
 *  
 */