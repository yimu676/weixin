
const postsData = require('../../data/posts-data')

// miniprogram/pages/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'Nov 18 2019',
    title:'正是虾肥蟹状时'
    //单项数据绑定
  },
process:function(){
  var date = 'Nov 18 2019'
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  this.setData({posts_key:postsData.postList})
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    console.log(postId)
    
    wx.navigateTo({
      url: "post-detail/post-detail?postId="+postId
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

  }
})