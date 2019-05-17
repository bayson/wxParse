import wxs from '../../utils/wxs.js';
import weblogin from '../../api/weblogin.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scene: {}
  },

  /**
   * 退出小程序
   */
  handleCancle: function () {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    options.scene = encodeURIComponent('login=djfalksdfsdkf');
    
    let scene = decodeURIComponent(options.scene);
    self.data.scene = scene.split('=');
  },

  /**
   * 确认登录网页
   */
  handleTapLogin: function () {
    const self = this;

    wxs.login()
      .then(res => { return res.code; })
      .then(res => { return weblogin.bindUser({ code: res, token: self.data.scene[1] }); })
      .then(res => { wx.navigateBack({ delta: 1 }); })
      .catch(err => {
        wx.showModal({
          title: '抱歉',
          content: err.errMsg,
          showCancel: false
        });
      });
  }
});