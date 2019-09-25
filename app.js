App({
  onLaunch() {
    this.globalData = {};
    this.loadFontFace();
  },
  loadFontFace() {
    if (wx.loadFontFace) {
      wx.loadFontFace({
        family: '方正大标宋',
        source: 'url(https://freshman-static-itoken-team-public-hk-01.oss-cn-hongkong.aliyuncs.com/fonts/FZCUJINLJW.woff2)'
      });
    }
  },
  about() {
    wx.showModal({
      title: '理工大指北',
      content: 'Token团队出品\n产品：曹峻玮 陈骁驰\n设计：许亚婷\n开发：廖星 李劲巍 刘福鑫',
      showCancel: false,
      confirmColor: '#000'
    });
  },
  feedback() {
    const systemInfo = wx.getSystemInfoSync();

    if (systemInfo.AppPlatform === 'qq') {
      const wj = 'https://wj.qq.com/s2/4309434/95ba';
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(wj)
      });
    } else {
      wx.navigateToMiniProgram({
        appId: 'wxebadf544ddae62cb',
        path: '/pages/survey/index?sid=4309434&hash=95ba'
      });
    }
  }
});
