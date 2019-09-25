export default new Proxy(wx, {
  get(target, key) {
    if (!(key in wx)) {
      return undefined;
    }

    return function(params) {
      if (key.endsWith('Sync')) {
        return target[key](params);
      }

      return new Promise((resolve, reject) => {
        target[key]({
          ...params,
          success: res => resolve(res),
          fail: res => reject(res),
          complete() {}
        });
      });
    }
  }
})
