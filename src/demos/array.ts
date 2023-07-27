export default {
  name: 'Arrays',
  schema: {
    description: '数组格式组件',
    type: 'object',
    properties: {
      staticArray: {
        title: 'staticArray',
        type: 'array',
        items: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      singleTypeArray: {
        title: 'singleTypeArray',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            age: {
              type: 'number',
            },
          }
        }
      },
      multiSelectArray: {
        title: 'multiSelectArray',
        type: 'array',
        items: {
          type: 'string',
          enum: ['123', '456', '789'],
        },
      }
    }
  },
  uiSchema: {},
  default: {
    staticArray: ['licop', 23],
    singleTypeArray: [{ name: 'anna', age: 12 }]
  },
}
