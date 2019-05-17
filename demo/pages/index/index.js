import wxs from '../../utils/wxs.js';
import posts from '../../api/posts.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carouselPosts: [],
    posts: [],
    loading: {
      show: false,
      loadingText: '加载中。。。',
    },
    total: '',
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;

    self.loadPosts(self.data.page);
  },

  /**
   * 加载文章
   * 
   * @param int page 页数
   */
  loadPosts: function (page) {
    const self = this;

    return posts.list(page)
      .then(res => {
        self.data.total = res.data.total;
        self.setData({
          posts: self.data.posts.concat(res.data.data)
        });
        if (!self.data.carouselPosts.length) {
          self.setData({
            carouselPosts: self.data.posts.slice(0, 5)
          });
        }
      });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.data.posts = [];
    this.loadPosts(1)
      .then(res => { wx.stopPullDownRefresh() });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const self = this;
    if (self.data.posts.length < self.data.total) {

      self.data.page += 1;
      self.loadPosts(self.data.page);
    }
  }
});