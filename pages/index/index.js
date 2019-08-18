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
    const { id, color, title } = e.target.dataset;

    wx.navigateTo({
      url: `/pages/index/list?id=${id}&color=${color}&title=${title}`
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
