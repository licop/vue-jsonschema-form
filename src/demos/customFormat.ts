export default {
  name: '自定义Format',
  schema: {
    description: '自定义Format, 实现简易的color输入组件',
    type: 'object',
    properties: {
      color: {
        type: 'string',
        format: 'color',
        title: '选中颜色'
      }
    }
  },
  uiSchema: {},
  default: {
    color: "#d29d9d"
  }
}

