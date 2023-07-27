import PasswordWidget from '@/components/PasswordWidget'

export default {
  name: 'UiSchema',
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 10,
        title: '姓名'
      },
      pass: {
        type: 'string',
        minLength: 10,
        title: '密码'
      },
      address: {
        type: 'string',
        minLength: 10,
        title: '地址'
      }
    },
  },
  uiSchema: {
    properties: {
      name: {
        color: 'blue'
      },
      pass: {
        widget: PasswordWidget
      },
      address: {
        color: 'red'
      }
    }
  },
  default: {
    name: 'licop',
    pass: '123456',
    address: '浙江省杭州市'
  }
}
