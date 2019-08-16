const app = getApp()

Page({
  data: {},
  onLoad() {
    app.loadFontFace();
  },
  detail() {
    wx.navigateTo({
      url: '/pages/index/detail'
    });
  },
  about() {
    app.about();
  }
});
