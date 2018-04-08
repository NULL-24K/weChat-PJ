// pages/my/mySubClass/jobIntention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    styData:[
      { title: '期望工作地', pickMode:'region',placehoderStr:'请选择期望工作地址',pickValueArr:[]},
      { title: '期望行业',pickMode: 'selector', placehoderStr: '请选择期望行业', pickValueArr: ['IT/通信/电子/互联网', '餐饮/酒店/旅游', '房地产/建筑', '服务业', '交通/运输/物流', '教育', '金融', '贸易/批发/零售/租赁', '能源/矿产/环保', '农/林/牧/渔', '商业服务', '生产/加工/制造', '文化/传媒/娱乐/体育', '医疗/卫生/保健', '政府/公共事业', '其他'] },
      { title: '期望职位', pickMode: 'selector', placehoderStr: '请选择职位', pickValueArr: ['IT', '客服', '催收', '外派'] },
      { title: '期望薪资', pickMode: 'selector', placehoderStr: '请选择期望薪资', pickValueArr: ['1000~3000', '3001~5000', '5001~8000', '8000~12000', '12000~20000', '20000以上'] },
      { title: '求职状态', pickMode: 'selector', placehoderStr: '选择您当前求职状态', pickValueArr: ['正在找工作-随时到岗', '在职-正在考虑换工作', '在职-考虑更好的工作机会', '在职-暂无跳槽意向'] }
    ],

    valueArr:['','','','','']
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'jobIntention',
      success: function(res) {
        if (res.data.length == 5){
          that.setData({
            valueArr: res.data
          })
        }
      },
    })
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

  bindPicker:function(e){
    var that = this;
    var selectIndex = e.currentTarget.id;
    var newValueArr = that.data.valueArr;
    if (selectIndex == 0){
      newValueArr[selectIndex] = e.detail.value;
    }else{
      newValueArr[selectIndex] = that.data.styData[selectIndex].pickValueArr[e.detail.value];
    }
    that.setData({
      valueArr:newValueArr
    })
  },

  submitData:function(){
    var that = this;
    if (that.data.valueArr[0].length == 0){
      wx.showToast({
        title: '期望工作地点不能为空',
        icon:"none",
        duration:1500
      })
      return;
    }
    wx.setStorage({
      key: 'jobIntention',
      data: that.data.valueArr,
      success:function(){
        wx.showToast({
          title: '提交成功',
        })
        setTimeout(
          ()=>{
            wx.navigateBack({
              
            })
          },1500
        )
      }
    })
  },
})