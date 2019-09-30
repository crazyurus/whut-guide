import request from '../../libs/request.js';
import * as ui from '../../libs/ui.js';

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
      title: '搜索“' + this.data.wd + '”的结果',
      path: this.route
    };
  },
  fetch(wd) {
    return request.get('https://test-api-iwut.wutnews.net/api/v1/search?wd=' + wd, {
      loading: '搜索中'
    }).then(articles => {
      this.setData({
        articles,
        wd
      });
    });
  },
  search(e) {
    this.fetch(e.detail.value);
  },
  detail(e) {
    const { id, link } = e.detail;
    ui.open(id, link);
  },
});
