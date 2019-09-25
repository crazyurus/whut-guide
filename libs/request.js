import * as ui from './ui.js';

function request(options) {
  const { loading = true, ...restOptions } = options;

  return new Promise((resolve, reject) => {
    if (loading) {
      ui.loading(loading === true ? '加载中' : loading);
    }

    wx.request({
      success(response) {
        if (
          response.statusCode === 200 &&
          response.data &&
          response.data.code === 0
        ) {
          resolve(response.data.data);
        } else {
          ui.toast(response.statusCode === 200 ? response.data.msg : response.statusCode + ' ' + response.errMsg);
          reject(response);
        }
      },
      fail: reject,
      complete() {
        if (loading) wx.hideLoading();
      },
      ...restOptions
    });
  });
}

request.get = (url, options) => {
  return request({
    method: 'GET',
    url,
    ...options
  });
};
request.post = (url, data, options) => {
  return request({
    method: 'POST',
    url,
    data,
    ...options
  });
};

export default request;