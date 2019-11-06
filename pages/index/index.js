import regeneratorRuntime from 'regenerator-runtime';
import request from '../../libs/request.js';
import native from '../../libs/native.js';
import app from '../../libs/app.js';

Page({
  data: {
    categories: native.getStorageSync('categories') || []
  },
  async onLoad() {
    const categories = await request.get('/category', {
      loading: this.data.categories.length === 0
    });

    native.setStorageSync('categories', categories);
    this.setData({
      categories,
    });
  },
  onShareAppMessage() {
    return {};
  },
  detail(e) {
    const { id, title } = e.detail;

    setTimeout(() => {
      native.navigateTo({
        url: `/pages/index/list?id=${id}&title=${title}`
      });
    }, 200);
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
