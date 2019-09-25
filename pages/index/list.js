import request from '../../libs/request.js';
import * as ui from '../../libs/ui.js';
import native from '../../libs/native.js';
import app from '../../libs/app';

Page({
  data: {
    id: 0,
    articles: [],
    title: '',
    color: ''
  },
  onLoad(options) {
    request.get('https://test-api-iwut.wutnews.net/api/v1/category?id=' + options.id).then(response => {
      this.setData({
        articles: response,
        color: options.color
      });
    });

    this.setData({
      id: options.id,
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
    ui.open(id ,link);
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
