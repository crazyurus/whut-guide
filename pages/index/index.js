import request from '../../libs/request.js';
import native from '../../libs/native.js';
import app from '../../libs/app.js';

Page({
  data: {
    categories: native.getStorageSync('categories') || []
  },
  async onLoad() {
    const colors = ['#3390b9', '#4fabd2', '#80c5e4', '#8cceed'];
    const response = await request.get('https://test-api-iwut.wutnews.net/api/v1/category', {
      loading: this.data.categories.length === 0
    });
    const categories = response.map((category, index) => {
      return {
        ...category,
        color: colors[index > 7 ? 3 : Math.floor(index / 2)]
      }
    });

    native.setStorageSync('categories', categories);
    this.setData({
      categories,
    });
  },
  onShareAppMessage() {
    return {};
  },
  detail(e) {
    const { id, color, title } = e.target.dataset;

    native.navigateTo({
      url: `/pages/index/list?id=${id}&color=${color}&title=${title}`
    });
  },
  search(e) {
    native.navigateTo({
      url: '/pages/index/search?wd=' + e.detail.value
    });
  },
  about() {
    app.about();
  }
})
