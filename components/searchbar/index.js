let word = '';

Component({
  properties: {
    defaultValue: String
  },
  methods: {
    search(e) {
      const type = e.type;
      const wd = type === 'tap' ? word : e.detail.value;

      this.triggerEvent('search', { value: wd });
    },
    change(e) {
      word = e.detail.value;
    }
  }
})
