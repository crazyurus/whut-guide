App({
  onLaunch() {
    this.globalData = {};
  },
  loadFontFace() {
    if (wx.loadFontFace) {
      wx.loadFontFace({
        family: '方正大标宋',
        source: 'url(https://freshman-static-itoken-team-public-hk-01.oss-cn-hongkong.aliyuncs.com/fonts/FZCUJINLJW.woff2)'
      });
    }
  },
  loading(title) {
    wx.showLoading({
      title,
      mask: true
    });
  },
  fetch(options) {
    const self = this;
    const { loading = true, ...restOptions } = options;
    
    return new Promise((resolve, reject) => {
      if (loading) {
        self.loading(loading === true ? '加载中' : loading);
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
      content: 'Token团队出品\n产品：曹峻玮 陈骁驰\n设计：许亚婷\n开发：廖星 李劲巍 刘福鑫',
      showCancel: false,
      confirmColor: '#000'
    });
  },
  open(id, link) {
    if (link) {
      if (link === 'https://web.wutnews.net/act/calendar/index.html') {
        wx.navigateTo({
          url: '/pages/common/calendar'
        });
      }
      else if (link.indexOf('http') === 0) {
        wx.navigateTo({
          url: '/pages/common/webview?url=' + encodeURIComponent(link)
        });
      } 
      else {
        wx.navigateTo({
          url: link
        });
      }
    } else {
      wx.navigateTo({
        url: '/pages/index/detail?id=' + id
      });
    }
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
})
