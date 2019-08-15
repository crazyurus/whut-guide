App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'token-student-guide'
      })
    }

    this.globalData = {};
  },
  loadFontFace() {
    wx.loadFontFace({
      family: '方正大标宋',
      source: 'url(https://746f-token-student-guide-1300026820.tcb.qcloud.la/assets/fonts/FZCUJINLJW.woff?sign=c15d5896700cdfd82a8ee8d1652a684e)'
    });
  }
})
