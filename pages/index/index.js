const app = getApp()

Page({
  data: {
    categories: wx.getStorageSync('categories')
  },
  onLoad() {
    const colors = ['#3390b9', '#4fabd2', '#80c5e4', '#8cceed'];
    
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/category').then(response => {
      const categories = response.map((category, index) => {
        return {
          ...category,
          color: colors[Math.floor(index / 2)]
        }
      });

      wx.setStorageSync('categories', categories);
      this.setData({
        categories,
      });
    }, false);
  },
  onShareAppMessage() {
    return {};
  },
  detail(e) {
    const { id, color, title } = e.target.dataset;

    wx.navigateTo({
      url: `/pages/index/list?id=${id}&color=${color}&title=${title}`
    });
  },
  search(e) {
    wx.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
})
