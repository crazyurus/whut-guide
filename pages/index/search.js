const app = getApp()

Page({
  data: {
    articles: [],
    color: '#3390b9',
    wd: ''
  },
  onLoad(options) {
    app.loadFontFace();
    this.fetch(options.wd);
  },
  fetch(wd) {
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/search?wd=' + wd).then(response => {
      this.setData({
        articles: response,
        wd: wd
      });
    });
  },
  search(e) {
    this.fetch(e.detail.value);
  },
  detail(e) {
    const { id } = e.target.dataset;

    wx.navigateTo({
      url: '/pages/index/detail?id=' + id
    });
  }
});
