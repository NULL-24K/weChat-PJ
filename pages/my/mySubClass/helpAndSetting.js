// pages/my/mySubClass/helpAndSetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum:'18767090623'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
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
    var shareId = app.shareOrAdmin_ID();
    return {
      title: '上蜜蜂直聘,发现更多机会',
      path: '/pages/index/index?shareId=' + shareId,
      success: function (res) {
        console.log(res)
      }
    }
  },

  pushHelp:function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phoneNum,
    })
  }
})