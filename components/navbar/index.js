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
    statusBarHeight: 20,
    navBarHeight: 44,
    showBack: false
  },
  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync();
      const menuButton = wx.getMenuButtonBoundingClientRect();

      this.setData({
        statusBarHeight: systemInfo.statusBarHeight,
        navBarHeight: menuButton.height + (menuButton.top - systemInfo.statusBarHeight) * 2,  
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
