import request from '@utils/request'
import { UserRuleForm, PhoneCodeForm, PhoneRuleForm } from '@interface/login'

interface ILoginRequest {
  code: string
  msg: string
  data?: string | null
}

// 获取验证码
export function captchaImage(params): Promise<ArrayBuffer> {
  return request({
    url: '/captcha/image',
    responseType: 'arraybuffer',
    method: 'GET',
    params
  })
}

interface UsernameRequest {
  code: string
  msg: string
  date?: string
}

// 账号登录
export function loginByJson(data: UserRuleForm): Promise<UsernameRequest> {
  return request({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}

//手机验证码登录
export const loginByMobile = (data: PhoneRuleForm): Promise<ILoginRequest> => {
  return request({
    url: '/u/loginByMobile',
    method: 'post',
    data
  })
}

//登录动态验证码
export const loginCaptcha = (data: PhoneCodeForm): Promise<ILoginRequest> => {
  return request({
    url: '/captcha/sendRegisterOrLoginCaptcha',
    params: data
  })
}
