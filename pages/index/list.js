const app = getApp()

Page({
  data: {
    articles: []
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://www.easy-mock.com/mock/5d57960889a50f63cfe141ba/guide/api/v1/category/' + options.id).then(response => {
      this.setData({
        articles: response.articles
      });
    });
  },
  detail() {
    wx.navigateTo({
      url: '/pages/index/detail'
    });
  },
  about() {
    app.about();
  }
});
