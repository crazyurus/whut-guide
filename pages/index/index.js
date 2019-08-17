import categories from '../../data/category.js';

const app = getApp()

Page({
  data: {
    categories
  },
  onLoad() {
    app.loadFontFace();
  },
  onShareAppMessage() {
    return {};
  },
  detail(e) {
    const query = e.target.dataset;

    wx.navigateTo({
      url: `/pages/index/list?id=${query.id}&color=${query.color}&title=${query.title}`
    });
  },
  search(e) {
    wx.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
})
