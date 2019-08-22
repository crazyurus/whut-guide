Page({
  data: {
    url: ''
  },
  onLoad(options) {
    this.setData({
      url: decodeURIComponent(options.url)
    });
  },
  onShareAppMessage(options) {
    return {
      path: '/pages/common/webview?url=' + encodeURIComponent(options.webViewUrl)
    };
  }
});