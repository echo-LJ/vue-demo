// AuthenticationService：认证
import Api from '@/services/Api'

export default {
  // 登陆 // 认证信息
  register (credentials) {
    return Api().post('reguster', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
