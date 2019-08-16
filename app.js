App({
  onLaunch() {
    this.globalData = {};
  },
  loadFontFace() {
    wx.loadFontFace({
      family: '方正大标宋',
      source: 'url(https://746f-token-student-guide-1300026820.tcb.qcloud.la/assets/fonts/FZCUJINLJW.woff?sign=c15d5896700cdfd82a8ee8d1652a684e)'
    });
  },
  about() {
    wx.showModal({
      title: '新生手册',
      content: 'Token团队出品\n产品：曹峻玮\n设计：一期一祈\n开发：廖星',
      showCancel: false,
      confirmColor: '#000'
    });
  }
})
