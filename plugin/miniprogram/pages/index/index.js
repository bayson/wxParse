Page({
  data: {
    html: "<span>aaaaaaaaaaaa</span><ruby>拼音<rt>pinyin</rt></ruby>issue#8<span>aaaaaaaaaaa</span>[01]<pre><code>$a = 'c';$b = 'd'; echo $a . $d;</code></pre><img src='https://img18.3lian.com/d/file/201709/21/f1c6153b5c97aaf7812c86d5da36e8c6.jp' />",

    his: "<span style='font-family: 'PingFang SC'; color: rgb(51, 51, 51); background: rgb(255, 255, 255);'>issue#6</span><br/><img src='https://img18.3lian.com/d/file/201709/21/f1c6153b5c97aaf7812c86d5da36e8c6.jpeg'>issue#7"
  },
  /**
   * 测试图片点击事件处理
   */
  handleTapImage: function (e) {
    console.log(e)
  },

  /**
   * 测试图片加载事件
   */
  handleLoadImage: function (e) {
    console.log(e)
  },

  /**
   * 测试图片加载出错事件
   */
  handleLoadImageError: function (e) {
    console.log(e)
    e.detail.target.dataset.src ="https://img18.3lian.com/d/file/201709/21/f1c6153b5c97aaf7812c86d5da36e8c6.jpeg"
  }
})