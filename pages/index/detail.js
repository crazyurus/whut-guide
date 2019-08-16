const app = getApp()
const systemInfo = wx.getSystemInfoSync();

Page({
  data: {},
  onLoad() {
    app.loadFontFace();
  },
  feedback() {
    if (systemInfo.AppPlatform === 'qq') {
      const wj = 'https://wj.qq.com/';
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(wj)
      });
    } else {
      wx.navigateToMiniProgram({
        appId: 'wxebadf544ddae62cb',
        path: '/pages/survey/index?sid=1439943&hash=f9db'
      });
    }
  }
});
