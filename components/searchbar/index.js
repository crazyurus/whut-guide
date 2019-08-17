let word = '';

Component({
  properties: {
    defaultValue: String
  },
  methods: {
    search(e) {
      const type = e.type;
      const wd = type === 'tap' ? word : e.detail.value;

      if (wd.trim() === '') {
        wx.showToast({
          title: '搜索关键词必填',
          icon: 'none'
        });
        return;
      }

      this.triggerEvent('search', { value: wd });
    },
    change(e) {
      word = e.detail.value;
    }
  }
})
