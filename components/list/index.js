import computedBehavior from 'miniprogram-computed';

Component({
  behaviors: [computedBehavior],
  properties: {
    items: Array,
    empty: String,
  },
  methods: {
    detail(e) {
      this.triggerEvent('open', e.currentTarget.dataset);
    }
  },
  computed: {
    computedItems({ items }) {
      const colors = ['#3390b9', '#4fabd2', '#80c5e4', '#8cceed'];

      return items.map((item, index) => {
        return {
          ...item,
          color: colors[index > 7 ? 3 : Math.floor(index / 2)]
        }
      });
    }
  }
})
