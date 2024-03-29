// miniprogram/pages/user/user.js
import { cloudRequest } from '../../api/request'

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    openid: '',
    version: '3.1.1'
  },

  async onGetUserInfo(e) {
    const res = await cloudRequest('login');
    const { openid } = res;
    const { userInfo } = e.detail;
    app.globalData.userInfo = userInfo;
    app.globalData.openid = res.openid;
    wx.setStorageSync('openid', openid);
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo,
      openid
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { miniProgram = {} } = wx.getAccountInfoSync();
    this.setData({
      version: miniProgram.version
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
    this.setData({
      openid: app.globalData.openid,
      userInfo: app.globalData.userInfo,
    })
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