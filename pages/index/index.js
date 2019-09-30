import request from '../../libs/request.js';
import native from '../../libs/native.js';
import app from '../../libs/app.js';

Page({
  data: {
    categories: native.getStorageSync('categories') || []
  },
  onLoad() {
    request.get('https://test-api-iwut.wutnews.net/api/v1/category', {
      loading: this.data.categories.length === 0
    }).then(categories => {
      native.setStorageSync('categories', categories);
      this.setData({
        categories,
      });
    });
  },
  onShareAppMessage() {
    return {};
  },
  detail(e) {
    const { id, title } = e.detail;

    native.navigateTo({
      url: `/pages/index/list?id=${id}&title=${title}`
    });
  },
  search(e) {
    native.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
})
