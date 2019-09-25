import request from '../../libs/request.js';
import app from '../../libs/app.js';

Page({
  data: {
    categories: wx.getStorageSync('categories')
  },
  onLoad() {
    const colors = ['#3390b9', '#4fabd2', '#80c5e4', '#8cceed'];
    
    request.get('https://test-api-iwut.wutnews.net/api/v1/category').then(response => {
      const categories = response.map((category, index) => {
        return {
          ...category,
          color: colors[index > 7 ? 3 : Math.floor(index / 2)]
        }
      });

      wx.setStorageSync('categories', categories);
      this.setData({
        categories,
      });
    }, !!this.data.categories);
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
