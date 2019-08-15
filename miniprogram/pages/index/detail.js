const app = getApp()

Page({
  data: {},
  onLoad() {
    app.loadFontFace();
  },
  feedback() {
    wx.navigateToMiniProgram({
      appId: 'wxebadf544ddae62cb',
      path: 'pages/survey/index?sid=1439943&hash=f9db'
    });
  }
});
