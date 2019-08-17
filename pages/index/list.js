const app = getApp()

Page({
  data: {
    articles: [],
    title: '',
    color: '#3390b9'
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://www.easy-mock.com/mock/5d57960889a50f63cfe141ba/guide/api/v1/category/' + options.id).then(response => {
      this.setData({
        articles: response.articles,
        title: options.title,
        color: options.color
      });
    });
  },
  detail(e) {
    const id = e.target.dataset.id;

    wx.navigateTo({
      url: '/pages/index/detail?id=' + id
    });
  },
  about() {
    app.about();
  }
});
