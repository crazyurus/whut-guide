export default new Proxy(wx, {
  get(target, key) {
    if (!(key in wx)) {
      return undefined;
    }

    return function() {
      const params = arguments[0];

      if (typeof params === 'object' && !Array.isArray(params) && !key.endsWith('Sync')) {
        return new Promise((resolve, reject) => {
          target[key]({
            ...params,
            success: res => resolve(res),
            fail: res => reject(res),
            complete() {}
          });
        });
      }

      return target[key](...arguments);
    }
  }
});
