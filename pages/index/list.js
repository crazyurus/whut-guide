import regeneratorRuntime from 'regenerator-runtime';
import request from '../../libs/request.js';
import * as ui from '../../libs/ui.js';
import native from '../../libs/native.js';
import app from '../../libs/app';

Page({
  data: {
    articles: [],
    title: '',
    color: ''
  },
  async onLoad(options) {
    const articles = await request.get('/category?id=' + options.id);
    
    this.setData({
      articles,
      title: options.title,
      color: options.color
    });
  },
  onShareAppMessage() {
    return {
      title: this.data.title,
      path: this.route
    };
  },
  detail(e) {
    const { id, link } = e.detail;
    ui.open(id, link);
  },
  search(e) {
    native.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
});
