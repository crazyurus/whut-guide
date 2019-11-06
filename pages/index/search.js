import regeneratorRuntime from 'regenerator-runtime';
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
  async fetch(wd) {
    const articles = await request.get('/search?wd=' + wd, {
      loading: '搜索中'
    });
    
    this.setData({
      articles,
      wd
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
