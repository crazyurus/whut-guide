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
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/search?wd=' + wd, {
      loading: '搜索中'
    }).then(response => {
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
    const { id, link } = e.target.dataset;

    if (link) {
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(link)
      });
    } else {
      wx.navigateTo({
        url: '/pages/index/detail?id=' + id
      });
    }
  }
});
