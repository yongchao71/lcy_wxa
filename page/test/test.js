// page/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().fGetUserData().then(userInfo => {
      console.log("get into test------------", userInfo);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  fGetCurrentPosition(e) {
    console.log("e-------------", e);
    let _This = this;
    let detail = e.detail;
    let iLeft = detail.x - 30;
    let iTop = detail.y;
    let moveX = 40 - iLeft;
    let moveY = 440 - iTop;
    _This.cartAnimation(iLeft, iTop);
  },

  cartAnimation(x, y) {
    let _This = this;
    let endY = 440;
    let endX = 20;
    let animationX = _This.flyX(endX, x);
    let animationY = _This.flyY(endY, y);
    _This.setData({
      ballX: x,
      ballY: y,
      showBall: true
    })
    _This.setTimeoutES6(100).then(() => {
      _This.setData({
        animationX: animationX.export(),
        animationY: animationY.export(),
      })
      return _This.setTimeoutES6(400);
    }).then(() => {
      _This.setData({
        showBall: false,
      })
    })
  },

  setTimeoutES6(second) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(); }, second);
    });
  },
  flyX(moveX, oriX) {
    let animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
    });
    animation.left(moveX).step();
    return animation
  },

  flyY(moveY, oriY) {
    let animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in',
    });
    animation.top(moveY).step();
    return animation
  }

})