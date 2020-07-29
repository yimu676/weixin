// miniprogram/pages/posts/post-detail.js
var postsData = require('../../../data/posts-data')
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
 onLoad: function (option) {
        var postId = option.id;
        this.data.currentPostId = postId;
        var postData = postsData.postList[postId];
        this.setData({
            postData: postData
        })
        var postsCollected = wx.getStorageSync('posts_collected')
        if(postsCollected){
         var postCollected = postsCollected[postId];
         if(postCollected){
          this.setData({
            collected: postCollected
          })
         }
        
        }else{
          var postCollected = {};
          postCollected[postId] = false;
          wx.setStorageSync('posts_collected', postCollected);
        }
      
      },



 
// },
  onColletionTap: function(event){ 
  var postsCollected = wx.getStorageSync('posts_collected')
  var postCollected = postsCollected[this.data.currentPostId];
  postCollected = !postCollected;
  postsCollected[this.data.currentPostId]=postCollected;
  wx.setStorageSync('posts_collected', postsCollected);
  this.setData({
    collected:postCollected
  })

  wx.showToast({
    title: postCollected?'收藏成功':"取消成功",
    duration: 1000,
    icon:"success"

  })
 },
 onShareTap:function(event){
   var itemList = [
    "分享给微信好友",
    "分享到朋友圈",
    "分享到QQ",
    "分享到微博"
];
   wx.showActionSheet({
  itemList : itemList,
  itemColor:"#405f80",
  success:function(res){
   wx.showModal({
     title:"用户"+itemList[res.tapIndex],
     content:"用户是否取消"+res.cancel+"现在无法实现分享功能"
   }) 
  }
   })
 

 },
 onMusicTap:function(event){
  wx.playBackgroundAudio({
    dataUrl: 'http://music.163.com/song/media/outer/url?id=142604.mp3',
    title:"夜夜夜夜-齐秦",
    coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
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