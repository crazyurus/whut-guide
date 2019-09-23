const app = getApp()

Page({
  data: {
    articles: [],
    color: '#3390b9',
    wd: ''
  },
  onLoad(options) {
    this.fetch(options.wd);
  },
  onShareAppMessage() {
    return {
      title: '搜索“' + this.data.wd + '”的结果'
    };
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
    app.open(id, link);
  },
});
