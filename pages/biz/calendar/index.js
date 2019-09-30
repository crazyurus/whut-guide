import * as ui from '../../../libs/ui.js';
import native from '../../../libs/native.js';
import app from '../../../libs/app.js';

const url = 'https://web.wutnews.net/act/calendar/assets/images/calendar.jpg';

Page({
  data: {},
  onShareAppMessage() {
    return {
      title: '武汉理工大学校历',
      path: this.route
    };
  },
  preview() {
    native.previewImage({
      current: url,
      urls: [url]
    });
  },
  save() {
    native.showModal({
      title: '提示',
      content: '确定要保存本学期校历到手机相册吗？',
      confirmColor: '#000',
      confirmText: '保存',
    }).then(response => {
      if (response.cancel) return Promise.reject();
      ui.loading('保存中');

      return native.downloadFile({
        url,
      }).then(response => {
        return native.saveImageToPhotosAlbum({
          filePath: response.tempFilePath
        });
      }, () => {
        ui.toast('校历下载失败');
        return Promise.reject();
      }).then(() => {
        native.showToast({
          title: '校历保存成功'
        });
      }, () => {
        ui.toast('校历保存失败');
      }).finally(() => {
        native.hideLoading();
      });
    });
  },
  feedback() {
    app.feedback();
  }
});
