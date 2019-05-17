import request from '../utils/request.js';

const weblogin = {
  /**
   * 绑定用户微信
   */
  bindUser: function (data) {
    return request.post('/login/acode', data);
  }
}

export default weblogin;