import wxs from '../../utils/wxs.js';
import posts from '../../api/posts.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeIcon: '../../images/like.png',
    likedIcon: '../../images/liked.png',
    post: {},
    loading: true
  },

  /**
   * 返回按钮
   */
  handleBack: function () {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 是否点赞文章
   */
  toggleStarPost: function () {
    const self = this;

    self.setData({
      'post.star': !self.data.post.star
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    this.loadPost(id);
  },

  /**
   * 渲染完成事件
   */
  handleWxparseRendered: function () {
    this.setData({
      loading: false
    });
  },

  /**
   * load post by id
   */
  loadPost: function (id) {
    const self = this;

    return posts.getOne(id)
      .then(res => { 
        const post = res.data;
        self.setData({ post: post });
        return post;
      })
      .then(res => {
        self.setData({
          post: res
        });       
      });
  },
  /**
   * 跳转到图片分享
   */
  imageShare: function () {
    const self = this;
    wx.navigateTo({
      url: '../share/share?content=' + self.data.post.title,
    })
  }
})