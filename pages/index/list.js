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
    this.setData({
      title: options.title
    });

    const articles = await request.get('https://test-api-iwut.wutnews.net/api/v1/category?id=' + options.id);
    this.setData({
      articles,
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
