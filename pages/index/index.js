const app = getApp()

Page({
  data: {},
  onLoad() {
    app.loadFontFace();
  },
  detail(e) {
    const id = e.target.dataset.id;

    wx.navigateTo({
      url: '/pages/index/list?id=' + id
    });
  },
  about() {
    app.about();
  }
})
