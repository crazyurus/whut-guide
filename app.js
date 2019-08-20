App({
  onLaunch() {
    this.globalData = {};
  },
  loadFontFace() {
    wx.loadFontFace({
      family: '方正大标宋',
      source: 'url(https://746f-token-student-guide-1300026820.tcb.qcloud.la/assets/fonts/FZCUJINLJW.woff2?sign=1f341cae3293e68bebe86e292b9ec3b7)'
    });
  },
  fetch(options) {
    const self = this;
    const { loading = true, ...restOptions } = options;
    
    return new Promise((resolve, reject) => {
      if (loading) {
        wx.showLoading({
          title: loading === true ? '加载中' : loading,
          mask: true
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
            self.toast(response.statusCode === 200 ? response.data.msg : response.statusCode + ' ' + response.errMsg);
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
      get(url, options) {
        return self.fetch({
          method: 'GET',
          url,
          ...options
        });
      },
      post(url, data, options) {
        return self.fetch({
          method: 'POST',
          url,
          data,
          ...options
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
      title: '理工大指北',
      content: 'Token团队出品\n产品：曹峻玮\n设计：许亚婷\n开发：廖星 李劲巍',
      showCancel: false,
      confirmColor: '#000'
    });
  }
})
