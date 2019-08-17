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
  fetch(options) {
    const self = this;
    const { loading = true, ...restOptions } = options;
    
    return new Promise((resolve, reject) => {
      if (loading) {
        wx.showLoading({
          title: loading === true ? '加载中' : loading
        });
      }

      wx.request({
        success(response) {
          if (
            response.statusCode === 200 &&
            response.data &&
            response.data.code === 0
          ) {
            resolve(response.data.data);
          } else {
            self.toast(response.statusCode === 200 ? response.statusCode + ' ' + response.errMsg : response.data.msg);
            reject(response);
          }
        },
        fail: reject,
        complete() {
          if (loading) wx.hideLoading();
        },
        ...restOptions
      });
    });
  },
  get request() {
    const self = this;

    return {
      get(url, header = {}) {
        return self.fetch({
          method: 'GET',
          url,
          header
        });
      },
      post(url, data, header = {}) {
        return self.fetch({
          method: 'POST',
          url,
          data,
          header
        });
      }
    };
  },
  toast(message) {
    wx.showToast({
      title: message,
      icon: 'none'
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
