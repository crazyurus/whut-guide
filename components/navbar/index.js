const systemInfo = wx.getSystemInfoSync();
const menuButton = wx.getMenuButtonBoundingClientRect();

Component({
  properties: {
    title: String,
    color: {
      type: String,
      value: '#000'
    },
    bgColor: {
      type: String,
      value: 'transparent'
    },
  },
  data: {
    statusBarHeight: systemInfo.statusBarHeight,
    navBarHeight: menuButton.height + (menuButton.top - systemInfo.statusBarHeight) * 2,
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
      if (this.data.showBack) wx.navigateBack();
    }
  }
});
