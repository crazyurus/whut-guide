import categories from '../../data/category.js';

const app = getApp()

Page({
  data: {
    categories
  },
  onLoad() {
    app.loadFontFace();
  },
  detail(e) {
    const query = e.target.dataset;

    wx.navigateTo({
      url: `/pages/index/list?id=${query.id}&color=${query.color}`
    });
  },
  about() {
    app.about();
  }
})
