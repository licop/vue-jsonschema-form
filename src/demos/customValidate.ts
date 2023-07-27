import PasswordWidget from '@/components/PasswordWidget'

export default {
  name: '自定义校验',
  schema: {
    description: '自定义校验表单，确认密码两次输入是否相同',
    type: 'object',
    properties: {
      pass1: {
        type: 'string',
        minLength: 10,
        title: '密码',
      },
      pass2: {
        type: 'string',
        minLength: 10,
        title: '确认密码',
      }
    }
  },
  // 自定义校验
  async customValidate(data: any, errors: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (data.pass1 !== data.pass2) {
          errors.pass2.addError('密码必须相同')
        }
        resolve()
      }, 1000)
    })
  },
  uiSchema: {
    properties: {
      pass1: {
        widget: PasswordWidget
      },
      pass2: {
        widget: PasswordWidget
      }
    }
  },
  default: {}
}

