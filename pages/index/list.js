const app = getApp()

Page({
  data: {
    id: 0,
    articles: [],
    title: '',
    color: ''
  },
  onLoad(options) {
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/category?id=' + options.id).then(response => {
      this.setData({
        id: options.id,
        articles: response,
        title: options.title,
        color: options.color
      });
    });

    this.setData({
      title: options.title
    });
  },
  onShareAppMessage() {
    return {
      title: this.data.title,
      path: '/pages/index/list?id=' + this.data.id
    };
  },
  detail(e) {
    const { id, link } = e.target.dataset;
    app.open(id ,link);
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
