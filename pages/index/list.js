import regeneratorRuntime from 'regenerator-runtime';
import request from '../../libs/request.js';
import * as ui from '../../libs/ui.js';
import native from '../../libs/native.js';
import app from '../../libs/app';
import { getPagePath } from '../../libs/utils.js';

Page({
  data: {
    articles: [],
    title: '',
  },
  async onLoad(options) {
    const articles = await request.get('/category?id=' + options.id);
    
    this.setData({
      articles,
      title: options.title,
    });
  },
  onShareAppMessage() {
    return {
      title: this.data.title,
      path: getPagePath(this),
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
