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
  onLoad(options) {
    const articles = request.get('https://test-api-iwut.wutnews.net/api/v1/category?id=' + options.id).then(articles => {
      this.setData({
        articles,
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
