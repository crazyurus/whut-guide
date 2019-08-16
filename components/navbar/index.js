const systemInfo = wx.getSystemInfoSync();

Component({
  properties: {
    title: String,
    color: {
      type: String,
      value: '#3e3636'
    },
    bgColor: {
      type: String,
      value: 'transparent'
    },
  },
  data: {
    statusBarHeight: systemInfo.statusBarHeight,
    navBarHeight: systemInfo.system.includes('Android') ? 48 : 44,
    system: systemInfo.system,
    showBack: false
  },
  lifetimes: {
    attached() {
      this.setData({
        showBack: getCurrentPages().length > 1
      });
    }
  },
  methods: {
    back() {
      wx.navigateBack();
    }
  }
});
