export function toast(message) {
  wx.showToast({
    title: message,
    icon: 'none'
  });
};

export function loading(title) {
  wx.showLoading({
    title,
    mask: true
  });
};

export function open(id, link) {
  setTimeout(() => {
    if (link) {
      if (link === 'https://web.wutnews.net/act/calendar/index.html') {
        wx.navigateTo({
          url: '/pages/biz/calendar/index'
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
        url: '/pages/biz/article/detail?id=' + id
      });
    }
  }, 200);
}