const app = getApp();
const url = 'https://web.wutnews.net/act/calendar/assets/images/calendar.jpg';

Page({
  data: {},
  onShareAppMessage() {
    return {
      title: '校历',
      path: '/pages/biz/calendar/index'
    };
  },
  preview() {
    wx.previewImage({
      current: url,
      urls: [url]
    });
  },
  save() {
    wx.showModal({
      title: '提示',
      content: '确定要保存本学期校历到手机相册吗？',
      confirmColor: '#000',
      confirmText: '保存',
      success(response) {
        if (response.cancel) return;
        app.loading('保存中');

        wx.downloadFile({
          url,
          success(response) {
            const filePath = response.tempFilePath;

            wx.saveImageToPhotosAlbum({
              filePath,
              success() {
                wx.showToast({
                  title: '校历保存成功'
                });
              },
              fail() {
                app.toast('校历保存失败');
              }
            })
          },
          complete() {
            wx.hideLoading();
          }
        });
      }
    });
  },
  feedback() {
    app.feedback();
  }
});
