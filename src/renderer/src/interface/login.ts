export interface UserRuleForm {
  username: string
  password: string
  key: string
  captcha: string
}

export interface PhoneRuleForm {
  mobile: string
  captcha: string
}

export interface PhoneCodeForm {
  mobile: string
}
