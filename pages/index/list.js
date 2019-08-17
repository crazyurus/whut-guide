const app = getApp()

Page({
  data: {
    articles: [],
    title: '',
    color: ''
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/category?id=' + options.id).then(response => {
      this.setData({
        articles: response,
        title: options.title,
        color: options.color
      });
    });

    this.setData({
      title: options.title
    });
  },
  detail(e) {
    const id = e.target.dataset.id;

    wx.navigateTo({
      url: '/pages/index/detail?id=' + id
    });
  },
  search(e) {
    wx.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
});
